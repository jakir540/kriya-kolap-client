import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import CarouselBanner from "../pages/Home/Home/CarouselBanner";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path:'/',
            element:<CarouselBanner></CarouselBanner>

        },
       
      ]
    },
    {
      path:'login',
      element:<Login></Login>
    },
    {
      path:'signup',
      element:<SignUp></SignUp>
    }
  ]);
