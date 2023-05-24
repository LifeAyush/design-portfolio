import React from "react";
import "./sideProjects.css";
import arrow2 from "../../Assets/Images/arrow2.svg";
import side1 from "../../Assets/Images/side1.png";
import side2 from "../../Assets/Images/side2.png";
import side3 from "../../Assets/Images/side3.png";

const SideProjects = () => {
  const links = [
    {
      text: "UI Designs",
      url: "https://www.notion.so/885ee43ff97643e09f88b20246a18c1d?v=bf75e31e865f4e6186243e3091b5f17d",
    },
    {
      text: "Graphic Design",
      url: "https://drive.google.com/drive/u/0/folders/1GUa4y5rmczvjGxrV1vUoaOzCrfdISno-",
    },
    {
      text: "Photoshop works",
      url: "https://drive.google.com/drive/u/0/folders/16apqgV6lBrwu9jogE5Q3pH0mQREuoL6Q",
    },
    {
      text: "Motion Design",
      url: "https://drive.google.com/drive/u/0/folders/1yCW1vMu8mm3ql-mOY6RvMkvgOkvU02V1",
    },
  ];
  return (
    <div className="sp">
      <div className="sp-text">
        <div className="sp-title">
          See more of <br />
          my works here
        </div>
        <div className="sp-tags">
          {links.map((link, id) => {
            return (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="sp-tag-flex"
                key={id}
              >
                <span>{link.text}</span>
                <img src={arrow2} alt="Design" className="non-draggable" />
              </a>
            );
          })}
        </div>
      </div>
      <div className="sp-images">
        <img
          src={side1}
          alt="Design"
          className="sp-image-small non-draggable"
        />
        <img src={side2} alt="Design" className="sp-image-big non-draggable" />
        <img
          src={side3}
          alt="Design"
          className="sp-image-small non-draggable"
        />
      </div>
    </div>
  );
};

export default SideProjects;
