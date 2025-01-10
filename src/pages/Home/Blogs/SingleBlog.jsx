import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../../redux/services/blogs";

const SingleBlog = () => {
  const { _id } = useParams();

  const { data: blog, isLoading, error } = useGetSingleBlogQuery(_id);

  console.log("blog single", blog);

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blog details</div>;

  // Display the blog details
  return (
    <div className="blog-details">
      <h1>{blog?.title}</h1>
      <img src={blog?.featured_image} alt={blog?.title} />
      <p>{blog?.published_date}</p>
      <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
    </div>
  );
};

export default SingleBlog;
