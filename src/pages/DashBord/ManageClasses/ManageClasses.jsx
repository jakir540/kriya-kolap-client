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

  const handleUpdateApproved = (singleClass) => {
    fetch(
      `https://kriya-kolap-sever-jakir540.vercel.app/approvedClasses/${singleClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${singleClass?.classname} is approved now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleUpdateDenied = (singleClass) => {
    fetch(
      `https://kriya-kolap-sever-jakir540.vercel.app/deniedClasses/${singleClass._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${singleClass?.classname} is denied now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#2E344E] p-8">
      <h2 className="text-center text-4xl font-semibold text-white my-8">
        Manage All Classes
      </h2>

      <div className="overflow-hidden bg-[#3B4252] rounded-lg shadow-md">
        <table className="w-full table-auto text-white">
          <thead className="text-lg font-semibold bg-[#4C566A]">
            <tr>
              <th className="py-4 px-6 text-left">Class Image</th>
              <th className="py-4 px-6 text-left">Instructor Name</th>
              <th className="py-4 px-6 text-left">Available Seats</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-center">Actions</th>
              <th className="py-4 px-6 text-center">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass) => (
              <tr key={singleClass._id} className="border-b hover:bg-[#434C5E]">
                <td className="py-4 px-6 relative">
                  <div className="flex items-center space-x-3">
                    <div className="avatar relative group">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={singleClass.imgURL} alt="Class Image" />
                      </div>
                      <div className="absolute top-0 left-0 bg-gray-500 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {singleClass.classname}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6">{singleClass.name}</td>
                <td className="py-4 px-6">{singleClass.seats}</td>
                <td className="py-4 px-6">${singleClass.price}</td>
                <td
                  className={`py-4 px-6 text-center ${
                    singleClass.status === "approved"
                      ? "text-green-500"
                      : singleClass.status === "denied"
                      ? "text-red-500"
                      : "text-yellow-500"
                  }`}
                >
                  {singleClass.status}
                </td>

                <td className="py-4 px-6 text-center">
                  {singleClass.status === "pending" ? (
                    <div className="flex space-x-2 justify-center">
                      <button
                        onClick={() => handleUpdateApproved(singleClass)}
                        className="btn bg-gradient-to-r from-green-500 to-green-700 text-white text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-l transition-all duration-300"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleUpdateDenied(singleClass)}
                        className="btn bg-gradient-to-r from-red-500 to-red-700 text-white text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-l transition-all duration-300"
                      >
                        Deny
                      </button>
                    </div>
                  ) : (
                    <button className="btn bg-gray-500 text-white text-sm cursor-not-allowed">
                      {singleClass.status === "approved"
                        ? "Approved"
                        : "Denied"}
                    </button>
                  )}
                </td>

                <td className="py-4 px-6 text-center">
                  <Link to="/dashbord/manageClasses/feedback">
                    <button className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-l transition-all duration-300">
                      Feedback
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClasses;
