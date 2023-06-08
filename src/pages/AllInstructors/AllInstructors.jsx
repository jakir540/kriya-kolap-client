import useAllInstructorsCard from "../../Hooks/useAllInstructorsCard";
import Navbar from "../Shared/Navbar/Navbar";
import AllInstructorsCard from "./AllInstructorsCard";
const AllInstructors = () => {

  const [instructors] = useAllInstructorsCard();
  console.log(instructors)
  return (
    <div>
    <Navbar></Navbar>
  
      <div>
        <h2 className="text-center text-3xl font-semibod">All Instructors</h2>
      </div>

      <div className="grid grid-cols-3">
        {
          instructors.map(instructor => <AllInstructorsCard instructor={instructor} key={instructors._id}></AllInstructorsCard>)
        }
      </div>
    </div>
  );
};

export default AllInstructors;
