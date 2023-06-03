import React from "react";
import "./work.css";
import work from "../../Assets/Images/work.png";
import arrow from "../../Assets/Images/arrow.svg";
import Card from "../Card/Card";
import work3 from "../../Assets/Images/work3.png";

const Work = () => {
  const projects = [
    {
      img: work3,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=884815a3afb64133ba9c38ec50c8b481&pm=c",
      tags: ["Branding", "UI/UX"],
      color: "#FFFFFF",
    },
    {
      img: work3,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=884815a3afb64133ba9c38ec50c8b481&pm=c",
      tags: ["Branding", "UI/UX"],
      color: "#FFFFFF",
    },
    {
      img: work3,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=884815a3afb64133ba9c38ec50c8b481&pm=c",
      tags: ["Branding", "UI/UX"],
      color: "#FFFFFF",
    },
    {
      img: work3,
      link: "https://www.notion.so/Rishabh-Keshulal-Lodha-dba82db065534191b44ea1391770056e?p=884815a3afb64133ba9c38ec50c8b481&pm=c",
      tags: ["Branding", "UI/UX"],
      color: "#FFFFFF",
    },
  ];
  return (
    <div className="work" id="projects">
      {/* <div className="work-flex">
        {projects.map((project, id) => {
          return <Card key={id} data={project} />;
        })}
      </div> */}
      {/* <img src={work} alt="Design" className="work-img non-draggable" />
      <div className="work-next">Keep scrolling --</div> */}
      <div className="work-arrow-img">
        <img src={arrow} alt="Design" className="work-arrow non-draggable" />
      </div>
    </div>
  );
};

export default Work;
