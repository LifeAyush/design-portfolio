import React from "react";
import "./por.css";
import star2 from "../../Assets/Images/star2.svg";
import por1 from "../../Assets/Images/por1.png";
import por2 from "../../Assets/Images/por2.png";
import por3 from "../../Assets/Images/por3.png";

const Por = () => {
  const pors = [
    {
      id: 1,
      date: "Dec’22  -  Present",
      name: "Design Manager,Cognizance 2023",
      img: por1,
      desc: "Successfully organized the annual technical fest of IIT Roorkee with the participation of 10,000+ students.Led a team of 20+ designers to, design and ship the UX/UI of the official website, and guided them in delivering ,multiple graphic and UI design deliverables for branding of the fest.",
      link: "https://www.cognizance.org.in/team",
    },
    {
      id: 2,
      date: "Jun’22  -  Present",
      name: "Head Of Product and Design, Enactus IITR",
      img: por2,
      desc: "Working with a team of 45+ members motivated to work on projects targeting the UN Sustainable Development Goals Responsible for innovating and implementing business ideas from scratch. Enhancing the identity of products and Enactus IITR with design inputs.",
      link: "https://www.instagram.com/p/CgrzQhYsX4v/?hl=en",
    },
    {
      id: 3,
      date: "Apr’21  -  Present",
      name: "Product Designer,Design Studio IITR",
      img: por3,
      desc: "Design Studio is a group of 50+ self-taught designers in IIT Roorkee. Led and executed tasks and projects in graphic, motion, and UI/UX design. Did projects spanning different domains of design for institute entities.",
      link: "https://www.instagram.com/ds_iitr/",
    },
  ];
  return (
    <div className="por">
      <div className="por-title-flex">
        <div className="por-title">
          <span>campus </span>
          <span>activities</span>
        </div>
        <div className="por-subtitle">
          I love working in teams and have been doing so at my university
        </div>
      </div>
      <div className="por-work-flex">
        {pors.map((por) => {
          return (
            <div
              className="por-item"
              key={por.id}
              style={{ borderBottom: por.id === 3 ? "none" : "" }}
            >
              <img src={por.img} alt="DESIGN" className="por-item-img2" />
              <div className="por-item-date-flex">
                <img
                  src={star2}
                  alt="Design"
                  className="por-item-img non-draggable"
                />
                <div className="por-item-date">{por.date}</div>
              </div>
              <div className="por-item-text-flex">
                <div className="por-item-name-flex">
                  <a
                    href={por.link}
                    target="_blank"
                    rel="noreferrer"
                    className="por-item-name"
                  >
                    {por.name}
                  </a>
                  <p className="por-item-para">{por.desc}</p>
                </div>
                {/* <div className="por-item-link-flex">
                  <a href={por.link} className="por-item-link">
                    see portofolio
                  </a>
                  <img src={arrow} className="por-item-arrow non-draggable" alt="Design" />
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Por;
