import { Elements } from "@stripe/react-stripe-js";
import CheckOutPaymentForm from "./CheckOutPaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHED_KEY );

const Payment = () => {
  const [singleClass,setSingleClass] = useState({})
    const {id} = useParams()

    const price = singleClass.price
    console.log('price',price,typeof(price))
    useEffect(()=>{

      fetch(`http://localhost:5000/classes/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setSingleClass(data)

      })
    },[id])
  

    const paymentPrice = parseFloat(singleClass.price);
   console.log(paymentPrice)
 
    
  return (
    <div className="w-1/2">
      <h2 className="text-center text-3xl font-semibold my-10">Payment Process </h2>

      <Elements stripe={stripePromise}>
        <CheckOutPaymentForm singleClass={singleClass} paymentPrice={paymentPrice} ></CheckOutPaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
