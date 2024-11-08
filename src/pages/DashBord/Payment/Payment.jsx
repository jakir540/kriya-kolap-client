import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

    // fetch("https://kriya-kolap-sever-jakir540.vercel.app/order"
    fetch("http://localhost:5000/order"
    , {
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
    <div className="w-1/2 mx-auto">
    <h2 className="text-center text-3xl font-semibold my-10">Payment Process</h2>
  
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("Name")}
        placeholder="Enter Your Name"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <input
        {...register("PostCode")}
        placeholder="PostCode"
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      <select
        {...register("gender")}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      <select
        {...register("BDT")}
        className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      >
        <option value="BDT">BDT</option>
        <option value="Dollar">Dollar</option>
        <option value="Rupees">Rupees</option>
        <option value="other">Other</option>
      </select>
      <button
        type="submit"
        className="block w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Pay
      </button>
    </form>
  </div>
  
  );
};

export default Payment;
