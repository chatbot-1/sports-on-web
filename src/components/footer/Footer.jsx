import React from "react";
import "./footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

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
        <div className="private">
          <Link to="/privacy-and-policy"><a href="">Privacy and Policy</a></Link>
        </div>
        <div className="condition">
          <Link to="/terms-and-conditions"><a href="">Terms and condition</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
