import { useState } from "react";
import { GrYoga } from "react-icons/gr";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaGoogle,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Social Media Section */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex gap-6">
            <a
              href="#"
              className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900  shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a
              href="#"
              className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900  shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
            >
              <FaInstagram className="text-4xl" />
            </a>
            <a
              href="#"
              className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900  shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="#"
              className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900  shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
            >
              <FaGoogle className="text-3xl" />
            </a>

            <a
              href="#"
              className="w-14 h-14 flex justify-center items-center rounded-full bg-gray-900  shadow-lg text-gray-400 hover:text-blue-500 hover:shadow-blue-500/50 transform hover:scale-110 hover:-rotate-3 transition-all duration-300"
            >
              <FaPhone className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Company</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Instructors
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Classes Schedule
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Vinyasa Yoga
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Yoga for Beginners
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Meditation Classes
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-teal-500 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-400">
        <div className="flex justify-center items-center gap-4 mb-6">
          <GrYoga className="text-4xl text-teal-500" />
          <p className="text-sm">Providing reliable yoga center since 2012</p>
        </div>
        <p className="text-sm">Copyright © 2023 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
