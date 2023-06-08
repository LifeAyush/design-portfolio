import React, { useState } from "react";
import "./nav.css";
import { AiOutlinePlus } from "react-icons/ai";
import nav1 from "../../Assets/Images/nav1.png";
import nav2 from "../../Assets/Images/nav2.png";
import nav3 from "../../Assets/Images/nav3.png";

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className={nav ? "nav nav-fixed" : "nav"}>
      <span className={nav ? "nav-text-active nav-text-1" : "nav-text-1"}>
        RKL
      </span>
      <AiOutlinePlus
        className={nav ? "nav-img-active nav-img" : "nav-img"}
        onClick={() => setNav(!nav)}
      />
      <span className={nav ? "nav-text-active nav-text-2" : "nav-text-2"}>
        MUMBAI,INDIA
      </span>
      {nav ? (
        <div className="nav-dropdown">
          <div className="nav-dropdown-item">
            <img
              src={nav1}
              alt="Design"
              className="nav-dropdown-img non-draggable"
            />
            <a
              href="#projects"
              className="nav-dropdown-text"
              onClick={() => setNav(!nav)}
            >
              projects
            </a>
          </div>
          <div className="nav-dropdown-item">
            <img
              src={nav2}
              alt="Design"
              className="nav-dropdown-img non-draggable"
            />
            <a
              href="#contact"
              className="nav-dropdown-text"
              onClick={() => setNav(!nav)}
            >
              contact
            </a>
          </div>
          <div className="nav-dropdown-item" style={{ borderBottom: "none" }}>
            <img
              src={nav3}
              alt="Design"
              className="nav-dropdown-img non-draggable"
            />
            <a
              href="#about"
              className="nav-dropdown-text"
              onClick={() => setNav(!nav)}
            >
              about
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Nav;
