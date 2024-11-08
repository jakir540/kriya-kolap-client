import { motion } from "framer-motion";
import icon1 from "../../../assets/ico-1.png";
import icon2 from "../../../assets/ico-2.png";
import icon3 from "../../../assets/ico-3.png";
import icon4 from "../../../assets/floral-decor.png";

const WhyKriya = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const iconHover = { scale: 1.1 };

  return (
    <div className="lg:my-10 my-16 px-6">
      <motion.h2
        className="text-center text-3xl font-semibold my-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Why KRIYA KOLAP?
      </motion.h2>

      <div className="lg:flex items-center justify-between gap-5">
        {[
          { icon: icon1, title: "COMPLETE VIDEO SUPPORT" },
          { icon: icon2, title: "BEST OF CUSTOMIZATION" },
          { icon: icon3, title: "EASY TO SETUP" },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex gap-4 bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div whileHover={iconHover}>
              <img className="w-32" src={item.icon} alt={item.title} />
            </motion.div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold border-b border-dotted border-orange-200 mb-2">
                {item.title}
              </h3>
              <div className="border border-orange-200 my-1"></div>
              <p className="py-3 text-gray-600">
                Pellentesque odio nisi, euismod in, pharetra a, ultricies in,
                diam. Sed arcu. Cras consequat.
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center gap-5">
          <motion.span
            className="text-orange-400"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.5 }}
          >
            --------------------------
          </motion.span>
          <motion.img
            src={icon4}
            alt=""
            animate={{ scale: [1, 1.1, 1] }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.span
            className="text-orange-400"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.5 }}
          >
            --------------------------
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default WhyKriya;
