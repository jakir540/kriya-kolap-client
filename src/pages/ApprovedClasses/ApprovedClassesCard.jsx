import { motion } from "framer-motion";

const ApprovedClassesCard = ({ singleClass }) => {
  console.log(singleClass);

  const { classname, name, price, seats, imgURL, email, status } = singleClass;
  console.log(seats)

  return (

      <div
        // className="card card-compact w-96  shadow-xl"
        className={`${seats == 0 ? 'bg-red-400' : 'bg-base-200'} card card-compact w-96  shadow-xl`}
      >
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
          <h2 className="">Instructor Email: {email}</h2>
          <p>Students Available Seat: {seats}</p>
          <p>Price : $ {price}</p>
          <div className="card-actions justify-end">
            <button className="btn bg-orange-600 text-white">Select</button>
          </div>
        </div>
   
    </div>
  );
};

export default ApprovedClassesCard;
