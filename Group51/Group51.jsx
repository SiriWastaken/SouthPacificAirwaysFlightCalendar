import React from "react";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="group">
        <img className="groups" alt="Groups" src="groups.png" />
        <img className="travel" alt="Travel" src="travel.png" />
        <div className="text-wrapper">SPA69</div>
        <div className="div">to Toronto</div>
        <div className="text-wrapper-2">Boing 737-800</div>
        <div className="text-wrapper-3">sticksgobyebye</div>
        <div className="text-wrapper-4">Mark Neris International Airport</div>
        <div className="text-wrapper-5">... at 69:69 PM</div>
        <img className="flight-takeoff" alt="Flight takeoff" src="flight-takeoff.png" />
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-6">Go to Flight</div>
          </div>
        </div>
      </div>
    </div>
  );
};
