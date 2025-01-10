import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularInstructorsCards = ({ instructor }) => {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  const { instructorName, email, photo, price } = instructor;

  return (
    <div
      data-aos="zoom-in-up"
      className="card bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-105"
    >
      <figure className="overflow-hidden">
        <img
          src={photo}
          alt="yoga instructor"
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>

      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{instructorName}</h2>
        <p className="text-gray-500 mt-1 italic">{email}</p>
        <p className="text-lg font-semibold text-green-600 mt-2">
          Price: ${price}
        </p>

        <div className="mt-4">
          <button className="btn bg-green-500 text-white font-semibold tracking-wide rounded-lg px-6 py-3 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_15px_rgba(0,0,0,0.2),0px_4px_6px_rgba(0,0,0,0.1)] border border-green-700 hover:border-green-800 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
            See Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorsCards;
