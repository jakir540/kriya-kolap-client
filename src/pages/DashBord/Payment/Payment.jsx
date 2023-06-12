import { Elements } from "@stripe/react-stripe-js";
import CheckOutPaymentForm from "./CheckOutPaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHED_KEY );

const Payment = () => {
    const price = useParams()
  

    const paymentPrice = price.paymentPrice;
    const finalPayment = parseFloat(paymentPrice);
   
    
  return (
    <div className="w-1/2">
      <h2 className="text-center text-3xl font-semibold my-10">Payment Process </h2>

      <Elements stripe={stripePromise}>
        <CheckOutPaymentForm finalPayment={finalPayment} ></CheckOutPaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
