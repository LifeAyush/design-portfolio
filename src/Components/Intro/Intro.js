import React from "react";
import "./intro.css";
import prev1 from "../../Assets/Images/prev1.png";
import prev2 from "../../Assets/Images/prev2.png";
import prev3 from "../../Assets/Images/prev3.png";
import me from "../../Assets/Images/me.png";

const Intro = () => {
  const Tags = [
    {
      img: prev1,
      link: "https://www.linkedin.com/company/triomics/?originalSubdomain=in",
    },
    {
      img: prev2,
      link: "https://www.tortoise.pro/",
    },
    {
      img: prev3,
      link: "http://ienergy.ai/",
    },
  ];
  return (
    <div className="intro" id="about">
      <div className="intro-flex">
        <div className="intro-main-text">
          <div className="intro-main-text-flex">
            <div className="intro-main-text-flex-title">
              Hey there! 👋 <br />
              I am a self-taught <br />
              Product Designer.
            </div>
            <div className="intro-main-text-flex-subtitle">
              And a final year student at IIT Roorkee.
            </div>
          </div>
          <div className="intro-main-tags">
            <a
              href="https://bit.ly/40cQT18"
              rel="noreferrer"
              target="_blank"
              className="intro-main-tag"
            >
              View Resume
            </a>
            <a
              href="http://www.linkedin.com/in/rishabh-lodha-b5739a1b9"
              rel="noreferrer"
              target="_blank"
              className="intro-main-tag"
            >
              Linkedin
            </a>
          </div>
        </div>
        <div className="intro-prev">
          <div className="intro-prev-text">Previously Designed At</div>
          <div className="intro-prev-tags">
            {Tags.map((tag, id) => {
              return (
                <a href={tag.link} target="_blank" rel="noreferrer" key={id}>
                  <img
                    src={tag.img}
                    alt="Design"
                    className="intro-prev-tag non-draggable"
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <img src={me} className="intro-imng non-draggable" alt="Rishabh Lodha" />
    </div>
  );
};

export default Intro;
