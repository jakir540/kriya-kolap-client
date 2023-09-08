import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Errorpage/Loader/Loader";
const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
 
    setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default Main;
