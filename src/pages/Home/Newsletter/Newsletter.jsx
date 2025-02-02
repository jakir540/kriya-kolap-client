import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter my-16 h-96 bg-fixed bg-cover filter flex flex-col justify-center items-center">
      <div className="text-white text-center max-w-lg mx-auto px-4">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold pt-8 pb-4 tracking-wide uppercase">
          Subscribe to Our Newsletter
        </h2>
        <p className="mb-6 text-lg">
          Stay updated with our latest news and events
        </p>

        <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
          <input
            className="p-3 w-full md:w-auto flex-1 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 transition duration-200"
            type="email"
            placeholder="Enter your email"
          />
          <button className="btn w-full md:w-auto px-6 py-3 bg-[#00a854] text-white font-semibold rounded-md hover:bg-[#008f39] transition duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
