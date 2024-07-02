import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <div className="div">
          <img className="img" alt="Today" src="today.png" />
          <div className="text-wrapper">Upcoming Flights</div>
        </div>
        <div className="group-2">
          <img className="img" alt="Face" src="face.png" />
          <div className="text-wrapper-2">Your Account</div>
        </div>
        <div className="group-3">
          <img className="img" alt="Folder shared" src="folder-shared.png" />
          <div className="text-wrapper-2">Host Panel</div>
        </div>
        <div className="group-4">
          <img className="img" alt="Groups" src="groups.png" />
          <div className="text-wrapper-2">Human Resources</div>
        </div>
      </div>
    </div>
  );
};
