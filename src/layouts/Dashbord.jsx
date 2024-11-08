import { Link, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { MdManageAccounts, MdOutlinePayment } from "react-icons/md";
import { FaUserEdit, FaHistory } from "react-icons/fa";
import useInstructor from "../Hooks/useInstructor";
import { BiSelectMultiple } from "react-icons/bi";
import { FcAcceptDatabase } from "react-icons/fc";
import { ImHome } from "react-icons/im";
import { SiGoogleclassroom } from "react-icons/si";
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";

const Dashbord = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Automatically navigate to the profile page on login
      navigate("/dashbord/profile");
    }
  }, [user, navigate]);

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#F4F7FB]">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open Drawer
        </label>
      </div>
      <div className="drawer-side bg-[#1D2330] text-white">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-6 w-full h-full flex flex-col justify-start space-y-4">
          {/* Profile Section */}
          <div className="text-center mb-2">
            <img
              src={user.photoURL}
              alt="Profile"
              className="rounded-full w-24 h-24 mx-auto border-4 border-[#00A854] shadow-lg"
            />
            <h2 className="text-2xl font-semibold mt-2">{user.displayName}</h2>
            {/* <p className="text-sm text-[#8A8A8A]">
              {isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"}
            </p> */}
          </div>

          {/* Sidebar Links */}
          <li>
            <Link
              to="/dashbord/profile"
              className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
            >
              <FaUserEdit className="text-2xl" />
              <span className="font-medium">Profile</span>
            </Link>
          </li>

          {isAdmin ? (
            <>
              <li>
                <Link
                  to="/dashbord/manageClasses"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <MdManageAccounts className="text-2xl" />
                  <span className="font-medium">Manage Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashbord/manageUsers"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <FaUserEdit className="text-2xl" />
                  <span className="font-medium">Manage Users</span>
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link
                  to="/dashbord/addClass"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <AiOutlineFolderAdd className="text-2xl" />
                  <span className="font-medium">Add a Class</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashbord/myClasses"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <SiGoogleclassroom className="text-2xl" />
                  <span className="font-medium">My Classes</span>
                </Link>
              </li>
              <li>
                <Link className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all">
                  <FcAcceptDatabase className="text-2xl" />
                  <span className="font-medium">Total Enrolled Students</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/dashbord/mySelectedClass"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <BiSelectMultiple className="text-2xl" />
                  <span className="font-medium">My Selected Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashbord/myEnrolledClasses"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <FcAcceptDatabase className="text-2xl" />
                  <span className="font-medium">My Enrolled Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashbord/payment/:id"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <MdOutlinePayment className="text-2xl" />
                  <span className="font-medium">Payment</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashbord/paymentHistory"
                  className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
                >
                  <FaHistory className="text-2xl" />
                  <span className="font-medium">Payment History</span>
                </Link>
              </li>
            </>
          )}

          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="flex items-center space-x-3 p-2 mb-1 rounded-lg bg-[#2E344E] hover:bg-[#00A854] transition-all"
            >
              <ImHome className="text-2xl" />
              <span className="font-medium">Home</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
