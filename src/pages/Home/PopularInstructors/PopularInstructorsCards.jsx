import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PopularInstructorsCards = ({ instructor }) => {

  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);

  const {instructorName,email,photo,price}=instructor
  return (

    <div data-aos="zoom-in-up"  className=" card card-compact w-92 bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="yoga class"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructorName}</h2>
       <p>Email : {email}</p>
       <p>Price : {price}</p>
       
        <div className="card-actions justify-end">
          <button className="btn  bg-[#cbd5e1] hover:bg-slate-700">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorsCards;
