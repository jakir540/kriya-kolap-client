import { useParams } from "react-router-dom";
import { useGetSingleBlogQuery } from "../../../redux/services/blogs";

const SingleBlog = () => {
  const { _id } = useParams();
  const { data: blog, isLoading, error } = useGetSingleBlogQuery(_id);

  // Skeleton loader for better UX during loading
  if (isLoading)
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded-md mb-4"></div>
          <div className="h-96 bg-gray-300 rounded-lg"></div>
          <div className="mt-8 h-32 bg-gray-200 rounded-md"></div>
        </div>
      </div>
    );

  // Error handling
  if (error)
    return (
      <div className="text-center text-lg text-red-500">
        Oops! Unable to load blog details. Please try again later.
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading Section */}
      <header className="text-center my-12">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight">
          {blog?.title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          {blog?.excerpt ||
            "Dive into this insightful blog and explore the wisdom it has to offer."}
        </p>
      </header>

      {/* Blog Header with Background Image */}
      <div className="relative w-full rounded-xl overflow-hidden shadow-xl">
        <img
          src={blog?.featured_image}
          alt={blog?.title}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-end items-center p-6 bg-gradient-to-b from-transparent via-transparent to-black text-white text-center">
          <p className="text-lg font-light">
            By <span className="font-semibold">{blog?.author.name}</span> ·{" "}
            <span className="italic">
              {new Date(blog?.published_date).toLocaleDateString()}
            </span>
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <section className="mt-16 prose prose-xl max-w-4xl mx-auto text-gray-800">
        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
      </section>

      {/* Comments Section */}
      <section className="mt-16">
        <h3 className="text-3xl font-bold text-gray-900">
          Comments ({blog?.comments_count || 0})
        </h3>
        <div className="mt-8 space-y-8">
          {blog?.comments.length ? (
            blog?.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={comment.user.avatar}
                  alt={comment.user.username}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">
                      {comment.user.username}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.date).toLocaleString()}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.comment}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </section>

      {/* Related Posts */}
      <section className="mt-16">
        <h3 className="text-3xl font-bold text-gray-900">Related Posts</h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog?.related_posts.map((post) => (
            <div
              key={post.id}
              className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transform transition-all duration-300"
            >
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center items-center h-full text-center text-white px-4">
                  <h4 className="text-lg font-semibold">{post.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleBlog;
