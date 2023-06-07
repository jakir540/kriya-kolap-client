const CarouselBanner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full"
        />
        <div className="absolute top-[650px] right-[390px] flex flex-col items-center">
          <h2 className=" uppercase text-4xl font-semibold">
            live towords eternity
          </h2>
          <p className="text-black my-5 text-center">
            The term "yoga" in the Western world often <br /> denotes a modern
            form of Hatha yoga and <br /> a posture-based physical fitness,
            stress-relief and relaxation technique{" "}
          </p>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>

      {/* ---------------------- */}

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full"
        />
        <div className="absolute top-[650px] right-[390px] flex flex-col items-center">
          <h2 className=" uppercase text-4xl font-semibold">
            live towords eternity
          </h2>
          <p className="text-black my-5 text-center">
            The term "yoga" in the Western world often <br /> denotes a modern
            form of Hatha yoga and <br /> a posture-based physical fitness,
            stress-relief and relaxation technique{" "}
          </p>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>


      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full"
        />
        <div className="absolute top-[650px] right-[390px] flex flex-col items-center">
          <h2 className=" uppercase text-4xl font-semibold">
            live towords eternity
          </h2>
          <p className="text-black my-5 text-center">
            The term "yoga" in the Western world often <br /> denotes a modern
            form of Hatha yoga and <br /> a posture-based physical fitness,
            stress-relief and relaxation technique{" "}
          </p>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>



      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          className="w-full"
        />
        <div className="absolute top-[650px] right-[390px] flex flex-col items-center">
          <h2 className=" uppercase text-4xl font-semibold">
            live towords eternity
          </h2>
          <p className="text-black my-5 text-center">
            The term "yoga" in the Western world often <br /> denotes a modern
            form of Hatha yoga and <br /> a posture-based physical fitness,
            stress-relief and relaxation technique{" "}
          </p>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>



    </div>
  );
};

export default CarouselBanner;
