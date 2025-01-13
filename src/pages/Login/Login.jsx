/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const { signIn, setLoading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    setValue, // To set input values programmatically
    formState: { errors },
  } = useForm();

  // Predefined users with roles
  const predefinedUsers = {
    instructor: { email: "jacks@gmail.com", password: "Jakir540@" },
    admin: { email: "mdjakirhossain7400@gmail.com", password: "123456" },
    student: { email: "jakia@gmail.com", password: "Jakir540@" },
  };

  // Handle role-based quick login
  const handleQuickLogin = (role) => {
    const { email, password } = predefinedUsers[role];
    setValue("email", email);
    setValue("password", password);

    // Automatically log in the user
    signIn(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${
            role.charAt(0).toUpperCase() + role.slice(1)
          } Login Successful`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password)
      .then(() => {
        navigate(from, { replace: true });
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/YDzNrD8/yoga3.jpg')",
      }}
    >
      <div className="flex justify-center items-center w-full h-full bg-black bg-opacity-20">
        <div className="w-full max-w-md p-8 bg-white bg-opacity-50 rounded-lg shadow-xl">
          <h2 className="text-center text-3xl font-semibold text-teal-600 mb-8">
            Please Login
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-control">
              <input
                type="email"
                name="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="form-control relative">
              <input
                type={show ? "text" : "password"}
                name="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                className="w-full p-4 bg-gray-100 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              />
              <AiFillEye
                onClick={handleShow}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-xl text-teal-400 cursor-pointer"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition duration-300"
              >
                Login
              </button>
            </div>
          </form>

          <div className="text-center mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Quick Login</h3>
            <div className="flex justify-center gap-4 mt-4">
              {Object.keys(predefinedUsers).map((role) => (
                <button
                  key={role}
                  onClick={() => handleQuickLogin(role)}
                  className={`py-2 px-4 bg-${
                    role === "instructor"
                      ? "blue-500"
                      : role === "admin"
                      ? "red-500"
                      : "green-500"
                  } text-white rounded-lg shadow-md hover:bg-opacity-80 transition duration-300`}
                >
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <p className="text-center mt-4 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-teal-600 hover:text-teal-700 font-medium"
            >
              Sign Up
            </Link>
          </p>

          <div className="mt-6 text-center">
            <SocialLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
