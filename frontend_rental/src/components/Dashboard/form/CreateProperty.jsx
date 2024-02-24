import React from "react";
import Input from "../Input";
import Button from "../Button";
import SideBar from "../SideBar";

function CreateProperty() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 py-10">
        <div className="flex justify-between">
          <SideBar />
          <div className="">
            <h3 className="text-2xl font-semibold text-left">
              Add Property --
            </h3>
            <Input
              label={"Property Name"}
              className={`text-xl w-full`}
              placeholder={"Enter The Property Name"}
            />
            <Input
              label={"Description"}
              className={`text-xl w-full`}
              placeholder={"Enter The Property Name"}
            />
            <Input
              label={"Address "}
              className={`text-xl w-full`}
              placeholder={"Enter The Property Name"}
            />
            <Input
              label={"Property Type"}
              className={`text-xl w-full`}
              placeholder={"Enter The Property Name"}
            />
            <Input
              label={"Rental Type"}
              className={`text-xl w-full`}
              placeholder={"Enter The Property Name"}
            />
            <Input
              type="file"
              label={"Upload Images or Video"}
              className={`text-xl w-full`}
              placeholder={"Enter The Property Name"}
            />
            <Button
              type="submit"
              children={"Submit"}
              className=""
              textColor={"white"}
              bgColor={"bg-[#986f3b]"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProperty;
