import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularInstructorsCards = ({ instructor }) => {
  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  const { instructorName, email, photo, price } = instructor;

  return (
    <div
      data-aos="zoom-in-up"
      className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
    >
      <figure className="overflow-hidden">
        <img
          src={photo}
          alt="yoga instructor"
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </figure>

      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          {instructorName}
        </h2>
        <p className="text-gray-600 mt-2">Email: {email}</p>
        <p className="text-lg font-bold text-[#00a854] mt-2">Price: ${price}</p>

        <div className="mt-4">
          <button className="btn bg-[#00a854] text-white hover:bg-[#00a854] rounded-full px-6 py-2 transition duration-300">
            See Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorsCards;
