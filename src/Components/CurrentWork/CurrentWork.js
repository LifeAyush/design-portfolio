import React from "react";
import "./currWork.css";
import actWork from "../../Assets/Images/actWork.png";
import wor1 from "../../Assets/Images/wor1.png";
import arr3 from "../../Assets/Images/arr3.png";

const CurrentWork = () => {
  return (
    <div className="curwork">
      <img src={actWork} alt="Design" className="curwork-img" />
      <div className="curwork-text">
        <h1 className="curwork-title">Currently working on:</h1>
        <div className="curwork-line">
          <p className="currwork-para">
            UI/UX Freelance project for a completely
          </p>
          <div className="cur-flex">
            <p className="currwork-para">new product ‘NetZero’ under</p>
            <img src={wor1} className="curwork-img2" alt="Design" />
          </div>
        </div>
      </div>
      <a href="#exWork" className="curwork-line2">
        <span className="curwork-line2-span">More Works</span>
        <div className="wimg">
          <img src={arr3} alt="Design" className="hero-arr non-draggable" />
        </div>
      </a>
    </div>
  );
};

export default CurrentWork;
