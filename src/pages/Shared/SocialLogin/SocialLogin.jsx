import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      const uploadUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        role: "student",
      };
      console.log({ uploadUser });

      fetch("https://kriya-kolap-sever-jakir540.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          },
        body: JSON.stringify(uploadUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <div>
      <div className="divider"></div>
      <div className="w-full text-center text-4xl my-5 ">
        <button className="btn btn-circle btn-outline" onClick={handleGoogleSignIn}>
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
