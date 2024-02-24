import React from "react";
import SideBar from "../SideBar";

function Profile() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 py-10">
        <div className="flex justify-between">
          <SideBar />
          <h1>Profile</h1>
        </div>
      </div>
    </>
  );
}

export default Profile;
