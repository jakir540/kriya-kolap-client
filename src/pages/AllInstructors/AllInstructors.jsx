import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import AllInstructorsCard from "./AllInstructorsCard";
import Footer from "../Shared/Footer/Footer";

const AllInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://kriya-kolap-sever-jakir540.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      });
  }, []);

  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="text-center py-10">
        <h2 className="text-4xl font-semibold text-black">
          Meet Our Instructors
        </h2>
        <p className="text-lg text-gray-700 mt-4">
          Our team of experienced instructors are dedicated to providing you
          with the best yoga experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-10 px-4 lg:px-16 my-10">
        {instructors.map((instructor) => (
          <AllInstructorsCard instructor={instructor} key={instructor._id} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllInstructors;
