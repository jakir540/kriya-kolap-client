import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useGetBlogsQuery } from "../../../redux/services/blogs";

const Blogs = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const { data: blogs } = useGetBlogsQuery(undefined);
  console.log("blogs page ", blogs);

  const handleReadMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800">Latest Blogs</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our latest blog posts and stay updated.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="relative group" data-aos="fade-up">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-black">
                <div className="relative">
                  <img
                    src={blog.featured_image}
                    alt={blog.title}
                    className="w-full h-60 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Shutter Effect on hover */}
                  <div
                    onClick={() => handleReadMore(blog._id)}
                    className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0"
                  >
                    <div className="flex justify-center items-center w-full h-full text-white text-xl font-semibold">
                      Explore
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {new Date(blog.published_date).toLocaleDateString()}
                  </p>
                  <p className="mt-4 text-gray-600 text-base">
                    {blog.excerpt || "No excerpt available."}
                  </p>
                  <button
                    onClick={() => handleReadMore(blog._id)}
                    className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-full transition-colors duration-200 hover:bg-blue-700"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-3">
            No blogs available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
