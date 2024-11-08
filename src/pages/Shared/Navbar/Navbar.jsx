import { useContext, useEffect, useState } from "react";
import { GrYoga } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaShoppingBag, FaCaretDown } from "react-icons/fa";

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
      setIsTransparent(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { logOut, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().catch(console.log);
  };

  const menu = (
    <>
      <li>
        <Link
          to="/"
          className="flex items-center space-x-1 hover:text-[#00a854]"
        >
          <AiOutlineHome className="text-xl" /> <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          to="/allInstructors"
          className="flex items-center space-x-1 hover:text-[#00a854]"
        >
          <GiTeacher className="text-xl" /> <span>Instructors</span>
        </Link>
      </li>
      <div className="dropdown">
        <li>
          <div
            tabIndex={0}
            className="flex items-center space-x-1 cursor-pointer hover:text-[#00a854]"
          >
            <FaShoppingBag className="text-xl" /> <span>Shop</span>{" "}
            <FaCaretDown />
          </div>
          <ul className="dropdown-content z-[1] menu p-3 shadow-lg bg-white/70 backdrop-blur-md rounded-lg w-44 mt-3 text-gray-700">
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
        <Link
          to="/approvedClasses"
          className="flex items-center space-x-1 hover:text-[#00a854]"
        >
          <SiGoogleclassroom className="text-xl" /> <span>Classes</span>
        </Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard" className="hover:text-[#00a854]">
            Dashboard
          </Link>
        </li>
      )}
      {user ? (
        <div className="hidden md:block">
          <img
            className="mx-3 rounded-full h-12 border-2 border-[#00a854]"
            src={user.photoURL}
            alt="userProfile"
            title={user.displayName}
          />
        </div>
      ) : (
        <li>
          <Link
            to="/login"
            className="flex items-center space-x-1 hover:text-[#00a854]"
          >
            <AiOutlineLogin className="text-xl" /> <span>Login</span>
          </Link>
        </li>
      )}
      {user && (
        <li>
          <button
            className="bg-[#00a854]  px-4 py-2 rounded-md hover:bg-white"
            onClick={handleLogOut}
          >
            LogOut
          </button>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`navbar py-4 fixed z-10 top-0 transition-all duration-500 max-w-7xl ${
        isTransparent
          ? "bg-gray-900 backdrop-blur-md"
          : "bg-transparent backdrop-blur-lg text-[#00a854]"
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-indigo-100 rounded-lg w-52 text-gray-700"
          >
            {menu}
          </ul>
        </div>
        <Link className="text-2xl lg:text-4xl font-bold text-white flex items-center space-x-2">
          <GrYoga className="text-3xl" />
          <span>Kriya Kolap</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 px-1 text-white">
          {menu}
        </ul>
      </div>

      <div className="navbar-end hidden md:block">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
            className="hidden"
          />
          <svg
            className="swap-on w-8 h-8 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* sun icon path */}
          </svg>
          <svg
            className="swap-off w-8 h-8 text-gray-700"
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
