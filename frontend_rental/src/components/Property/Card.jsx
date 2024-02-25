import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <div>{title || "this is card Title"}</div>
        <div>{description || "this is Card description"}</div>
        <div>
          <img src="/bg.jpg" />
        </div>
      </div>
    </>
  );
};

export default Card;
