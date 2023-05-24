import React from "react";
import "./hero.css";
import Nav from "../Navbar/Nav";
import star from "../../Assets/Images/star.png";
import arrow from "../../Assets/Images/arrow.svg";

const Hero = () => {
  return (
    <div className="hero">
      <Nav />
      <div className="hero-con">
        <div className="hero-banner">
          <div className="hero-banner-text-1">
            Welcome to my MVP - Minimum Viable Portfolio
          </div>
          <div className="hero-banner-text-main">Rishabh Lodha</div>
          <div className="hero-banner-text-flex">
            <span>Product Designer</span>
            <img src={star} alt="Design" className="hero-banner-img" />
            <span>IIT Roorkee’24</span>
          </div>
        </div>
        <div className="hero-tag">
          <div className="hero-tag-circle" />
          <div className="hero-tag-text">
            Actively looking for Product Design opportunities
          </div>
        </div>
      </div>
      <a href="#intro" className="hero-img">
        <img src={arrow} alt="Design" className="hero-arrow non-draggable" />
      </a>
    </div>
  );
};

export default Hero;
