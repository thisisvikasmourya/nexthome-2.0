import React from "react";
import Input from "../Input";
import Button from "../Button";

function CreateProperty() {
  return (
    <>
      <div className="max-w-6xl  sm:px-6 lg:px-8">
        <h3 className="text-2xl font-semibold text-left">Add Property --</h3>
        <div className="">
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
    </>
  );
}

export default CreateProperty;
