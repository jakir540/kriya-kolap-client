import { Elements } from "@stripe/react-stripe-js";
import CheckOutPaymentForm from "./CheckOutPaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import payment from "./payment.css";
import { useForm } from "react-hook-form";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHED_KEY);

const Payment = () => {
  const [singleClass, setSingleClass] = useState({});
  const { id } = useParams();

  const price = singleClass.price;
  console.log("price", price, typeof price);
  useEffect(() => {
    fetch(`https://kriya-kolap-sever-jakir540.vercel.app/classes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleClass(data);
      });
  }, [id]);

  const paymentPrice = parseFloat(singleClass.price);
  console.log(paymentPrice);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(id);
    data.classId = id;

    fetch("https://kriya-kolap-sever-jakir540.vercel.app/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log({ result });
      });
  };

  return (
    <div className="w-1/2">
      <h2 className="text-center text-3xl font-semibold my-10">
        Payment Process{" "}
      </h2>

      {/* <Elements className="bg-slate-600" stripe={stripePromise}>
        <CheckOutPaymentForm  singleClass={singleClass} paymentPrice={paymentPrice} ></CheckOutPaymentForm>
      </Elements> */}

      {/* react hook form for payment  start*/}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name")} placeholder="Enter Your Name: " />
        <input {...register("PostCode")} placeholder="PostCode: " />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <select {...register("BDT")}>
          <option value="female">BDT</option>
          <option value="female">Dollar</option>
          <option value="male">Rupees</option>
          <option value="other">other</option>
        </select>
        <input
          type="submit"
          className="text-red-500 font-semibold btn"
          value="Pay"
        />
      </form>

      {/* react hook form for payment end */}
    </div>
  );
};

export default Payment;
