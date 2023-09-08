// import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import { useQuery } from "@tanstack/react-query";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularClasses = () => {
  // const [classes, setClasses] = useState([]);
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [],  } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/classes");
    return res.data;
  });
  console.log(classes);



  // useEffect(() => {
  //   fetch("https://kriya-kolap-sever-jakir540.vercel.app/classes")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log({data});
  //       setClasses(data);
  //     });
  // }, []);

  return ( 
    <div className="w-[1280px]">

      <div data-aos="fade-up" className="text-center my-5">
        <h2 className="text-center text-3xl font-semibold capitalize">
          {" "}
          about the ways of yoga Popular Classes
        </h2>
        <p className="my-5 leading-7">
          We at <span className="font-bold text-green-600">KRIYA KOLAP</span> provide various services to the nature of the World.
          
        </p>
      </div>

     <div data-aos="fade-up" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5">
        {
            classes.map(singleClass =><PopularClassesCard singleClass={singleClass} key={singleClass._id}></PopularClassesCard> )
        }
     </div>

    </div>
  );
};

export default PopularClasses;
