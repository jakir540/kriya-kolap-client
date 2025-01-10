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
    console.log(id);
    // const blogId = Number(id);

    // console.log(blogId, typeof blogId);

    // if (isNaN(blogId)) {
    //   console.error("Invalid blog ID");
    //   return;
    // }

    navigate(`/blogs/${id}`);
  };
  return (
    <div
      className="blogs-container"
      style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}
    >
      <div className="grid grid-cols-3 gap-4">
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="blog-card"
              data-aos="fade-up"
              style={{
                marginBottom: "40px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                textAlign: "center",
              }}
            >
              <img
                src={blog.featured_image}
                alt={blog.title}
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <h1 style={{ fontSize: "20px", margin: "20px 0" }}>
                {blog.title}
              </h1>
              <p style={{ margin: 0, color: "#666" }}>{blog.published_date}</p>
              <button
                onClick={() => handleReadMore(blog._id)} // Use the handleReadMore function
                style={{
                  marginTop: "15px",
                  background: "#007BFF",
                  color: "white",
                  padding: "10px 15px",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#666" }}>
            No blogs available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
