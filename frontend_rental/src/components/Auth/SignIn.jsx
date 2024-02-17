import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  // const navigate = useNavigate();

  const login = async (data) => {
    try {
      const url = "http://localhost:8000/api/v1/users/login";
      const response = await axios.post(url, data);
      console.log("SignIn Successfull", response.data);
      // navigate("/dashboard");
    } catch (error) {
      console.error("SignIn failed:", error);
    }
  };

  return (
    <>
      <div>
        <div className="bg-white lg:w-1/4 sm-w-full rounded-lg shadow-xl align-middle	 px-6 py-6 float-center mx-auto ">
          <p className="text-lg font-semibold">
            Welcome to <span className="text-teal-500">Rental</span>
          </p>
          <h1 className="text-2xl py-3 font-bold">Sign Up</h1>
          <form
            className="flex flex-col gap-3 rounded-lg"
            onSubmit={handleSubmit(login)}
          >
            <input
              type="email"
              placeholder="Email"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="Password"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
              {...register("password", { required: true })}
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="lg:py-4 sm:py-2 w-1/3 rounded-lg bg-teal-500 shadow-lg border"
              >
                Sign In
              </button>
              <p className="text-md text-teal-500 py-2">
                Don't have a account? Sign Up
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
