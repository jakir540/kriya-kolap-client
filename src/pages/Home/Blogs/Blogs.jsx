import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Blogs = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className="my-16 px-6 lg:px-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Recent Blogs</h1>
        <p className="mt-4 text-gray-600">
          Discover insights and stories from KRIYA to enhance your journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Blog Card 1 */}
        <div
          data-aos="fade-up"
          className="transform transition duration-500 hover:scale-105"
        >
          <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80"
                alt="Yoga blog"
                className="w-full h-48 object-cover transition-transform duration-500"
              />
            </figure>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-2xl font-semibold text-orange-400">
                  25 <span className="text-gray-500 text-sm">MAY</span>
                </p>
                <p className="text-gray-500">24 comments</p>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Good Method to Perfect
              </h2>
              <p className="text-gray-600 text-sm">
                Mauris in erat justo. Nullam ac urna eu felis dapibus ...
              </p>
              <button className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="transform transition duration-500 hover:scale-105"
        >
          <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <figure>
              <img
                src="https://plus.unsplash.com/premium_photo-1683134110111-2c1cbccd10b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=858&q=80"
                alt="Yoga blog"
                className="w-full h-48 object-cover transition-transform duration-500"
              />
            </figure>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-2xl font-semibold text-orange-400">
                  30 <span className="text-gray-500 text-sm">MAY</span>
                </p>
                <p className="text-gray-500">10 comments</p>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Diam Gravida Fringilla
              </h2>
              <p className="text-gray-600 text-sm">
                Mauris in erat justo. Nullam ac urna eu felis dapibus ...
              </p>
              <button className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Read more
              </button>
            </div>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="transform transition duration-500 hover:scale-105"
        >
          <div className="card w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1599639403205-1b1542d84f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="Yoga blog"
                className="w-full h-48 object-cover transition-transform duration-500"
              />
            </figure>
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <p className="text-2xl font-semibold text-orange-400">
                  12 <span className="text-gray-500 text-sm">MAY</span>
                </p>
                <p className="text-gray-500">6 comments</p>
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                The Sea Shore: A Good Method
              </h2>
              <p className="text-gray-600 text-sm">
                Mauris in erat justo. Nullam ac urna eu felis dapibus ...
              </p>
              <button className="mt-4 inline-block text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
