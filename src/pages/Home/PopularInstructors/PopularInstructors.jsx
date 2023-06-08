import { useEffect, useState } from "react";

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
          <div>
            <h2 className="text-center text-3xl font-semibold">Popular Instructors</h2>
        </div>
            {instructors.length}
        </div>
    );
};

export default PopularInstructors;