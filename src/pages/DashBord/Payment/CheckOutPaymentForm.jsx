import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutPaymentForm = ({ singleClass, paymentPrice }) => {
  console.log(typeof paymentPrice, paymentPrice);
  const stripe = useStripe();
  const { user } = useAuth();
  const elements = useElements();
  const [error, setError] = useState("");
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transictionId, setTransictionId] = useState("");

  // show price for payment
  useEffect(() => {
    if (paymentPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { paymentPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [paymentPrice, axiosSecure]);

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
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      setError("");
    }
    setProcessing(true);
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
      console.log(confirmError);
      setError(confirmError);
    }
    console.log("success paymentIntent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      const transictionId = paymentIntent.id;
      setTransictionId(transictionId);
      const { classname, name, price, imgURL, seats, _id } = singleClass;

      const payment = {
        classname,
        user: user?.email,
        imgURL,
        date:new Date(),
        name,
        transictionId,
        selectClass: _id,
        status: "class pending",
        price: parseFloat(price),
        seats: parseFloat(seats - 1),
      };
      //todo
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertResult.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "payment successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
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
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {error && <p className="text-red-400 ml-10">{error}</p>}

      {transictionId && (
        <p className="text-green-600">
          payment successfully transictionId is {transictionId}
        </p>
      )}
    </>
  );
};

export default CheckOutPaymentForm;
