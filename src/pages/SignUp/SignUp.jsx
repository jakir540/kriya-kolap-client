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
    <div className=" min-h-screen flex justify-center items-center">
      <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
          Please Signup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div className="form-control">
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Full Name"
              className="input input-bordered w-full rounded-md p-3 focus:ring-2 focus:ring-[#00a854]"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control">
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Email Address"
              className="input input-bordered w-full rounded-md p-3 focus:ring-2 focus:ring-[#00a854]"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <input
              type="password"
              name="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
              })}
              placeholder="Password"
              className="input input-bordered w-full rounded-md p-3 focus:ring-2 focus:ring-[#00a854]"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-yellow-600">
                Password should be at least 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-yellow-600">
                Password must contain an uppercase letter and a special
                character
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="form-control">
            <input
              type="password"
              name="confirmPassword"
              {...register("confirmPassword", { required: true })}
              placeholder="Confirm Password"
              className="input input-bordered w-full rounded-md p-3 focus:ring-2 focus:ring-[#00a854]"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                Please confirm your password
              </span>
            )}
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <input
              type="url"
              name="photoURL"
              accept="image/*"
              {...register("photoURL", { required: true })}
              placeholder="Photo URL"
              className="input input-bordered w-full rounded-md p-3 focus:ring-2 focus:ring-[#00a854]"
            />
            {errors.photoURL && (
              <span className="text-red-500 text-sm">
                Photo URL is required
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="btn bg-[#00a854] text-white font-semibold rounded-md w-full py-3 hover:bg-[#008f39] focus:ring-4 focus:ring-[#00a854]"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center mt-4">
          <small>
            Already have an account?{" "}
            <Link to="/login" className="text-[#00a854] hover:underline">
              Login here
            </Link>
          </small>
        </p>

        {/* Social Login Component */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default SignUp;
