import React from "react";
import "./footer.css";
import foot from "../../Assets/Images/foot.png";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import mail from "../../Assets/Images/mail.png";
import arrow from "../../Assets/Images/arrow1light.svg";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-top">
        <img src={foot} className="footer-img non-draggable" alt="Design" />
        <div className="footer-top-con">
          <div className="footer-top-icons">
            <a href="google.com" className="footer-top-icon">
              <FaLinkedinIn />
            </a>
            <a href="google.com" className="footer-top-icon">
              <FaInstagram />
            </a>
            <a href="google.com" className="footer-top-icon">
              <FaBehance />
            </a>
            <a href="google.com" className="footer-top-icon">
              <FaTwitter />
            </a>
          </div>
          <div className="footer-top-mail-flex">
            <div className="footer-top-mail-subtext">Or drop me a mail at</div>
            <div className="footer-top-mail-text-flex">
              <img
                src={mail}
                alt="Design"
                className="footer-top-mail-img non-draggable"
              />
              <div className="footer-top-mail-text">
                rishabh5lodha1234@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <a href="google.com" className="footer-btn">
          View my Resume
        </a>
        <div className="footer-btm-text-flex">
          <div className="footer-btm-text">Back To Top</div>
          <div className="footer-arrow-img">
            <img
              src={arrow}
              alt="Design"
              className="footer-arrow non-draggable"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
