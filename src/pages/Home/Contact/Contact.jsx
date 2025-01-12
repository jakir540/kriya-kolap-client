import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Lottie from "react-lottie";
import yogaAnimationData from "../lotties/yoga-animation.json";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: yogaAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 py-10 min-h-screen">
        <h1 className="font-extrabold text-5xl text-center my-12 text-gray-900 tracking-wide">
          Get in Touch with Us
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-24">
          {/* Contact Form */}
          <div
            data-aos="fade-up"
            className="w-full lg:w-2/3 bg-white shadow-xl rounded-3xl p-8 lg:p-12 transition-all transform hover:scale-105 hover:shadow-2xl duration-300"
          >
            <h2 className="text-3xl mb-4 font-bold text-center text-gray-800">
              Leave Us a Message
            </h2>
            <p className="text-gray-600 text-center text-lg mb-8">
              Feel free to share your thoughts or inquiries. We're here to help!
            </p>

            <form className="space-y-6">
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg py-4 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg py-4 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  placeholder="Last Name"
                />
              </div>

              {/* Email Field */}
              <input
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-4 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="email"
                placeholder="Your Email Address"
              />

              {/* District and City Fields */}
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  className="w-full bg-gray-100 border border-gray-300 rounded-lg py-4 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  type="text"
                  placeholder="Your District"
                />
                <select className="w-full bg-gray-100 border border-gray-300 rounded-lg py-4 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option value="">Select City</option>
                  <option value="Dhaka">Dhaka</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Cumilla">Cumilla</option>
                </select>
              </div>

              {/* Message Field */}
              <textarea
                className="w-full bg-gray-100 border border-gray-300 rounded-lg py-4 px-5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 px-8 rounded-full font-semibold text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Lottie Animation */}
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
