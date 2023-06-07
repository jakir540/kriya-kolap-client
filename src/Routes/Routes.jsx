import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import CarouselBanner from "../pages/Home/Home/CarouselBanner";

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
  ]);
