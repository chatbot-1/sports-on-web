import React, { useState } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [navActive, setNavActive] = useState("#home");

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo">
            <a href="#home">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="header-list">
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={() => setNavActive("#home")}
                  className={
                    navActive === "#home"
                      ? "head active-head"
                      : "head"
                  }
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about"
                  onClick={() => setNavActive("#about")}
                  className={
                    navActive === "#about"
                      ? "head active-head"
                      : "head"
                  }>
                  About
                </a>
              </li>
              <li>
                <a href="#goal"
                  onClick={() => setNavActive("#goal")}
                  className={
                    navActive === "#goal"
                      ? "head active-head"
                      : "head"
                  }>
                  Our Goal
                </a>
              </li>
              <li>
                <a href="#contact"
                  onClick={() => setNavActive("#contact")}
                  className={
                    navActive === "#contact"
                      ? "head active-head"
                      : "head"
                  }>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-right">
          <button className="header-btn">Join Now</button>
          <Link to="/login"><span className="header-login">{props.name ? `Welcome - ${props.name}` : "Login"}</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
