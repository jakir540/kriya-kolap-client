/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Payment = () => {
  const [singleClass, setSingleClass] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://kriya-kolap-sever-jakir540.vercel.app/classes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleClass(data);
      });
  }, [id]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.classId = id;
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-[#2E344E] p-10 rounded-lg shadow-lg mt-10">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-200">
        Payment Process
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <input
          {...register("Name")}
          placeholder="Enter Your Name"
          className="block w-full px-4 py-3 bg-[#1F2633] text-white border border-[#3C4351] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-150"
        />

        <input
          {...register("PostCode")}
          placeholder="Post Code"
          className="block w-full px-4 py-3 bg-[#1F2633] text-white border border-[#3C4351] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-150"
        />

        <select
          {...register("gender")}
          className="block w-full px-4 py-3 bg-[#1F2633] text-white border border-[#3C4351] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-150"
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="other">Other</option>
        </select>

        <select
          {...register("currency")}
          className="block w-full px-4 py-3 bg-[#1F2633] text-white border border-[#3C4351] rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-150"
        >
          <option value="BDT">BDT</option>
          <option value="Dollar">Dollar</option>
          <option value="Rupees">Rupees</option>
          <option value="other">Other</option>
        </select>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-150 shadow-md hover:shadow-lg"
        >
          Proceed to Pay
        </button>
      </form>
    </div>
  );
};

export default Payment;
