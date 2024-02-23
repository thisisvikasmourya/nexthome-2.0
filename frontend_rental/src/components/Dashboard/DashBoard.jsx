import React from "react";
import SideBar from "./SideBar";
import CreateProperty from "./form/CreateProperty";

function DashBoard() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="flex justify-normal">
          <SideBar className="fixed" />
          <CreateProperty />
        </div>
      </div>
    </>
  );
}

export default DashBoard;
