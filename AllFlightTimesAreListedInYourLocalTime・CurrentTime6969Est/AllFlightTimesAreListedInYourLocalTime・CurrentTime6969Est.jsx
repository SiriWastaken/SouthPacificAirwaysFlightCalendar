import React from "react";
import "./style.css";

export const Label = () => {
  return (
    <div className="label">
      <p className="all-flight-times-are">
        <span className="text-wrapper">All flight times are listed </span>
        <span className="span">in your local time</span>
        <span className="text-wrapper">.・ Current Time: </span>
        <span className="span">69:69 EST</span>
        <span className="text-wrapper">&nbsp;</span>
      </p>
    </div>
  );
};
