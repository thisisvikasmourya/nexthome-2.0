import React from "react";

function Button({
  children,
  className = "",
  type = "submit",
  bgColor,
  textColor,
}) {
  return (
    <>
      <div>
        <button
          className={`${className} px-10 py-3 bg-gray-500 text-white rounded-md ${bgColor} ${textColor}`}
          type={`${type}`}
        >
          {children}
        </button>
      </div>
    </>
  );
}

export default Button;
