import { useEffect, useState } from "react";

const PopularClasses = () => {
    const [classes,setClasses] = useState([])

useEffect(()=>{
    fetch('http://localhost:5000/classes')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        setClasses(data)
    })
},[])

    return (
        <div>
        <div>
            <h2 className="text-center text-3xl font-semibold">Popular Classes</h2>
        </div>
            {classes.length}
        </div>
    );
};

export default PopularClasses;