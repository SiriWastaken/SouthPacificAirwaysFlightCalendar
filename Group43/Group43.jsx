import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <img className="today" alt="Today" src="today.png" />
        <div className="text-wrapper">Upcoming Flights</div>
      </div>
    </div>
  );
};
