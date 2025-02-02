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
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <footer className="bg-gray-900 text-gray-200 py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Social Media Section */}
        <div className="space-y-6 text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            {[FaFacebook, FaInstagram, FaGithub, FaGoogle, FaPhone].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-800 text-gray-400 hover:text-teal-500 transition transform hover:scale-110"
                >
                  <Icon className="text-2xl" />
                </a>
              )
            )}
          </div>
        </div>

        {/* Company Section */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white">Company</h4>
          <ul className="space-y-2">
            {[
              "About Us",
              "Contact",
              "Instructors",
              "Classes Schedule",
              "Vinyasa Yoga",
              "Yoga for Beginners",
              "Meditation Classes",
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-500 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Section */}
        <div className="space-y-4 text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white">Legal</h4>
          <ul className="space-y-2">
            {["Terms of Use", "Privacy Policy", "Cookie Policy"].map(
              (item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-teal-500 transition"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="w-full py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition"
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
        <p className="text-sm">© 2023 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
