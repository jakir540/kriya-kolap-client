import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="my-10 ">
      <h2 className="text-center text-4xl font-semibold capitalize">
        About kriya kolap
      </h2>
      <div className="flex justify-between items-center gap-16">
        <div className="w-1/2">
          <h2 className="capitalize text-end  text-3xl text-green-600 leading-[50px] ">
            summer vacation of yoga <br />{" "}
            <span className="text-yellow-400 text-5xl">with</span> <br /> kriya
            kolap
          </h2>
          <p className="p-3 leading-10">
            One of the core aspects of yoga is the practice of asanas, or
            physical postures. These postures are designed to strengthen and
            stretch the body, increase flexibility, and improve overall physical
            well-being. Through regular practice, individuals can experience
            increased body awareness, improved balance, and a greater sense of
            vitality.
          </p>
        </div>
        <motion.div
          animate={{ scale: 0.8 }}
          transition={{
            ease: "linear",
            duration: 3,
            x: { duration: 1 },
          }}
          className="w-1/2 my-6"
        >
          <img
            className=" h-[600px]"
            src="https://cdn.pixabay.com/photo/2017/04/06/11/37/silhouette-2208079_1280.png"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
