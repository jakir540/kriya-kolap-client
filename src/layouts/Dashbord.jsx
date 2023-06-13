import { Link, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { MdManageAccounts, MdOutlinePayment} from "react-icons/md";
import { FaUserEdit,FaHistory } from "react-icons/fa";
import useInstructor from "../Hooks/useInstructor";
import { BiSelectMultiple } from 'react-icons/bi';
import { FcAcceptDatabase } from 'react-icons/fc';
import { ImHome } from 'react-icons/im';
import { SiGoogleclassroom } from 'react-icons/si';
import useAuth from "../Hooks/useAuth";

const Dashbord = () => {
  const {user} = useAuth()
  console.log(user)
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
          {/* Sidebar content here */}

          {isAdmin ? (
            <>
           <div className="flex flex-col  justify-center items-center">
           <div >
              <img className="rounded-full " src={user.photoURL} alt="" />
            </div>
              <div className="m-5"><h2>Admin Page</h2></div>
           </div>
              <li>
                <Link to="/dashbord/manageClasses">
                  <MdManageAccounts className="text-2xl" /> Manage Classes
                </Link>
              </li>
              <li>
                <Link to="/dashbord/manageUsers">
                  <FaUserEdit className="text-2xl" /> Manage Users
                </Link>
              </li>
              <li>
                <Link to="/">
                 <ImHome className="text-2xl"/> Home
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
            <div className="flex flex-col  justify-center items-center">
           <div >
              <img className="rounded-full " src={user.photoURL} alt="" />
            </div>
              <div className="m-5"><h2>Instructor  Page</h2></div>
           </div>
              <li>
                <Link to="/dashbord/addClass">
                  {" "}
                  <AiOutlineFolderAdd className="text-2xl" /> Add a Class
                </Link>
              </li>
              <li>
                <Link to="/dashbord/myClasses"> <SiGoogleclassroom className="text-2xl" />My Classes</Link>
              </li>
              <li>
                <Link>Total Enrolled Students</Link>
              </li>
              <li>
                <Link to="/">
                 <ImHome className="text-2xl"/> Home
                </Link>
              </li>
            </>
          ) : (
            <>
            <div className="flex flex-col  justify-center items-center">
           <div >
              <img className="rounded-full " src={user.photoURL} alt="" />
            </div>
              <div className="m-5"><h2>Student Page</h2></div>
           </div>
              <li>
                <Link to="/dashbord/mySelectedClass"> <BiSelectMultiple className="text-2xl"/> My Selected Classes</Link>
              </li>
              <li>
                <Link to="/dashbord/myEnrolledClasses">
                 <FcAcceptDatabase className="text-2xl"/> My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashbord/payment/:id"> <MdOutlinePayment className="text-2xl"/> Payment</Link>
              </li>
              <li>
                <Link to="/dashbord/paymentHistory"><FaHistory className="2xl"/> Payment History</Link>
              </li>
              <li>
                <Link to="/">
                 <ImHome className="text-2xl"/> Home
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
