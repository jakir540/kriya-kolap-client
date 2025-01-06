import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const slides = [
  {
    imgSrc:
      "https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336_1280.png",
    altText: "Balance Mind, Body, Soul",
    title: "Balance Mind, Body, Soul",
    description:
      "Discover the harmony within. Embrace a journey of peace and self-discovery through mindful practices.",
  },
  {
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/23/18/34/woman-1854265_1280.jpg",
    altText: "Journey Through Yoga",
    title: "The Journey Through Yoga",
    description:
      "Yoga is a lifelong journey. Experience the path to greater strength, flexibility, and mindfulness.",
  },
  {
    imgSrc:
      "https://cdn.pixabay.com/photo/2019/10/09/06/39/yoga-4536546_1280.jpg",
    altText: "Living Towards Eternity",
    title: "Live Towards Eternity",
    description:
      "Embrace a timeless way of living that brings you closer to inner peace and understanding.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    altText: "Exploring Yoga's Path",
    title: "Exploring Yoga's Path",
    description:
      "Journey inward, explore your limits, and awaken a deeper connection with your mind and body.",
  },
];

const CarouselBanner = () => {
  return (
    <div className="relative">
      {/* Navbar Spacer */}
      <div className="h-[20px]"></div>

      {/* Carousel Title */}
      {/* <div className="absolute top-[80px] w-full  z-10 text-center py-4">
        <h1 className="text-3xl lg:text-5xl font-bold text-gray-800">
          Welcome to Our Yoga Journey
        </h1>
      </div> */}

      {/* Carousel */}
      <div className="relative overflow-hidden flex justify-center mt-[90px]">
        <Carousel
          autoPlay
          interval={3000}
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          className="w-full max-w-6xl"
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-[70vh] max-w-6xl">
              <img
                src={slide.imgSrc}
                alt={slide.altText}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end justify-center p-6">
                <div className="text-center text-white animate-fadeIn">
                  <h2 className="text-2xl lg:text-4xl font-bold">
                    {slide.title}
                  </h2>
                  <p className="mt-3 text-sm lg:text-lg">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselBanner;
