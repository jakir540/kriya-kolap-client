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
    <div className="h-[1200px]">
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
        className="relative top-[600px] left-[100px]"
      >
        <img className="h-[600px]" src={PractiseImage} alt="" />
      </div>
      <div className="relative text-3xl w-[500px] font-semibold p-3 top-[280px] left-[800px]">
        <h3>
          BUILD YOUR YOGA AND{" "}
          <span className="text-[#facc15] leading-[60px] font-serif">
            MEDITATION
          </span>{" "}
          ROUTINE BY SETTING WEEKLY
        </h3>
      </div>
    </div>
  );
};

export default Meditation;
