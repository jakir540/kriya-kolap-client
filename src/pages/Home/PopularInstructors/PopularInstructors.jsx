import PopularInstructorsCards from "./PopularInstructorsCards";
import { Link } from "react-router-dom";
import { useGetInstructorsQuery } from "../../../redux/services/instructors";

const PopularInstructors = () => {
  const { data: instructors } = useGetInstructorsQuery(undefined);

  return (
    <div className="px-6 lg:px-20 py-10 bg-gradient-to-b from-white to-gray-100">
      <div className="text-center my-10">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Popular Instructors
        </h2>
        <p className="my-5 text-gray-600 lg:leading-8">
          Discover the most inspiring and skilled yoga instructors, leading
          transformative classes that elevate your mind and body.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {instructors?.map((instructor) => (
          <PopularInstructorsCards
            instructor={instructor}
            key={instructor.id} // Use a proper unique key like `instructor.id`
          />
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <Link to="/allInstructors">
          <button className="btn relative overflow-hidden bg-green-500 text-white font-semibold tracking-wide rounded-lg px-6 py-3 shadow-[0px_4px_6px_rgba(0,0,0,0.1),0px_1px_3px_rgba(0,0,0,0.06)] hover:shadow-[0px_10px_15px_rgba(0,0,0,0.2),0px_4px_6px_rgba(0,0,0,0.1)] border border-green-700 hover:border-green-800 transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
            <span className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:animate-hoverEffect"></span>
            <span className="relative z-10">Explore All Instructors</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PopularInstructors;
