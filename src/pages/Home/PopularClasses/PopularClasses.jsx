import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        console.log({data});
        setClasses(data);
      });
  }, []);

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
     <div className="grid grid-cols-3 gap-8 my-5">
        {
            classes.map(singleClass =><PopularClassesCard singleClass={singleClass} key={singleClass._id}></PopularClassesCard> )
        }
     </div>
    </div>
  );
};

export default PopularClasses;
