import React from "react";
import "./work.css";
import work from "../../Assets/Images/work.png";
import arrow from "../../Assets/Images/arrow.svg";

const Work = () => {
  return (
    <div className="work" id="projects">
      <img src={work} alt="Design" className="work-img non-draggable" />
      <div className="work-next">Keep scrolling --</div>
      <div className="work-arrow-img">
        <img src={arrow} alt="Design" className="work-arrow non-draggable" />
      </div>
    </div>
  );
};

export default Work;
