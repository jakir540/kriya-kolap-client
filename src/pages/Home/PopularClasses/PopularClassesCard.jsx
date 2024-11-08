import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./PopularClasses.css";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const PopularClassesCard = ({ singleClass }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const { classname, name, price, seats, imgURL } = singleClass;

  return (
    <div className="relative bg-white shadow-xl rounded-lg overflow-hidden group transform transition duration-500 hover:scale-105">
      <motion.figure
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
        className="w-full h-48"
      >
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={imgURL}
          onLoad={() => setIsLoaded(true)}
          alt="yoga class"
        />
      </motion.figure>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>

      <div className="relative p-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">{classname}</h2>
        <p className="text-gray-600 mt-2">Instructor: {name}</p>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
        <h3 className="text-xl font-semibold">Instructor: {name}</h3>
        <p className="mt-2">Seats Available: {seats}</p>
        <p className="text-lg font-bold mt-1">Price: ${price}</p>
        <Link to="/approvedClasses" className="mt-4">
          <button className="btn bg-[#00A854] text-white hover:bg-[#00a854d7] px-4 py-2 rounded-lg">
            Go To Class Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularClassesCard;
