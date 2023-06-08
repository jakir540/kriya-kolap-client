import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const SignUp = () => {
  const { googleSignIn, createUser, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  //google signIn
  const handleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .then((error) => {
        setLoading(false);
        console.log(error);
        setError(error);
      });
  };

  const onSubmit = (data) => {
    const { email, password, name, photoURL } = data;
    console.log(email, password, name, photoURL);
    //create user using fireabse
    createUser(email, password)
      .then((result) => {
        console.log(result);
        updateProfile(name, photoURL);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your registration successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  return (
    <div className="w-1/2 mx-auto mt-16 bg-slate-100 p-16 shadow-2xl rounded-lg">
      <h2 className=" text-center text-3xl font-semibold"> Please Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control my-8">
          <input
            type="name"
            name="name"
            {...register("name", { required: true })}
            placeholder="name"
            className="input input-bordered"
          />
        </div>

        {errors.name && <span>name must be required</span>}

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

        <div className="form-control my-8">
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
              minLength: 6,

              pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
            })}
            placeholder="password"
            className="input input-bordered"
          />
        </div>
        {errors.password?.type === "minLength" && (
          <p className="text-yellow-600">Password should be 6 characters</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="text-yellow-600">
            Password should be one Uppercase and one special character
          </p>
        )}

        <div className="form-control my-8">
          <input
            type="password"
            name="password"
            {...register("confirm password", { required: true })}
            placeholder="confirm password"
            className="input input-bordered"
          />
        </div>

        <div className="form-control my-8">
          <input
            type="url"
            name="photoURL"
            accept="image/*"
            {...register("photoURL", { required: true })}
            placeholder="photoURL"
            className="input input-bordered"
          />
        </div>

        <div className="flex justify-center">
          {" "}
          <input
            className="btn btn-primary my-8 text-white"
            type="submit"
            value="Registration"
          />
        </div>
      </form>
      <p>
        <small>
          if you have an account please{" "}
          <Link to="/login">
            <span className="text-yellow-700">login</span>
          </Link>{" "}
          first
        </small>
      </p>

      <div className="flex justify-center text-3xl mt-5">
        <FaGoogle onClick={handleSignIn}></FaGoogle>
      </div>
    </div>
  );
};

export default SignUp;
