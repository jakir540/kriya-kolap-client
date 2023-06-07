import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";

const Login = () => {
  const [show,setShow] = useState(false)
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleShow =()=>{
    setShow(!show)
  }

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
            type={show? "text":"password"}
            name="password"
            {...register("password", { required: true })}
            placeholder="password"
            className="input input-bordered"
          />
         <AiFillEye onClick={handleShow} className="absolute right-3 top-4 text-xl"></AiFillEye>
        </div>
        {errors.password && <span>Email must be required</span>}

       <div className="flex justify-center"> <input className="btn btn-primary my-8 text-white" type="submit" value="Submit" /></div>

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


      <div className="flex justify-center text-3xl mt-5">
      <FaGoogle></FaGoogle>
      </div>
    </div>
  );
};

export default Login;
