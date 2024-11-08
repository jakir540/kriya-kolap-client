import GoogleMapReact from "google-map-react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AnyReactComponent = ({ text }) => (
  <div className="text-white bg-blue-600 p-2 rounded-lg shadow-lg">{text}</div>
);

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const defaultProps = {
    center: {
      lat: 23.848959,
      lng: 90.408179,
    },
    zoom: 11,
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-5">
        <h1 className="font-bold text-5xl text-center my-16 text-gray-800">
          Contact Our Yoga Center
        </h1>

        <div className="lg:flex items-start justify-between gap-16 px-6 lg:px-24 ">
          {/* Contact Form with 3D Shadow Effect */}
          <div
            data-aos="fade-up"
            className="w-full lg:w-1/2 bg-transparent shadow-2xl p-10 rounded-lg transform transition hover:scale-105 hover:shadow-3xl duration-300"
          >
            <h2 className="text-3xl py-5 font-semibold text-center text-gray-700">
              Leave us your info
            </h2>
            <p className="text-base mb-10 text-gray-500 text-center font-light">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
            </p>

            <form className="w-full max-w-lg mx-auto">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-blue-50 text-gray-700 border border-gray-300 rounded-lg py-4 px-5 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-blue-50 text-gray-700 border border-gray-300 rounded-lg py-4 px-5 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-blue-50 text-gray-700 border border-gray-300 rounded-lg py-4 px-5 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                    District
                  </label>
                  <input
                    className="appearance-none block w-full bg-blue-50 text-gray-700 border border-gray-300 rounded-lg py-4 px-5 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300"
                    type="text"
                    placeholder="Your District"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2">
                    City
                  </label>
                  <select className="block appearance-none w-full bg-blue-50 border border-gray-300 text-gray-700 py-4 px-5 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow duration-300">
                    <option>Dhaka</option>
                    <option>Khulna</option>
                    <option>Cumilla</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full font-semibold text-lg hover:bg-gradient-to-l hover:from-purple-500 hover:to-blue-500 transition-all duration-300 shadow-lg transform hover:scale-105">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div data-aos="fade-up" className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-white shadow-2xl p-8 rounded-lg text-center mb-8 transform transition hover:scale-105 duration-300">
              <h3 className="font-semibold text-2xl mb-2 text-gray-700">
                Location
              </h3>
              <p className="text-gray-600 py-2 text-base">
                158 Gha. Khilkhet Bazar <br />
                Dhaka 1229 Bangladesh
              </p>
              <div className="flex items-center justify-center gap-3 text-gray-600 text-base my-3">
                <AiOutlineMail className="text-blue-500" />
                <p>jakirhossain64646@gmail.com</p>
              </div>
              <div className="flex items-center justify-center gap-3 text-gray-600 text-base">
                <BsTelephoneOutbound className="text-blue-500" />
                <p>+880170564654654</p>
              </div>
            </div>

            <div
              style={{ height: "50vh" }}
              className="relative w-full overflow-hidden rounded-lg shadow-2xl transition transform hover:scale-105 duration-300"
            >
              <h3 className="font-semibold text-2xl text-center mb-4 text-gray-700">
                Map
              </h3>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={23.848959}
                  lng={90.408179}
                  text="Yoga Center"
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
