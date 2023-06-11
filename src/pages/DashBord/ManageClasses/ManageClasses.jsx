import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageClasses = () => {


  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/instructor/classes");
    return res.data;
  });
  console.log(classes);

  const handleUpdateApproved = (singleClass) => {
    console.log("update");
    fetch(`http://localhost:5000/classes/${singleClass._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${singleClass?.name} is approved Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // const handleUpdateDenied = (singleClass) => {
  //   console.log("denied");
  // };

  return (
    <div className="w-full h-screen">
      <h2 className="text-center text-3xl font-semibold my-8">
        Manage All Classes
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Class Image</th>
                <th>Class name</th>
                <th>Instructor name</th>
                <th>Instructor email</th>
                <th>Available seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Deny </th>
                <th>feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((singleClass, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={singleClass.imgURL} alt="yoga image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{singleClass.classname}</td>
                  <td>{singleClass.name}</td>
                  <td>{singleClass.email}</td>
                  <td>{singleClass.seats}</td>
                  <td>{singleClass.price}</td>
                  <td className="text-green-700">{singleClass.status}</td>

                  <th>
                    {singleClass.status === "approved" ? (
                      <button disabled className=" btn btn-sm bg-orange-600">
                        approved
                      </button>
                    ) : (
                      <button
                        onClick={() => handleUpdateApproved(singleClass)}
                        className="btn btn-sm bg-orange-600"
                      >
                        approved
                      </button>
                    )}
                  </th>

                  <th>
                    {singleClass.status === "denied" ? (
                      <button disabled className=" btn btn-sm bg-orange-600">
                        Deny
                      </button>
                    ) : (
                      <button
                        // onClick={() => handleUpdateDenied(singleClass)}
                        className="btn btn-sm bg-orange-600"
                      >
                        Deny
                      </button>
                    )}
                  </th>

                
                  {/* todo use the component and send info to instructor */}
                  <th>

                      <Link to="/dashbord/manageClasses/feedback">
                        <button>feedback</button>
                      </Link>
                  

                  </th>

                  {/* --------------------------- */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageClasses;
