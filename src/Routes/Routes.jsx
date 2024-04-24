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
import MyEnrolledClass from "../pages/DashBord/MyEnrolledClass/MyEnrolledClass";
import PaymentHistory from "../pages/DashBord/PaymentHistory/PaymentHistory";
import UpdateInstructorInfo from "../pages/DashBord/UpdateInstructorInfo/UpdateInstructorInfo";
import ReceivedFeedback from "../pages/DashBord/ReceivedFeedback/ReceivedFeedback";
import Errorpage from "../components/Errorpage/Errorpage";
import Shop from "../pages/Shop/Shop";
import PaymentSuccess from "../pages/paymentSuccess/PaymentSuccess";

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
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "payment/success/:tranID",
    element: <PaymentSuccess></PaymentSuccess>,
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

      //user Route
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
