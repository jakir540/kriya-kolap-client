import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import AllInstructorsCard from "./AllInstructorsCard";
const AllInstructors = () => {

  const [instructors,setInstructors] =useState([])
useEffect(()=>{
  fetch("https://kriya-kolap-sever-jakir540.vercel.app/instructors")
  .then(res => res.json())
  .then(data =>{
    setInstructors(data)
  })
},[])



  console.log(instructors)
  return (
    <div>
    <Navbar></Navbar>
  
      <div>
        <h2 className="text-center text-3xl font-semibod">All Instructors</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 my-20">
        {
          instructors.map(instructor => <AllInstructorsCard instructor={instructor} key={instructors._id}></AllInstructorsCard>)
        }
      </div>
    </div>
  );
};

export default AllInstructors;
