import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import useAuth from "../../../Hooks/useAuth";

const CheckOutPaymentForm = ({ finalPayment }) => {
  console.log(finalPayment);
  const stripe = useStripe();
  const {user} = useAuth()
  const elements = useElements();
  const [error, setError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");

  //show price for payment

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { finalPayment }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [finalPayment, axiosSecure]);

  // handle submit button
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("card", card);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
          },
        },
      });
if (confirmError) {
    console.log(confirmError)
    setError(confirmError)
}
console.log(paymentIntent)


  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm my-5 "
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {error && <p className="text-red-400 ml-10">{error}</p>}
    </>
  );
};

export default CheckOutPaymentForm;