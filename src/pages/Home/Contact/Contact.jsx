import GoogleMapReact from "google-map-react";
import { BsTelephoneOutbound } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 23.848959,
      lng: 90.408179,
    },
    zoom: 11,
  };

  return (
    <>
      <h1 className="font-bold text-4xl text-center my-16">
        Contact Our Yoga Center
      </h1>
      <div className="lg:flex items-center justify-evenly gap-6 location h-[500px] mb-24">
        <div className="w-100%">
          <h2 className="text-2xl py-5 font-semibold text-center">
            Leave us your info
          </h2>
          <p className="text-sm  mb-10 text-gray-500 font-thin tracking-widest">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>

          <div>
            <htmlForm className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className=" flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3  leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-city"
                  >
                    District
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-city"
                    type="text"
                    placeholder="Place Your City"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-state"
                  >
                    City
                  </label>
                  <div className="relative">
                    <select
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-state"
                    >
                      <option>Dhaka</option>
                      <option>Khulna</option>
                      <option>Cumilla</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 -mt-[78px] text-gray-700">
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-end">
                  {" "}
                  <button className="btn bg-[#cbd5e1] hover:bg-gray-900 ">
                    Submit
                  </button>
                </div>
                </div>
               
              </div>
            </htmlForm>
          </div>
        </div>

        <div className="w-100%">
          <div className="w-full p-5  text-center">
            <h3 className="font-semibold text-2xl p-2"> Location</h3>
            <p className="text-gray-600 py-2 text-sm">
              158 Gha. Khilkhet Bazar <br />
              Dhaka 1229 Bangladesh
            </p>
            <div className="flex items-center justify-center gap-3 text-sm my-3">
              <span>
                <AiOutlineMail />
              </span>{" "}
              <p>jakirhossain64646@gmail.com</p>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm">
              <span>
                <BsTelephoneOutbound />
              </span>{" "}
              <p>:+880170564654654</p>
            </div>
          </div>
          <div>
            <div style={{ height: "50vh", width: "600px" }}>
              <h3 className="font-semibold text-2xl my-3">Map</h3>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
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
