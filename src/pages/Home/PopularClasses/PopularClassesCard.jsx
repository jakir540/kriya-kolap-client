import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

const PopularClassesCard = ({ singleClass }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const { classname, name, price, seats, imgURL } = singleClass;

  // const { yogaClassName, students, photo, instructorName, description } =
  //   singleClass;
  return (
    <div className="card card-compact w-92 bg-base-100 shadow-xl">
      <motion.figure
        initial={false}
        animate={
          isLoaded && isInView
            ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
            : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
        }
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
        onViewportEnter={() => setIsInView(true)}
      >
        <img src={imgURL} onLoad={() => setIsLoaded(true)} alt="yoga class" />
      </motion.figure>


      <div className="card-body">
        <h2 className="card-title">{classname}</h2>
        <h2 className="">Instructor Name: {name}</h2>
        <p>Students: {seats}</p>
        <p>Price : $ {price}</p>
        <div className="card-actions justify-end">
          <Link to="/approvedClasses">
            <button className="btn bg-[#cbd5e1] hover:bg-slate-700 ">
              Go To Class Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
