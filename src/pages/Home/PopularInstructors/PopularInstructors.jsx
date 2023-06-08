import { useEffect, useState } from "react";
import PopularInstructorsCards from "./PopularInstructorsCards";

const PopularInstructors = () => {
    const [instructors ,setInstructors]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/instructors')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setInstructors(data)
        })
    },[])
    return (
        <div>
          <div className="text-center my-10">
            <h2 className="text-center text-3xl font-semibold">Popular Instructors</h2>
            <p className="my-5 leading-9">A yoga teacher's primary responsibility is to lead yoga classes, where they  demonstrate  <br /> and instruct various  yoga postures (asanas), breathing techniques (pranayama), <br /> and meditation practices. They carefully design class sequences that cater </p>
        </div>
         <div className="grid grid-cols-3 gap-5 my-5">
         {instructors.map(instructor => <PopularInstructorsCards instructor={instructor} key={instructor}></PopularInstructorsCards>)}
         </div>
        </div>
    );
};

export default PopularInstructors;