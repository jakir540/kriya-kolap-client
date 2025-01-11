import { useContext, useEffect, useState } from "react";
import { GrYoga } from "react-icons/gr";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isTransparent, setIsTransparent] = useState(true);

  const { logOut, user } = useContext(AuthContext);

  const handleToggleTheme = (e) => {
    const selectedTheme = e.target.checked ? "dark" : "light";
    setTheme(selectedTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setIsTransparent(window.scrollY <= 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut().catch(console.error);
  };

  const menuItems = (
    <>
      <li>
        <Link
          to="/"
          className={`flex items-center space-x-1 hover:text-green-600 ${
            isTransparent ? "text-white" : "text-black"
          }`}
        >
          <AiOutlineHome className="text-xl" />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link
          to="/allInstructors"
          className={`flex items-center space-x-1 hover:text-green-600 ${
            isTransparent ? "text-white" : "text-black"
          }`}
        >
          <GiTeacher className="text-xl" />
          <span>Instructors</span>
        </Link>
      </li>
      <Link
        to="/about"
        className={`flex items-center space-x-1 hover:text-green-600 ${
          isTransparent ? "text-white" : "text-black"
        }`}
      >
        <GiTeacher className="text-xl" />
        <span>About</span>
      </Link>
      <li>
        <Link
          to="/approvedClasses"
          className={`flex items-center space-x-1 hover:text-green-600 ${
            isTransparent ? "text-white" : "text-black"
          }`}
        >
          <SiGoogleclassroom className="text-xl" />
          <span>Classes</span>
        </Link>
      </li>
      {user && (
        <li>
          <Link
            to="/dashboard"
            className={`hover:text-green-600 ${
              isTransparent ? "text-white" : "text-black"
            }`}
          >
            Dashboard
          </Link>
        </li>
      )}
      {user ? (
        <>
          <li>
            <button
              className="bg-green-600 px-4 py-2 rounded-md hover:bg-white hover:text-green-600"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          </li>
          <li>
            <img
              className="w-12 h-10 rounded-full border-2 border-green-600 hover:scale-110 transition-transform duration-300"
              src={user.photoURL}
              alt="Profile"
              title={user.displayName}
            />
          </li>
        </>
      ) : (
        <li>
          <Link
            to="/login"
            className={`flex items-center space-x-1 hover:text-green-600 ${
              isTransparent ? "text-white" : "text-black"
            }`}
          >
            <AiOutlineLogin className="text-xl" />
            <span>Login</span>
          </Link>
        </li>
      )}
    </>
  );

  return (
    <div
      className={`navbar fixed z-10 top-0 max-w-7xl transition-all duration-500 py-4 px-6 mx-auto ${
        isTransparent
          ? "bg-gray-900 bg-opacity-90 backdrop-blur-md text-white"
          : "bg-white text-black shadow-lg"
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-lg w-52 text-gray-700"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="text-2xl font-bold flex items-center space-x-2">
          <GrYoga className="text-4xl" />
          <span>Kriya Kolap</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-4 text-white">
          {menuItems}
        </ul>
      </div>

      <div className="navbar-end hidden md:flex items-center">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={handleToggleTheme}
            checked={theme === "dark"}
          />
          <svg
            className="swap-on w-8 h-8 text-yellow-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* Sun icon */}
            <path d="M12 4V2m0 20v-2m8-8h2M4 12H2m15.071 6.071l1.414-1.414M6.515 6.515 5.1 5.1m12.364 0 1.414 1.414M6.515 17.485l-1.414 1.414" />
          </svg>
          <svg
            className="swap-off w-8 h-8 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {/* Moon icon */}
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
