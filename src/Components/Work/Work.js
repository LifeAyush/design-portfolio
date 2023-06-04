import React from "react";
import "./work.css";
import work1 from "../../Assets/Images/work1.png";
import work2 from "../../Assets/Images/work2.png";
import work3 from "../../Assets/Images/work3.png";
import work4 from "../../Assets/Images/work4.png";
import work5 from "../../Assets/Images/work5.png";

const Work = () => {
  const projects = [
    {
      img: work1,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=cfa923fc776a44d89a9b563c43ace6a9&pm=c",
    },
    {
      img: work2,
      link: "https://drive.google.com/file/d/1zWo8dOZG-e2lysDV9yoF8RrGwpNdjXi8/view?usp=sharing",
    },
    {
      img: work3,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=884815a3afb64133ba9c38ec50c8b481&pm=c",
    },
    {
      img: work4,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=884815a3afb64133ba9c38ec50c8b481&pm=c",
    },
    {
      img: work5,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=884815a3afb64133ba9c38ec50c8b481&pm=c",
    },
  ];
  return (
    <div className="work" id="projects">
      <div className="work-flex">
        {projects.map((project, id) => {
          return (
            <a href={project.link} target="_blank" rel="noreferrer">
              <img
                src={project.img}
                alt="Design"
                className="work-img"
                key={id}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
