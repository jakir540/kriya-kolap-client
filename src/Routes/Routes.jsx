import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Home from "../pages/Home/Home/Home";
import AllInstructors from "../pages/AllInstructors/AllInstructors";

import PrivateRoutes from "./PrivateRoutes";

import ManageUsers from "../pages/DashBoard/ManageUsers/ManageUsers";
import AddClass from "../pages/DashBoard/AddClasse/AddClass";
import ApprovedClasses from "../pages/ApprovedClasses/ApprovedClasses";
import Feedback from "../pages/DashBoard/ManageClasses/Feedback";
import ManageClasses from "../pages/DashBoard/ManageClasses/ManageClasses";
import MySelectedClass from "../pages/DashBoard/MySelectedClass/MySelectedClass";
import Errorpage from "../components/Errorpage/Errorpage";
import PaymentSuccess from "../pages/paymentSuccess/PaymentSuccess";
import PaymentFail from "../pages/paymentFail/PaymentFail";
import Shop from "../pages/Shop/Shop";
import InstructorRoute from "./InstructorRoute";
import MyClasses from "../pages/DashBoard/MyClasses/MyClasses";
import ProfilePage from "../components/ProfilePage";
import UpdateInstructorInfo from "../pages/DashBoard/UpdateInstructorInfo/UpdateInstructorInfo";
import ReceivedFeedback from "../pages/DashBoard/ReceivedFeedback/ReceivedFeedback";
import AdminRoute from "./AdminRoute";
import MyEnrolledClass from "../pages/DashBoard/MyEnrolledClass/MyEnrolledClass";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import Dashboard from "../layouts/Dashboard";
import SingleBlog from "../pages/Home/Blogs/SingleBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blogs/:_id",
        element: <SingleBlog />,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "payment/success",
    element: <PaymentSuccess></PaymentSuccess>,
  },
  {
    path: "payment/fail/:tranID",
    element: <PaymentFail></PaymentFail>,
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
    path: "/shop",
    element: <Shop></Shop>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      // Profile Route
      {
        path: "profile",
        element: <ProfilePage />, // Add ProfilePage route here
      },

      // Instructor Routes
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
        path: "myClasses/:id",
        element: (
          <InstructorRoute>
            <UpdateInstructorInfo></UpdateInstructorInfo>
          </InstructorRoute>
        ),
      },
      {
        path: "feedback/:id",
        element: (
          <InstructorRoute>
            <ReceivedFeedback></ReceivedFeedback>
          </InstructorRoute>
        ),
      },

      // Admin Routes
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses/feedback",
        element: (
          <AdminRoute>
            <Feedback></Feedback>
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

      // User Routes
      {
        path: "mySelectedClass",
        element: <MySelectedClass></MySelectedClass>,
      },
      {
        path: "myEnrolledClasses",
        element: <MyEnrolledClass></MyEnrolledClass>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
]);
