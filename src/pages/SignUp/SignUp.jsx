/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/login";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateProfile(name, photoURL);
        const savedUser = { name, email, role: "student" };

        fetch("https://kriya-kolap-sever-jakir540.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your registration was successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
            }
          });
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/8K32cHW/yoga.jpg')",
      }}
    >
      <div className="w-full md:w-1/2 bg-white bg-opacity-40 p-10 rounded-xl shadow-2xl transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
        <h2 className="text-center text-4xl font-bold text-teal-600 mb-8">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="form-control">
            <input
              type="text"
              name="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Full Name"
              className="input input-bordered w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control">
            <input
              type="email"
              name="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email Address"
              className="input input-bordered w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password should be at least 6 characters",
                },
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                  message:
                    "Password must contain an uppercase letter and a special character",
                },
              })}
              placeholder="Password"
              className="input input-bordered w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="form-control">
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "Please confirm your password",
              })}
              placeholder="Confirm Password"
              className="input input-bordered w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <input
              type="url"
              name="photoURL"
              accept="image/*"
              {...register("photoURL", { required: "Photo URL is required" })}
              placeholder="Photo URL"
              className="input input-bordered w-full p-4 bg-gray-100 rounded-lg shadow-sm focus:ring-2 focus:ring-teal-500"
            />
            {errors.photoURL && (
              <span className="text-red-500 text-sm">
                {errors.photoURL.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-xl mt-4 text-gray-600">
          <small>
            Already have an account?{" "}
            <Link to="/login" className="text-teal-600 hover:underline">
              Login here
            </Link>
          </small>
        </p>

        {/* Social Login Component */}
        <div className="mt-2">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
