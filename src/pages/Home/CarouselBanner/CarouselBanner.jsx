import About from "../About/About";

// ----------------------

import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
// ----------------------

const CarouselBanner = () => {
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showStatus={false} 
        showThumbs={true}
        
      >
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336_1280.png"
            className="w-full"
          />
          <div className="absolute lg:top-[650px] lg:right-[390px] flex flex-col items-center">
            <h2 className=" uppercase text-white lg:text-4xl font-semibold">
            Balance Mind, Body, Soul
            </h2>
            <p className="lg:text-white lg:leading-7 my-5 text-center ">
              The term yoga in the Western world often <br /> denotes a modern
              form of Hatha yoga and <br /> a posture-based physical fitness,
              stress-relief and relaxation technique{" "}
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/23/18/34/woman-1854265_1280.jpg"
            className="w-full"
          />
          <div className="absolute lg:top-[650px] lg:right-[390px] flex flex-col items-center">
            <h2 className=" uppercase text-white lg:text-4xl font-semibold">
           The Journey Through Yoga
            </h2>
            <p className="lg:text-white lg:leading-7 my-5 text-center ">
              The term yoga in the Western world often <br /> denotes a modern
              form of Hatha yoga and <br /> a posture-based physical fitness,
              stress-relief and relaxation technique{" "}
            </p>
          </div>
          
        </div>

        <div>
          <img
            src="https://cdn.pixabay.com/photo/2019/10/09/06/39/yoga-4536546_1280.jpg"
            className="w-full"
          />
          <div className="absolute  lg:top-[650px] lg:right-[390px] flex flex-col items-center">
            <h2 className=" uppercase text-center lg:text-4xl font-semibold">
              live towords eternity
            </h2>
            <p className="lg:text-white my-5 text-center">
              The term yoga in the Western world often <br /> denotes a modern
              form of Hatha yoga and <br /> a posture-based physical fitness,
              stress-relief and relaxation technique{" "}
            </p>
          </div>

         
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            className="w-full"
          />
          <div className="absolute  lg:top-[650px] lg:right-[390px] flex flex-col items-center">
            <h2 className=" uppercase text-center lg:text-4xl font-semibold">
            Exploring Yogas Path
            </h2>
            <p className="lg:text-white my-5 text-center">
              The term yoga in the Western world often <br /> denotes a modern
              form of Hatha yoga and 
            </p>
          </div>
        </div>
      </Carousel>
      <About></About>
    </>
  );
};

export default CarouselBanner;

// const CarouselBanner = () => {
//   return (
//     <div>
//       <div className="carousel w-full lg:mt-0 mt-36">
//         <div id="slide1" className="carousel-item relative w-full">
//           <img
//             src="https://cdn.pixabay.com/photo/2020/08/22/12/36/yoga-5508336_1280.png"
//             className="w-full"
//           />
//           <div className="absolute lg:top-[650px] lg:right-[390px] flex flex-col items-center">
//             <h2 className=" uppercase text-white lg:text-4xl font-semibold">
//               live towords eternity
//             </h2>
//             <p className="lg:text-white lg:leading-7 my-5 text-center ">
//               The term yoga in the Western world often <br /> denotes a modern
//               form of Hatha yoga and <br /> a posture-based physical fitness,
//               stress-relief and relaxation technique{" "}
//             </p>
//           </div>

//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide4" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide2" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         {/* ---------------------- */}

//         <div id="slide2" className="carousel-item relative w-full">
//           <img
//             src="https://cdn.pixabay.com/photo/2016/11/23/18/34/woman-1854265_1280.jpg"
//             className="w-full"
//           />
//           <div className="absolute lg:top-[650px] lg:right-[390px] flex flex-col items-center">
//             <h2 className=" uppercase text-center text-white lg:text-4xl font-semibold">
//               lose yourself ambience and atmosphere
//             </h2>
//             <p className="text-black leading-7 my-5 text-center">
//               The term yoga in the Western world often <br /> denotes a modern
//               form of Hatha yoga and <br /> a posture-based physical fitness,
//               stress-relief and relaxation technique{" "}
//             </p>
//           </div>

//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide1" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide3" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide3" className="carousel-item relative w-full">
//           <img
//             src="https://cdn.pixabay.com/photo/2018/01/22/06/12/stretching-3098228_1280.jpg"
//             className="w-full"
//           />
//           <div className="absolute  lg:top-[650px] lg:right-[390px] flex flex-col items-center">
//             <h2 className=" uppercase text-center lg:text-4xl font-semibold">
//               live towords eternity
//             </h2>
//             <p className="text-black my-5 text-center">
//               The term yoga in the Western world often <br /> denotes a modern
//               form of Hatha yoga and <br /> a posture-based physical fitness,
//               stress-relief and relaxation technique{" "}
//             </p>
//           </div>

//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide2" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide4" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>

//         <div id="slide4" className="carousel-item relative w-full">
//           <img
//             src="https://cdn.pixabay.com/photo/2019/10/09/06/39/yoga-4536546_1280.jpg"
//             className="w-full"
//           />
//           <div className="absolute lg:top-[650px] lg:right-[390px] flex flex-col items-center">
//             <h2 className=" uppercase  text-white lg:text-4xl font-semibold">
//               live towords eternity
//             </h2>
//             <p className="text-black leading-7 my-5 text-center">
//               The term yoga in the Western world often <br /> denotes a modern
//               form of Hatha yoga and <br /> a posture-based physical fitness,
//               stress-relief and relaxation technique{" "}
//             </p>
//           </div>

//           <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//             <a href="#slide3" className="btn btn-circle">
//               ❮
//             </a>
//             <a href="#slide1" className="btn btn-circle">
//               ❯
//             </a>
//           </div>
//         </div>
//       </div>

//       <About></About>
//     </div>
//   );
// };

// export default CarouselBanner;
