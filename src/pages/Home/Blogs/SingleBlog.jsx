import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../../redux/services/blogs";

const SingleBlog = () => {
  const { _id } = useParams();
  const { data: blog, isLoading, error } = useGetSingleBlogQuery(_id);

  // Handle loading and error states
  if (isLoading)
    return <div className="text-center text-lg text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-lg text-red-500">
        Error loading blog details
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading Section */}
      <div className="text-center my-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          {blog?.title}
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          {blog?.excerpt ||
            "Dive into this insightful blog and explore the wisdom it has to offer."}
        </p>
      </div>

      {/* Blog Header with Background Image */}
      <div className="relative w-full">
        {/* Featured Image */}
        <img
          src={blog?.featured_image}
          alt={blog?.title}
          className="w-full h-96 object-cover rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105 hover:opacity-90"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-60 rounded-xl"></div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-black bg-opacity-50 rounded-xl">
          <p className="text-lg text-white opacity-90">
            By <span className="font-semibold">{blog?.author.name}</span> ·{" "}
            <span className="italic">
              {new Date(blog?.published_date).toLocaleDateString()}
            </span>
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="mt-12 prose prose-xl max-w-3xl mx-auto text-gray-800">
        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
      </div>

      {/* Comments Section */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-gray-900">
          Comments ({blog?.comments_count})
        </h3>
        <div className="mt-8 space-y-10">
          {blog?.comments.map((comment) => (
            <div
              key={comment.id}
              className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={comment.user.avatar}
                alt={comment.user.username}
                className="w-16 h-16 rounded-full object-cover shadow-md"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-800">
                    {comment.user.username}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.date).toLocaleString()}
                  </span>
                </div>
                <p className="mt-3 text-gray-700">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      <div className="mt-16">
        <h3 className="text-3xl font-semibold text-gray-900">Related Posts</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog?.related_posts.map((post) => (
            <div
              key={post.id}
              className="relative group hover:scale-105 transform transition-transform duration-300"
            >
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center items-center h-full text-center text-white px-4">
                  <h4 className="text-xl font-semibold">{post.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
