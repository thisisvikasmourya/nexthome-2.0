import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <div>{title || "this is card Title"}</div>
        <div>{description || "this is Card description"}</div>
      </div>
    </>
  );
};

export default Card;
