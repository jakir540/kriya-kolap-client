import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularClassesCard = ({ singleClass }) => {
  

  const { classname, name, price, seats, imgURL } = singleClass;

  // const { yogaClassName, students, photo, instructorName, description } =
  //   singleClass;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <motion.figure
        animate={{ scale: 0.9 }}
        transition={{
          ease: "linear",
          duration: 3,
          x: { duration: 1 },
        }}
      >
        <img src={imgURL} alt="yoga class" />
      </motion.figure>
      <div className="card-body">
        <h2 className="card-title">{classname}</h2>
        <h2 className="">Instructor Name: {name}</h2>
        <p>Students: {seats}</p>
        <p>Price : $ {price}</p>
        <div className="card-actions justify-end">
          <Link to="/approvedClasses"><button className="btn bg-yellow-400">Go To Class Page</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
