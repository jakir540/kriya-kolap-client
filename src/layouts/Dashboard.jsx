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

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      // Automatically navigate to the profile page on login
      navigate("/dashboard/profile");
    }
  }, [user, navigate]);

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#2E344E] text-white p-6 flex flex-col justify-between">
        {/* Dashboard Icon */}
        <div className="mb-6">
          <Link
            to="/"
            className="text-3xl font-semibold flex items-center space-x-2 hover:text-[#00A854]"
          >
            <ImHome className="text-4xl" />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Profile Section */}
        <div className="text-center mb-4">
          <img
            src={user.photoURL}
            alt="Profile"
            className="rounded-full w-20 h-20 mx-auto border-4 border-[#00A854] shadow-lg"
          />
          <h2 className="text-lg font-semibold mt-2">{user.displayName}</h2>
        </div>

        {/* Sidebar Links */}
        <ul className="flex flex-col space-y-4">
          {isAdmin ? (
            <>
              <li>
                <Link
                  to="/dashboard/manageClasses"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <MdManageAccounts className="text-2xl" />
                  <span>Manage Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/manageUsers"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <FaUserEdit className="text-2xl" />
                  <span>Manage Users</span>
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link
                  to="/dashboard/addClass"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <AiOutlineFolderAdd className="text-2xl" />
                  <span>Add a Class</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myClasses"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <SiGoogleclassroom className="text-2xl" />
                  <span>My Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/totalEnrolledStudents"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <FcAcceptDatabase className="text-2xl" />
                  <span>Total Enrolled Students</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/dashboard/mySelectedClass"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <BiSelectMultiple className="text-2xl" />
                  <span>My Selected Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/myEnrolledClasses"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <FcAcceptDatabase className="text-2xl" />
                  <span>My Enrolled Classes</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/payment"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <MdOutlinePayment className="text-2xl" />
                  <span>Payment</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard/paymentHistory"
                  className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
                >
                  <FaHistory className="text-2xl" />
                  <span>Payment History</span>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Main Content (Right Side) */}
      <div className="flex-1 bg-[#F4F7FB] p-6">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;