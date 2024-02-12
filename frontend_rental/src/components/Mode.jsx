import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Mode = () => {
  const [mode, setMode] = useState(<SignIn />);
  const handleMode = () => {
    setMode(<SignUp />);
  };
  return (
    <div>
      <h1>Hello Mode </h1>
      {mode}
      <button onClick={handleMode}> Change</button>
    </div>
  );
};

export default Mode;
