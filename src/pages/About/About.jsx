import { motion } from "framer-motion";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all duration-300">
        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center h-[450px] flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/b6XXXtN/yoga-About.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <motion.div
            className="relative z-10 text-center text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-extrabold tracking-wide">About Us</h1>
            <p className="mt-4 text-xl">
              Discover our mission, vision, and dedication to holistic wellness.
            </p>
          </motion.div>
        </section>

        {/* Mission, Vision, Ambition */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Our Mission",
                text: "To inspire and empower individuals to embrace yoga and mindfulness for balance, health, and happiness.",
              },
              {
                title: "Our Vision",
                text: "To create a global yoga community where holistic growth is accessible to all ages and abilities.",
              },
              {
                title: "Our Ambition",
                text: "To expand our reach, provide accessible yoga education, and promote mental well-being.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-r from-green-100 to-green-200 dark:from-gray-800 dark:to-gray-700 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-800 dark:text-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Why Choose Us?
          </motion.h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
            We combine traditional yoga with modern techniques, providing expert
            instructors, a welcoming atmosphere, and a commitment to personal
            growth.
          </p>
        </section>

        {/* Contact & Location */}
        <section className="py-20 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Get in Touch
              </h2>
              <form className="mt-8 space-y-6">
                {["Your Name", "Your Email", "Your Message"].map(
                  (placeholder, index) => (
                    <input
                      key={index}
                      type={index === 2 ? "textarea" : "text"}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-green-500 focus:outline-none"
                    />
                  )
                )}
                <button className="w-full bg-blue-600 dark:bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-green-600 transition duration-300">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Google Map */}
            <motion.div
              className="p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 150 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                Our Location
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Visit us at our serene yoga center, surrounded by nature.
              </p>
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.836535734708!2d144.9630576155062!3d-37.81362774202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sYoga%20Center!5e0!3m2!1sen!2sus!4v1642159945454!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="py-20 bg-gradient-to-r from-blue-200 to-green-500 dark:from-green-300 dark:to-green-400 text-center">
          <h2 className="text-4xl font-bold text-white">Join Us Today</h2>
          <p className="mt-4 text-lg text-gray-200">
            Begin your yoga journey with us. Sign up now and transform your
            life!
          </p>
          <motion.button
            className="mt-6 px-8 py-3 bg-white text-blue-600 dark:text-green-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
