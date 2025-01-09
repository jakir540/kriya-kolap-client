import { useQuery } from "@tanstack/react-query";
import { FaUserShield, FaUserTie } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";

const ManageUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (user) => {
    fetch(
      `https://kriya-kolap-sever-jakir540.vercel.app/users/admin/${user._id}`,
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
            title: `${user?.name} is Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(
      `https://kriya-kolap-sever-jakir540.vercel.app/users/instructor/${user._id}`,
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
            title: `${user?.name} is Instructor Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#2E344E] p-8">
      <h2 className="text-center text-4xl font-semibold text-white my-8">
        Manage All Users ({users.length})
      </h2>

      <div className="overflow-x-auto bg-[#3B4252] rounded-lg shadow-md">
        <table className="min-w-full table-auto text-white">
          <thead className="text-lg font-semibold bg-[#4C566A]">
            <tr>
              <th className="py-4 px-6 text-left">#</th>
              <th className="py-4 px-6 text-left">Name</th>
              <th className="py-4 px-6 text-left">Email</th>
              <th className="py-4 px-6 text-left">Role</th>
              <th className="py-4 px-6 text-center">Make Admin</th>
              <th className="py-4 px-6 text-center">Make Instructor</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b hover:bg-[#434C5E]">
                <td className="py-4 px-6">{index + 1}</td>
                <td className="py-4 px-6">{user.name}</td>
                <td className="py-4 px-6">{user.email}</td>
                <td
                  className={`py-4 px-6 text-center ${
                    user.role === "admin"
                      ? "text-green-500"
                      : user.role === "instructor"
                      ? "text-blue-500"
                      : "text-yellow-500"
                  }`}
                >
                  {user.role === "admin"
                    ? "Admin"
                    : user.role === "instructor"
                    ? "Instructor"
                    : "Student"}
                </td>

                {/* Make Admin Button */}
                <td className="py-4 px-6 text-center">
                  {user.role === "admin" ? (
                    <button className="btn bg-gray-600 text-white text-sm py-2 px-4 rounded-lg cursor-not-allowed">
                      <FaUserShield className="inline mr-2" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-gradient-to-r from-green-500 to-green-700 text-white text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-l transition-all duration-300"
                    >
                      <FaUserShield className="inline mr-2" />
                    </button>
                  )}
                </td>

                {/* Make Instructor Button */}
                <td className="py-4 px-6 text-center">
                  {user.role === "instructor" ? (
                    <button className="btn bg-gray-600 text-white text-sm py-2 px-4 rounded-lg cursor-not-allowed">
                      <FaUserTie className="inline mr-2" />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm py-2 px-4 rounded-lg hover:bg-gradient-to-l transition-all duration-300"
                    >
                      <FaUserTie className="inline mr-2" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
