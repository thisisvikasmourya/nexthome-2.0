import React from "react";
import SideBar from "./SideBar";
import CreateProperty from "./form/CreateProperty";

function DashBoard({children}) {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 py-10">
      {children}
      </div>
    </>
  );
}

export default DashBoard;
