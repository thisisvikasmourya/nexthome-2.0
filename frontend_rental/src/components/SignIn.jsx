import React from "react";

const SignIn = () => {
  return (
    <>
      <div>
        <div className="bg-white lg:w-1/4 sm-w-full rounded-lg shadow-xl align-middle	 px-6 py-6 float-center mx-auto ">
          <p className="text-lg font-semibold">
            Welcome to <span className="text-teal-500">Rental</span>
          </p>
          <h1 className="text-2xl py-3 font-bold">Sign Up</h1>
          <div className="flex flex-col gap-3 rounded-lg">
            <input
              type="email"
              placeholder="Email"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
            />
            <input
              type="text"
              placeholder="Password"
              className="py-4 px-3 rounded-md text-md border-teal-500 border border-1"
            />
            <div className="flex justify-between">
              <button className="lg:py-4 sm:py-2 w-1/3 rounded-lg bg-teal-500 shadow-lg border">
                Sign In
              </button>
              <p className="text-md text-teal-500 py-2">
                Don't have a account? Sign Up
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
