import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecuir";
import { Link } from "react-router-dom";
import { GrUpdate } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";

const MyClasses = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await axiosSecure.get("/instructor/classes");
    return res.data;
  });
  console.log(classes);
  return (
    <div>
      <h2 className="text-center text-3xl"> My Classes {classes.length}</h2>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Class Image</th>

                <th>Instructor name</th>

                <th>Available seats</th>
                <th>Price</th>

                <th>Action Status</th>
                <th>Enrolled Students </th>
                <th>Update</th>
                <th>feedback</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((singleClass, index) => (
                <tr className="bg-base-300 " key={index}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={singleClass.imgURL} alt="yoga image" />
                        </div>
                      </div>
                    </div>
                  </td>

                  <td>{singleClass.name}</td>

                  <td>{singleClass.seats}</td>
                  <td>{singleClass.price}</td>

                  <div className="flex flex-col m-0 ">
                    <th className="py-1">
                      {singleClass.status === "approved" ? (
                        <button disabled className=" btn btn-xs bg-orange-600">
                          approved
                        </button>
                      ) : (
                        <button className="btn  btn-xs bg-orange-600">
                          approved
                        </button>
                      )}
                    </th>

                    <th className="py-1">
                      {singleClass.status === "denied" ? (
                        <button disabled className="btn btn-xs bg-orange-600">
                          Deny
                        </button>
                      ) : (
                        <button className="btn btn-xs bg-orange-600">
                          Deny
                        </button>
                      )}
                    </th>

                    <td className="text-green-700">{singleClass.status}</td>
                  </div>

                  {/* todo */}

                  <th>
                    <Link to="#">
                      <SiGoogleclassroom className="text-2xl ms-5 text-orange-500"></SiGoogleclassroom>
                    </Link>
                  </th>
                  {/* todo */}
                  <th>
                    <Link to="#">
                      <GrUpdate className="text-2xl "></GrUpdate>
                    </Link>
                  </th>

                  {/* todo */}
                  <th>
                    <Link to="/dashbord/manageClasses/feedback">
                      <button className="btn btn-xs">feedback</button>
                    </Link>
                  </th>

                  {/* --------------------------- */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyClasses;
