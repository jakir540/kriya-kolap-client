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
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/dashboard/profile");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navbar */}
      <div className="w-full bg-[#2E344E] text-white p-4 flex justify-between items-center">
        <div className="text-3xl font-semibold text-[#00A854]">
          <Link to="/" className="flex items-center space-x-2">
            <ImHome className="text-4xl" />
            <span>Dashboard</span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          ☰
        </button>

        {/* Profile Section */}
        <div className="hidden lg:flex items-center space-x-4">
          <img
            src={user.photoURL}
            alt="Profile"
            className="rounded-full w-12 h-12 border-4 border-[#00A854]"
          />
          <div>
            <h2 className="text-lg font-semibold">{user.displayName}</h2>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className={`fixed lg:static top-0 left-0 z-50 h-full bg-[#2E344E] text-white p-6 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 transition-transform duration-300`}
        >
          <button
            className="absolute top-4 right-4 text-2xl lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>
          <ul className="flex flex-col space-y-4">
            {/* Profile Link */}
            <li>
              <Link
                to="/dashboard/profile"
                className="flex items-center space-x-3 p-2 rounded-lg bg-[#3B4252] hover:bg-[#00A854] transition-all"
              >
                <ImHome className="text-2xl" />
                <span>Profile</span>
              </Link>
            </li>

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

        {/* Main Content */}
        <div className="flex-1 bg-[#F4F7FB] p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
