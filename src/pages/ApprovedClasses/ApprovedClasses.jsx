import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecuir";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import ApprovedClassesCard from "./ApprovedClassesCard";

const ApprovedClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: approvedClasses = [], refetch } = useQuery(
    ["approvedClasses"],
    async () => {
      const res = await axiosSecure.get("/approvedClasses");
      return res.data;
    }
  );
  console.log(approvedClasses);

  return (
    <div>
      <Navbar></Navbar>

      <div>
        <div>
          <div className="text-center my-5">
            <h2 className="text-center text-3xl font-semibold capitalize">
              {" "}
              about the ways of yoga Approved Classes
            </h2>
            <p className="my-5 mt-16 leading-7">
              We at{" "}
              <span className="font-bold  text-green-600 lg:text-4xl">KRIYA KOLAP</span>{" "}
              provide various services to the nature of the <br />
              clients. Wish how you would like to spend the time <br /> here we
              can talk and come to a conclusion.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 my-5">
            {approvedClasses.map((singleClass) => (
              <ApprovedClassesCard
                singleClass={singleClass}
                key={singleClass._id}
              ></ApprovedClassesCard>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default ApprovedClasses;
