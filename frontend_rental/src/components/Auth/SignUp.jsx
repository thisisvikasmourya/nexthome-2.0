import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { error },
  } = useForm();

  const onSubmit = async (data) => {
   try {
     const url = "http://localhost:8000/api/v1/users/register";
     const response = await axios.post(url, data);
     console.log("Signup successful:", response.data);
 
   } catch (error) {
          console.error("Signup failed:", error);

   }
   
  };
  return (
    <>
      <div>
        <div className="bg-white lg:w-1/4 sm-w-full rounded-lg shadow-xl align-middle	 px-6 py-6  mx-auto ">
          <p className="text-lg font-semibold">
            Welcome to <span className="text-teal-500">Rental</span>
          </p>
          <h1 className="text-2xl py-3 font-bold">Sign Up</h1>
          <form
            className="flex flex-col gap-3 rounded-lg"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Full Name"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
              {...register("fullname", { required: true })}
            />
            <input
              type="email"
              placeholder="Email"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
              {...register("email", { required: true })}
            />
            <input
              type="text"
              placeholder="Username"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
              {...register("username", { required: true })}
            />
            <input
              type="password"
              placeholder="Password"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
              {...register("password", { required: true })}
            />
            <input
              type="text"
              placeholder="type of User"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
              {...register("typeofuser", { required: true })}
            />
            <div className="flex justify-between">
              <button
                type="submit"
                className="lg:py-4 sm:py-2 w-1/3 rounded-lg bg-teal-500 shadow-lg border"
              >
                Sign Up
              </button>
              <p className="text-md text-teal-500 py-2">
                Already have a account? Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
