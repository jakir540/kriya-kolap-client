const Newsletter = () => {
  return (
    <div className=" newsletter  my-16">
      <div className="text-white text-center">
        <h2 className="text-3xl font-semibold text-white text-center">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p>Subscribe and take all information about our latest events</p>
        <div>
          <input
            className="p-4 rounded-md"
            type="text"
            placeholder="type your email"
          />
          <button className="btn bg-yellow-400">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
