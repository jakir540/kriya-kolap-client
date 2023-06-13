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
import AddClass from "../pages/DashBord/AddClasse/AddClass";
import ManageClasses from "../pages/DashBord/ManageClasses/ManageClasses";
import Feedback from "../pages/DashBord/ManageClasses/Feedback";
import ApprovedClasses from "../pages/ApprovedClasses/ApprovedClasses";
import MySelectedClass from "../pages/DashBord/MySelectedClass/MySelectedClass";
import Payment from "../pages/DashBord/Payment/Payment";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

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
    path: "approvedClasses",
    element: <ApprovedClasses></ApprovedClasses>,
  },
  {
    path: "/allInstructors",
    element: <AllInstructors></AllInstructors>,
  },
  {
    path: "dashbord",
    element: (
      <PrivateRoutes>
        <Dashbord></Dashbord>
      </PrivateRoutes>
    ),
    children: [
      //instructor Route
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "manageClasses/feedback",
        element: (
          <InstructorRoute>
            {" "}
            <Feedback></Feedback>
          </InstructorRoute>
        ),
      },
      //admin Route
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            {" "}
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },

      //user Route
      {
        path: "mySelectedClass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
    ],
  },
]);
