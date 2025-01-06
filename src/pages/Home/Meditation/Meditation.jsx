import MeditationImage from "../../../assets/yogaPhoto.webp";
import PractiseImage from "../../../assets/stats-phone.webp";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Meditation = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="lg:h-[1200px] overflow-x-hidden">
      <div
        data-aos="fade-up"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="absolute"
      >
        <img className="  w-[1280px]" src={MeditationImage} alt="" />
      </div>
      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="3000"
        className="relative lg:top-[600px] lg:left-[100px] top-[220px] left-0"
      >
        <img className="h-[600px]" src={PractiseImage} alt="" />
      </div>
      <div className="relative lg:text-3xl text-2xl text-center lg:w-[500px] font-semibold p-3 lg:top-[280px] lg:left-[800px] top-[280px] left-[10px]">
        <h3>
          BUILD YOUR YOGA AND{" "}
          <span className="text-yellow-700 text-4xl leading-[60px] font-serif">
            MEDITATION
          </span>{" "}
          ROUTINE BY SETTING WEEKLY
        </h3>
      </div>
    </div>
  );
};

export default Meditation;
