import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container container">
        <div className="footer-logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer-socials">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
        <div className="privacy">
          <a href="">Privacy and Policy</a>
        </div>
        <div className="condition">
          <a href="">Terms and condition</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
