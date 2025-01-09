import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: mySelectClasses = [], refetch } = useQuery(
    ["mySelectClasses"],
    async () => {
      const res = await axiosSecure.get("/mySelectClasses");
      return res.data;
    }
  );

  const handleDelete = (selectClass) => {
    fetch(
      `https://kriya-kolap-sever-jakir540.vercel.app/mySelectClasses/${selectClass._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        if (data.deletedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div
      className="min-h-screen p-10"
      style={{ backgroundColor: "#2E344E", color: "#FFFFFF" }}
    >
      <h2 className="text-center mb-12 text-4xl font-semibold text-gray-100">
        My Selected Classes ({mySelectClasses.length})
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-xl bg-gray-800">
        <table className="table-auto w-full text-gray-300">
          <thead className="bg-gray-700">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Seats</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mySelectClasses.map((selectClass, index) => (
              <tr
                key={selectClass._id}
                className="hover:bg-gray-700 transition duration-150"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">
                  <img
                    src={selectClass.imgURL}
                    alt="Class"
                    className="w-16 h-16 rounded-full object-cover border border-gray-500"
                  />
                </td>
                <td className="p-4 font-semibold">{selectClass.name}</td>
                <td className="p-4">{selectClass.email}</td>
                <td className="p-4">${selectClass.price}</td>
                <td className="p-4 text-center">{selectClass.seats}</td>
                <td className="p-4 flex justify-center space-x-3">
                  <button
                    onClick={() => handleDelete(selectClass)}
                    className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-500 transition duration-150 shadow-md"
                  >
                    Delete
                  </button>
                  <Link to={`/dashboard/payment/${selectClass._id}`}>
                    <button className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-500 transition duration-150 shadow-md">
                      Pay
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

export default MySelectedClass;
