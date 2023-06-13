// import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import { useQuery } from "@tanstack/react-query";

const PopularClasses = () => {
  // const [classes, setClasses] = useState([]);


  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
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
    <div>
      <div className="text-center my-5">
        <h2 className="text-center text-3xl font-semibold capitalize">
          {" "}
          about the ways of yoga Popular Classes
        </h2>
        <p className="my-5 leading-7">
          We at <span className="font-bold text-green-600">KRIYA KOLAP</span> provide various services to the nature of the <br />
          clients. Wish how you would like to spend the time <br /> here we can talk 
          and come to a conclusion.
        </p>
      </div>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5">
        {
            classes.map(singleClass =><PopularClassesCard singleClass={singleClass} key={singleClass._id}></PopularClassesCard> )
        }
     </div>
    </div>
  );
};

export default PopularClasses;
