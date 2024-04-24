import { useContext, useEffect, useState } from "react";
import { GrYoga } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [isTransparent, setIsTransparent] = useState(true);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const menu = (
    <>
      <li>
        <Link to="/">
          Home
          <span>
            <AiOutlineHome></AiOutlineHome>
          </span>
        </Link>
      </li>

      <li>
        <Link to="/allInstructors">
          Instructors <GiTeacher></GiTeacher>
        </Link>
      </li>
      <div className="dropdown">
        <li>
          <div tabIndex={0} role="button" className="m-1">
            <Link to="" className="flex">
              <div>
          
                <FaShoppingBag></FaShoppingBag>
              </div>
              <span>Shop</span>
            </Link>
              <FaCaretDown></FaCaretDown>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-3 shadow bg-base-100  rounded-box w-30 mt-10"
          >
            <li>
              <a>Yoga Mats</a>
            </li>
            <li>
              <a>Yoga Blocks</a>
            </li>
            <li>
              <a>Yoga Straps</a>
            </li>
            <li>
              <a>Yoga Bolsters</a>
            </li>
          </ul>
        </li>
      </div>
      <li>
        <Link to="/approvedClasses">
          Classes <SiGoogleclassroom></SiGoogleclassroom>
        </Link>
      </li>

      {user && (
        <li>
          <Link to="/dashbord">Dashboard </Link>
        </li>
      )}
      {user ? (
        <div className="hidden md:block">
          <img
            className="mx-3 rounded-full h-12"
            src={user.photoURL}
            alt="userProfile"
            title={user && user.displayName}
          />
        </div>
      ) : (
        <li>
          <Link to="/login">
            Login <AiOutlineLogin></AiOutlineLogin>
          </Link>
        </li>
      )}
      <li>
        <Link to="#">
          {user && (
            <button
              className="bg-[#cbd5e1] text-black hover:bg-slate-800 mt-[-5px]"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          )}{" "}
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`navbar w-[1280px] py-3 fixed z-10 top-0 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent backdrop-filter backdrop-blur-md"
          : "bg-base-100"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link className=" font-bold   lg:text-4xl text-2xl">
          <div className="flex mx-2">
            <div>
              {" "}
              <GrYoga></GrYoga>
            </div>
            <div className="ml-2"> Kriya Kolap</div>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>

      <div className="hidden md:block navbar-end lg:me-[-390px] mt-[-5px]">
        <label className="swap swap-rotate">
          <input
            className="bg-transparent  shadow-none"
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* sun icon path */}
          </svg>
          <svg
            className="swap-off fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* moon icon path */}
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
