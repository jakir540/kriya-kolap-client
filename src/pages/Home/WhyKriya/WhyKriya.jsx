import { motion } from "framer-motion";
import icon1 from "../../../assets/ico-1.png";
import icon2 from "../../../assets/ico-2.png";
import icon3 from "../../../assets/ico-3.png";
import icon4 from "../../../assets/floral-decor.png";

const WhyKriya = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const iconHover = {
    scale: 1.2,
    rotate: 10,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  const gradientHover = {
    background: "linear-gradient(135deg, #FFAFBD 0%, #ffc3a0 100%)",
    transition: { duration: 0.4 },
  };

  return (
    <div className="lg:my-20 my-16 px-8">
      <motion.h2
        className="text-center text-5xl text-gray-900 font-extrabold tracking-wide my-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Why KRIYA KOLAP?
      </motion.h2>

      <div className="grid lg:grid-cols-3 gap-10 sm:grid-cols-2 grid-cols-1 items-start">
        {[
          {
            icon: icon1,
            title: "COMPLETE VIDEO",
            text: "Access a full library of high-quality yoga videos, designed for all levels and available anytime to enhance your practice.",
          },
          {
            icon: icon2,
            title: "BEST OF CUSTOMIZATION",
            text: "Tailor your yoga experience with flexible class options, allowing you to choose styles, durations, and difficulty levels that fit your needs.",
          },
          {
            icon: icon3,
            title: "EASY TO SETUP",
            text: "Seamlessly set up your profile and begin your journey with our intuitive user interface and streamlined onboarding process.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={gradientHover}
          >
            <motion.div
              whileHover={iconHover}
              className="flex items-center justify-center w-24 h-24 bg-orange-100 rounded-full shadow-inner mb-6 self-center transform transition duration-300"
            >
              <img className="w-16 h-16" src={item.icon} alt={item.title} />
            </motion.div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-16">
        <div className="flex items-center gap-5">
          <motion.div
            className="block h-1 bg-gradient-to-r from-orange-400 to-pink-400"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={icon4}
            alt="Floral Decor"
            className="w-16 h-16"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.div
            className="block h-1 bg-gradient-to-r from-pink-400 to-orange-400"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyKriya;
