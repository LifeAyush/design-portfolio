import React from "react";
import "./intro.css";
import prev1 from "../../Assets/Images/prev1.png";
import prev2 from "../../Assets/Images/prev2.png";
import prev3 from "../../Assets/Images/prev3.png";
import me from "../../Assets/Images/me.png";

const Intro = () => {
  return (
    <div className="intro" id="about">
      <div className="intro-main">
        <div className="intro-main-text">
          <div className="intro-main-text-flex">
            <div className="intro-main-text-flex-title">
              Hey there! 👋 <br />I am a self-taught Product Designer.
            </div>
            <div className="intro-main-text-flex-subtitle">
              And a final year student at IIT Roorkee.
            </div>
          </div>
          <div className="intro-main-tags">
            <div className="intro-main-tag">View Resume</div>
            <div className="intro-main-tag">Linkedin</div>
          </div>
        </div>
        <img src={me} className="intro-main-img non-draggable" alt="Rishabh Lodha" />
      </div>
      <div className="intro-prev">
        <div className="intro-prev-text">Previously Designed At</div>
        <div className="intro-prev-tags">
          <img src={prev1} alt="Design" className="intro-prev-tag non-draggable" />
          <img src={prev2} alt="Design" className="intro-prev-tag non-draggable" />
          <img src={prev3} alt="Design" className="intro-prev-tag non-draggable" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
