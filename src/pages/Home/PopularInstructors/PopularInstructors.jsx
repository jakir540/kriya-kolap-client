import { useEffect, useState } from "react";
import PopularInstructorsCards from "./PopularInstructorsCards";
import { Link } from "react-router-dom";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://kriya-kolap-sever-jakir540.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
      
        setInstructors(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-center text-3xl font-semibold">
          Popular Instructors
        </h2>
        <p className="my-5 lg:leading-9 ">
          A yoga teacher's primary responsibility is to lead yoga classes, where
          they demonstrate <br /> and instruct various yoga postures (asanas),
          breathing techniques (pranayama), <br /> and meditation practices.
          They carefully design class sequences that cater{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5">
        {instructors.map((instructor) => (
          <PopularInstructorsCards
            instructor={instructor}
            key={instructor}
          ></PopularInstructorsCards>
        ))}
      </div>

      <div className="flex justify-center items-center my-10">
        {" "}
        <Link to="/allInstructors">
          {" "}
          <button className="btn bg-orange-500 hover:bg-slate-700">All Instructors</button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
