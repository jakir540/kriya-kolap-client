import PopularClassesCard from "./PopularClassesCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import { useQuery } from "@tanstack/react-query";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularClasses = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [] } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div data-aos="fade-up" className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 capitalize">
          Popular Yoga Classes
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          At <span className="font-bold text-green-600">KRIYA KOLAP</span>, we
          provide classes designed to connect you with nature and improve your
          well-being through the art of yoga.
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8"
      >
        {classes.map((singleClass) => (
          <PopularClassesCard singleClass={singleClass} key={singleClass._id} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
