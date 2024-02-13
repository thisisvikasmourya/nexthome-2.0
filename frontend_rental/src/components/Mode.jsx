import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Mode = () => {
  const [mode, setMode] = useState(true);
  const handleToggle = (e) => {
    setMode(!mode);
  };
  return (
    <div>
      <h1>Hello Mode </h1>
      <div className=" text-center py-4 px-5">
        <label
          htmlFor="toggle-switch"
          className="inline-flex items-center w-full cursor-pointer"
        >
          <input
            type="checkbox"
            id="toggle-switch"
            checked={mode}
            onChange={handleToggle}
          />
          <span className="relative w-full h-6 rounded-full bg-gray-200 peer dark:bg-gray-700">
            <span className="absolute left-1/2 transform -translate-x-1/2 opacity-0 peer-checked:opacity-100">
              Login
            </span>
            <span className="absolute right-1/2 transform translate-x-1/2 opacity-100 peer-checked:opacity-0">
              Sign Up
            </span>
          </span>
        </label>

        {mode ? <SignIn /> : <SignUp />}
      </div>
      {mode}
    </div>
  );
};

export default Mode;
