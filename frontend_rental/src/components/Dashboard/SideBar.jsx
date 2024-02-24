import React from "react";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <>
      <ul className=" flex flex-col text-lg font-semibold ">
        <Link to={"/dashboard/add-property"}>Add Property</Link>
        <Link to={"/dashboard/favourite"}>Favourites</Link>
        <Link to={"/dashboard/profile"}>Profile</Link>
        <Link to={"/dashboard/help"}>Help</Link>
      </ul>
    </>
  );
}

export default SideBar;
