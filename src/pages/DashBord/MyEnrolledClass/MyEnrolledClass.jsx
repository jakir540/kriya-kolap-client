import { useEffect, useState } from "react";

const MyEnrolledClass = () => {
  const [enrolledClass, setEnrolledClass] = useState([]);

  useEffect(() => {
    fetch("https://kriya-kolap-sever-jakir540.vercel.app/payments")
      .then((res) => res.json())
      .then((data) => {
        setEnrolledClass(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-[#2E344E] text-white min-h-screen">
      <h2 className="text-center text-4xl font-semibold my-8 text-[#A0AEC0]">
        My All Enrolled Classes{" "}
        <span className="text-lg text-gray-400">({enrolledClass.length})</span>
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-[#3B4252]">
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#4C566A] text-[#A0AEC0] uppercase text-sm tracking-wide">
              <th className="p-4">#</th>
              <th className="p-4">Image</th>
              <th className="p-4">Class Name</th>
              <th className="p-4">Price</th>
              <th className="p-4">Enrolled Date</th>
              <th className="p-4">Available Seats</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((singleEnrolledClass, index) => (
              <tr
                key={singleEnrolledClass._id}
                className="even:bg-[#2E344E] odd:bg-[#3B4252] hover:bg-[#4C566A] transition duration-200"
              >
                <td className="p-4 text-center font-semibold text-[#D8DEE9]">
                  {index + 1}
                </td>
                <td className="p-4">
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg">
                      <img
                        src={singleEnrolledClass.imgURL}
                        alt="Yoga photo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </td>
                <td className="p-4 font-medium text-[#ECEFF4] text-center">
                  {singleEnrolledClass.name}
                </td>
                <td className="p-4 text-center text-[#A0AEC0]">
                  ${singleEnrolledClass.price}
                </td>
                <td className="p-4 text-center text-[#A0AEC0]">
                  {singleEnrolledClass.date}
                </td>
                <td className="p-4 text-center text-[#A0AEC0]">
                  {singleEnrolledClass.seats}
                </td>
                <td className="p-4 text-center">
                  <span
                    className={`py-1 px-3 rounded-full font-semibold ${
                      singleEnrolledClass.status === "active"
                        ? "bg-green-600 text-green-200"
                        : "bg-gray-600 text-yellow-300"
                    }`}
                  >
                    {singleEnrolledClass.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;
