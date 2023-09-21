// import { motion } from "framer-motion";
import Lottie from "react-lottie-player";
import Aos from "aos";
import "aos/dist/aos.css";
import lottieAboutJson from "../../../assets/aboutKriya.json";
import { useEffect } from "react";

const About = () => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="my-10 ">
      <h2 className="text-center text-4xl font-semibold capitalize">
        About kriya kolap
      </h2>
      <div className="lg:flex   justify-between items-center lg:gap-16">


        <div data-aos="fade-left" className="lg:w-1/2">
          <h2 className="capitalize lg:text-end text-center  text-3xl text-[#00a854] leading-[50px] ">
            summer vacation of yoga <br />{" "}
            <span className="text-yellow-400 text-5xl">with</span> <br /> kriya
            kolap
          </h2>
          <p className="p-3 leading-10 text-[#3f3d56]">
            One of the core aspects of yoga is the practice of asanas, or
            physical postures. These postures are designed to strengthen and
            stretch the body, increase flexibility, and improve overall physical
            well-being. Through regular practice, individuals can experience
            increased body awareness, improved balance, and a greater sense of
            vitality.
          </p>
        </div>

        <div data-aos="fade-right">
          <div className="w-full h-full">
            {" "}
            <Lottie
              loop
              animationData={lottieAboutJson}
              play
              className="w-full h-full"
            />
          </div>
        </div>

      
      </div>


    </div>
  );
};

export default About;
