import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import AllInstructors from "../pages/AllInstructors/AllInstructors";
import Dashbord from "../layouts/Dashbord";
import MyClasses from "../pages/DashBord/MyClasses/MyClasses";
import PrivateRoutes from "./PrivateRoutes";
import ManageUsers from "../pages/DashBord/ManageUsers/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
  {
    path: "/allInstructors",
    element: <AllInstructors></AllInstructors>,
  },
  {
    path: "dashbord",
    element: <PrivateRoutes><Dashbord></Dashbord></PrivateRoutes>,
    children: [
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
    ],
  },
]);
