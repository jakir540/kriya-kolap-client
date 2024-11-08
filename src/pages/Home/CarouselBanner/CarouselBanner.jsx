import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CarouselBanner = () => {
  return (
    <div className="relative overflow-hidden flex justify-center mt-[83px]">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        className="w-full max-w-6xl"
      >
        {/* Slide 1 */}
        <div className="relative w-full h-[70vh] max-w-6xl">
          <img
            src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336_1280.png"
            className="w-full h-full object-cover"
            alt="Balance Mind, Body, Soul"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
            <div className="text-center text-white animate-fadeIn">
              <h2 className="text-2xl lg:text-4xl font-bold">
                Balance Mind, Body, Soul
              </h2>
              <p className="mt-3 text-sm lg:text-lg">
                Discover the harmony within. Embrace a journey of peace and
                self-discovery through mindful practices.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[70vh] max-w-6xl">
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/18/34/woman-1854265_1280.jpg"
            className="w-full h-full object-cover"
            alt="Journey Through Yoga"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
            <div className="text-center text-white animate-fadeIn">
              <h2 className="text-2xl lg:text-4xl font-bold">
                The Journey Through Yoga
              </h2>
              <p className="mt-3 text-sm lg:text-lg">
                Yoga is a lifelong journey. Experience the path to greater
                strength, flexibility, and mindfulness.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[70vh] max-w-6xl">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/09/06/39/yoga-4536546_1280.jpg"
            className="w-full h-full object-cover"
            alt="Living Towards Eternity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
            <div className="text-center text-white animate-fadeIn">
              <h2 className="text-2xl lg:text-4xl font-bold">
                Live Towards Eternity
              </h2>
              <p className="mt-3 text-sm lg:text-lg">
                Embrace a timeless way of living that brings you closer to inner
                peace and understanding.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative w-full h-[70vh] max-w-6xl">
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full h-full object-cover"
            alt="Exploring Yoga's Path"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
            <div className="text-center text-white animate-fadeIn">
              <h2 className="text-2xl lg:text-4xl font-bold">
                Exploring Yoga's Path
              </h2>
              <p className="mt-3 text-sm lg:text-lg">
                Journey inward, explore your limits, and awaken a deeper
                connection with your mind and body.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
