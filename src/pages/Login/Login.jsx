import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { signIn, googleSignIn, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  // -----------------------------------------

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  //google signIn
  // const handleSignIn = () => {
  //   googleSignIn()
  //     .then((result) => {
  //       const loggedUser = result.user;

  //       console.log(loggedUser);
  //       navigate(from, { replace: true });
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: "Google Login successfully",
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     })
  //     .then((error) => {
  //       setLoading(false);
  //       console.log(error);
  //       setError(error);
  //     });
  // };

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    //------------Sign in with email password -----------------
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from,{replace:true})
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.log(error);
      });
  };

  //hide and unhide password
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-1/2 mx-auto mt-16 bg-slate-100 p-16 shadow-2xl rounded-lg">
      <h2 className=" text-center text-3xl font-semibold"> Please Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control my-8">
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="input input-bordered"
          />
        </div>

        {errors.email && <span>Email must be required</span>}

        <div className="form-control my-8 relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            {...register("password", { required: true })}
            placeholder="password"
            className="input input-bordered"
          />
          <AiFillEye
            onClick={handleShow}
            className="absolute right-3 top-4 text-xl"
          ></AiFillEye>
        </div>
        {errors.password && <span>Email must be required</span>}

        <div className="flex justify-center">
          {" "}
          <input
            className="btn btn-primary my-8 text-white"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
      <p>
        <small>
          you don,t have an account please{" "}
          <Link to="/signup">
            <span className="text-yellow-700">signup</span>
          </Link>{" "}
          first
        </small>
      </p>

  
        <SocialLogin></SocialLogin>
     
    </div>
  );
};

export default Login;
