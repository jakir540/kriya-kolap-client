import React, { useState } from "react";
import { GrYoga } from "react-icons/gr";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaGoogle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

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
    // You can add logic here to handle the form submission, e.g., send the data to a server.
    console.log(formData);
  };
  return (
    <div>
      <div>
        {" "}
        <footer className="footer p-10 text-black ">
          <div className="footer-section">
            <span className="footer-title text-black">Social Media</span>
            <a href="#" className="flex items-center gap-1">
              <FaFacebook /> Facebook
            </a>
            <a href="#" className="flex items-center gap-1">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center gap-1">
              <FaGithub /> GitHub
            </a>
            <a href="#" className="flex items-center gap-1">
              <FaGoogle /> Google
            </a>
            <a href="#" className="flex items-center gap-1">
              <FaEnvelope /> Email
            </a>
            <a href="#" className="flex items-center gap-1">
              <FaPhone /> Phone
            </a>
          </div>

          {/* <div className="footer-section">
  <span className="footer-title">Yoga Classes</span>
  <a className="link link-hover">Hatha Yoga</a>
  <a className="link link-hover">Vinyasa Yoga</a>
  <a className="link link-hover">Yoga for Beginners</a>
  <a className="link link-hover">Meditation Classes</a>
</div> */}
          <div className="footer-section ">
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Instructors</a>
            <a className="link link-hover">Classes Schedule</a>
            <a className="link link-hover">Vinyasa Yoga</a>
            <a className="link link-hover">Yoga for Beginners</a>
            <a className="link link-hover">Meditation Classes</a>
          </div>

          <div className="footer-section">
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>

          <div className="footer-section">
            <span className="footer-title">Contact Us</span>
            <form className="" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="mt-[-10] p-2 bg-[#f6f9fc] rounded-lg"
              />
              <br />
              <br />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="bg-[#f6f9fc] p-2 rounded-lg"
              />
              {/* <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              /> */}
              <button type="submit" className=" btn ms-3 bg-[#898989] px-7">Send</button>
            </form>
          </div>
        </footer>
      </div>

      <div className="flex justify-between mt-[-120px]">
        <div className="footer-section bg-[#898989] px-10">
          <GrYoga className="text-6xl"></GrYoga>
          <p className="font-semibold">
            Providing reliable yoga center since 2012
          </p>
        </div>

        <div className="footer items-center p-4 ">
          <aside className="items-center grid-flow-col">
            <p>Copyright © 2023 - All right reserved</p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
