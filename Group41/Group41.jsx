import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="overlap-group">
          <img className="clear-day" alt="Clear day" src="clear-day.png" />
        </div>
        <img className="clear-night" alt="Clear night" src="clear-night.png" />
      </div>
    </div>
  );
};
