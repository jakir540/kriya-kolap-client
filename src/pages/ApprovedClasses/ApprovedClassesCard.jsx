import { motion } from "framer-motion";
import useAxiosSecure from "../../Hooks/useAxiosSecuir";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const ApprovedClassesCard = ({ singleClass }) => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const [axiosSecure] = useAxiosSecure();
  const { classname, name, price, seats, imgURL, email } = singleClass;

  const handleSelect = async (singleClass) => {
    try {
      if (user) {
        const response = await axiosSecure.post(
          "/mySelectClasses",
          singleClass
        );
        if (response.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class successfully selected!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        Swal.fire({
          title: "Please log in",
          text: "You need to log in to select a class.",
          icon: "warning",
          confirmButtonText: "Login",
        });
      }
    } catch (error) {
      console.error("Error selecting class:", error);
      Swal.fire({
        title: "Error",
        text: "Unable to select class. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <motion.div
      className={`card w-full sm:w-[25rem] mx-auto shadow-lg rounded-lg overflow-hidden transition-transform duration-500 hover:scale-105 ${
        seats === 0 ? "bg-red-100" : "bg-white"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.figure
        className="h-72 overflow-hidden rounded-t-lg"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img src={imgURL} alt="class" className="w-full h-full object-cover" />
      </motion.figure>
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{classname}</h2>
        <p className="text-base text-gray-600 mb-2">
          Instructor: <span className="font-medium text-gray-800">{name}</span>
        </p>
        <p className="text-base text-gray-600 mb-2">
          Email: <span className="font-medium text-gray-800">{email}</span>
        </p>
        <p
          className={`text-base mt-3 font-medium ${
            seats > 0 ? "text-green-600" : "text-red-600"
          }`}
        >
          {seats > 0 ? `Available Seats: ${seats}` : "No Seats Available"}
        </p>
        <p className="text-xl text-gray-800 font-bold mt-4">Price: ${price}</p>
        <div className="flex justify-end mt-6">
          {isAdmin || isInstructor || seats === 0 ? (
            <button
              disabled
              className="btn bg-gray-400 text-white px-5 py-3 rounded-lg cursor-not-allowed"
            >
              Select
            </button>
          ) : (
            <button
              onClick={() => handleSelect(singleClass)}
              className="btn bg-[#00a854] text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300"
            >
              Select
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ApprovedClassesCard;
