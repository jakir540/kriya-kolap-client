import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useGetBlogsQuery } from "../../../redux/services/blogs";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  const { data: blogs } = useGetBlogsQuery(undefined);
  console.log("blogs page ", blogs);

  return (
    <div
      className="blogs-container"
      style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}
    >
      {selectedBlog ? (
        <div
          className="blog-details"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={() => setSelectedBlog(null)}
            style={{
              background: "#007BFF",
              color: "white",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "20px",
            }}
          >
            Back to Blogs
          </button>
          <img
            src={selectedBlog.featured_image}
            alt={selectedBlog.title}
            style={{ width: "100%", borderRadius: "10px" }}
          />
          <h1 style={{ fontSize: "28px", margin: "20px 0" }}>
            {selectedBlog.title}
          </h1>
          <p style={{ margin: "10px 0", color: "#666" }}>
            {selectedBlog.published_date}
          </p>
          <div
            style={{ color: "#333", lineHeight: "1.6" }}
            dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
          ></div>
        </div>
      ) : (
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
                <p style={{ margin: 0, color: "#666" }}>
                  {blog.published_date}
                </p>
                <button
                  onClick={() => setSelectedBlog(blog)}
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
      )}
    </div>
  );
};

export default Blogs;
