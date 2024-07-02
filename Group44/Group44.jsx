import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <img className="face" alt="Face" src="face.png" />
        <div className="text-wrapper">Your Account</div>
      </div>
    </div>
  );
};
