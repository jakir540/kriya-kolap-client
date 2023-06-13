import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyEnrolledClass = () => {
    const [enrolledClass,setEnrolledClass] = useState([])
    useEffect(()=>{
        fetch('https://kriya-kolap-sever-jakir540.vercel.app/payments')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setEnrolledClass(data)

        })
    },[])
    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-8">My All Enrolled Classes {enrolledClass.length}</h2>




            <div>
            <div>
     

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>image</th>
              <th>Name</th>
            
              <th>Price</th>
              <th>Enrolled date</th>
              <th>Balance Seats</th>
          
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((singleEnrolledClass, index) => (
              <tr key={singleEnrolledClass._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleEnrolledClass.imgURL} alt="Yoga photo" />
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  <div>
                    <div className="font-bold">{singleEnrolledClass.name}</div>
                  </div>
                </td>

                
                <td>{singleEnrolledClass?.price}</td>
                <td>{singleEnrolledClass?.date}</td>
                <td className="text-center">{singleEnrolledClass?.seats}</td>
                <td>{singleEnrolledClass?.status}</td>
               
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
            </div>
        </div>
    );
};

export default MyEnrolledClass;