import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/instructor/classes");
    return res.data;
  });

  return (
    <div className="max-w-full mx-auto px-6 py-8">
      <h2 className="text-center text-4xl font-bold text-gray-900 mb-6">
        My Classes ({classes?.length})
      </h2>

      <div className="overflow-x-auto bg-[#1E293B] p-6 rounded-lg shadow-xl">
        <table className="min-w-full table-auto text-white">
          {/* Table Header */}
          <thead>
            <tr className="border-b-2 border-gray-600">
              <th className="py-4 px-6 text-left">Class Image</th>
              <th className="py-4 px-6 text-left">Instructor Name</th>
              <th className="py-4 px-6 text-left">Available Seats</th>
              <th className="py-4 px-6 text-left">Price</th>
              <th className="py-4 px-6 text-left">Status</th>
              <th className="py-4 px-6 text-left">Enrolled Students</th>
              <th className="py-4 px-6 text-left">Update</th>
              <th className="py-4 px-6 text-left">Feedback</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {classes?.map((singleClass, index) => (
              <tr
                key={index}
                className="bg-[#2D3748] hover:bg-[#4A5568] rounded-lg transition-all duration-300"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img src={singleClass.imgURL} alt="class" />
                      </div>
                    </div>
                  </div>
                </td>

                <td className="py-4 px-6">{singleClass.name}</td>

                <td className="py-4 px-6">{singleClass.seats}</td>
                <td className="py-4 px-6 text-yellow-300">
                  ${singleClass.price}
                </td>

                <td className="py-4 px-6">
                  {singleClass.status === "approved" ? (
                    <span className="text-green-500 font-semibold">
                      Approved
                    </span>
                  ) : (
                    <button className="btn btn-xs bg-orange-600 text-white rounded-md transition duration-300 hover:bg-opacity-80">
                      Pending
                    </button>
                  )}
                </td>

                <td className="py-4 px-6">
                  {singleClass.enrolledStudents || 0}
                </td>

                <td className="py-4 px-6 text-center">
                  <Link
                    to={`/dashboard/myClasses/${singleClass._id}`}
                    className="text-blue-500 hover:text-blue-600 transition duration-200"
                  >
                    <GrUpdate className="text-2xl" />
                  </Link>
                </td>

                <td className="py-4 px-6 text-center">
                  <Link to={`/dashboard/feedback/${singleClass._id}`}>
                    <button className="btn btn-xs bg-blue-600 text-white rounded-lg transition duration-300 hover:bg-blue-700">
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

export default MyClasses;
