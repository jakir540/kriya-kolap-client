import { motion } from "framer-motion";
import useAxiosSecure from "../../Hooks/useAxiosSecuir";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
// import { useEffect, useState } from "react";


const ApprovedClassesCard = ({ singleClass }) => {
  const {user} = useAuth()
  const [isAdmin] = useAdmin();  
  const [isInstructor] =useInstructor()



  const [axiosSecure] = useAxiosSecure();
  const { classname, name, price, seats, imgURL, email } = singleClass;

  const handleSelect = (singleClass) => {
    if (user) {
      axiosSecure.post("/mySelectClasses", singleClass).then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "my selected class successfullt",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
    else{
      alert("login first then select item ")
    }
    
  };
  return (
    <div
      className={`${
        seats == 0 ? "bg-red-400" : "bg-base-200"
      } card card-compact w-96  shadow-xl`}
    >
      <motion.figure
        animate={{ scale: 0.9 }}
        transition={{
          ease: "linear",
          duration: 3,
          x: { duration: 1 },
        }}
      >
        <img src={imgURL} alt="yoga class" />
      </motion.figure>
      <div className="card-body">
        <h2 className="card-title">{classname}</h2>
        <h2 className="">Instructor Name: {name}</h2>
        <h2 className="">Instructor Email: {email}</h2>
        <p>Students Available Seat: {seats}</p>
        <p>Price : $ {price}</p>
        <div className="card-actions justify-end">
          {isAdmin || isInstructor || seats == 0 ? (
            <button disabled className="btn bg-orange-600 text-white">
              Select
            </button>
          ) : (
            <button
              onClick={() => handleSelect(singleClass)}
              className="btn bg-[#9ca3af] text-white"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApprovedClassesCard;
