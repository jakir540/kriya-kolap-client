import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useState } from "react";

const MySelectedClass = () => {
    const [paymentPrice ,setPaymentPrice] = useState(null);
  const [axiosSecure] = useAxiosSecure();
  const { data: mySelectClasses = [], refetch } = useQuery(
    ["mySelectClasses"],
    async () => {
      const res = await axiosSecure.get("/mySelectClasses");
      
      return res.data;
    }
  );
  console.log(mySelectClasses);
const handleDelete =(selectClass)=>{
    fetch(`http://localhost:5000/mySelectClasses/${selectClass._id}`,{
        method:"DELETE"
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        refetch()
        if (data.deletedCount > 0) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "deleted successfully",
                showConfirmButton: false,
                timer: 1500,
              });
        }
    })
}

const handlePrice =(p)=>{
    setPaymentPrice(p)
    console.log({p})
}


  return (
    <div>
      <h2 className="text-center my-8 text-3xl font-semibold">
        My Selected Class {mySelectClasses.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mySelectClasses.map((selectClass, index) => (
              <tr key={selectClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={selectClass.imgURL} alt="Yoga photo" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div>
                    <div className="font-bold">{selectClass.name}</div>
                  </div>
                </td>

                <td>{selectClass.email}</td>
                <td>{selectClass.price}</td>
                <th>
                  <button onClick={()=>handleDelete(selectClass)} className="btn bg-red-500 btn-xs">Delete</button>
                </th>
                <th>
                  <Link 
                  to={`/dashbord/payment/${selectClass.price}`} 
                  ><button onClick={()=>handlePrice(selectClass.price)} className="btn bg-green-500 btn-xs">pay</button></Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
