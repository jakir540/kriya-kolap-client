import { Link, Outlet } from "react-router-dom";
// import useAdmin from "../Hooks/useAdmin";
import { AiOutlineFolderAdd } from "react-icons/ai";

const Dashbord = () => {
  // const [isAdmin] = useAdmin();
  const isAdmin =false
  const isInstructor = true;

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
            <h2>Admin Page</h2>
              <li>
                <Link to="/dashbord/manageClasses">Manage Classes</Link>
              </li>
              <li>
                <Link to="/dashbord/manageUsers">Manage Users</Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
            <h2>Instructor Page</h2>
              <li>
                <Link to="/dashbord/addClass"> <AiOutlineFolderAdd className="text-2xl"/> Add a Class</Link>
              </li>
              <li>
                <Link to="/dashbord/myClasses">My Classes</Link>
              </li>
              <li>
                <Link>Total Enrolled Students</Link>
              </li>
            </>
          ) : (
            <>
            <h2>Student Page</h2>
              <li>
                <Link to="/dashbord/mySelectedClass">My Selected Classes</Link>
              </li>
              <li>
                <Link>My Enrolled Classes</Link>
              </li>
              <li>
                <Link to="/dashbord/payment/:paymentPrice">Payment</Link>
              </li>
            </>
          )}

          {/* <li>
            <Link to="/dashbord/myClasses">My Selected Classes</Link>
          </li>
          <li>
            <Link>My Enrolled Classes</Link>
          </li>
          <li>
            <Link>Payment</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashbord;
