import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const [navActive, setNavActive] = useState("#home");

  const [userName, setUserName] = useState("");

  const auth = getAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        alert("logged out succesfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="header">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="check-btn">
        <i class="fa-solid fa-bars"></i>
      </label>
      <div className="header-logo-hide">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>

      <div className="header-container">
        <div className="header-logo">
          <a href="#home">
            <img src={logo} alt="" />
          </a>
        </div>
        
          <div className="header-left">
            <div className="header-list">
              <ul>
                <Link to="/">
                <li>
                  <a
                    href="#home"
                    onClick={() => setNavActive("#home")}
                    className={
                      navActive === "#home" ? "head active-head" : "head"
                    }
                  >
                    Home
                  </a>
                </li>
                </Link>
                <li>
                  <a
                    href="#about"
                    onClick={() => setNavActive("#about")}
                    className={
                      navActive === "#about" ? "head active-head" : "head"
                    }
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#goal"
                    onClick={() => setNavActive("#goal")}
                    className={
                      navActive === "#goal" ? "head active-head" : "head"
                    }
                  >
                    Our Goal
                  </a>
                </li>
                <Link to="/our-team"><li>
                  <a
                    href="#team"
                    onClick={() => setNavActive("#goal")}
                    className={
                      navActive === "#teaml" ? "head active-head" : "head"
                    }
                  >
                    Our Team
                  </a>
                </li>
                </Link>
                <li>
                  <a
                    href="#contact"
                    onClick={() => setNavActive("#contact")}
                    className={
                      navActive === "#contact" ? "head active-head" : "head"
                    }
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-right">
            <Link to="/signup"><button className={userName ? "logout-hide" : "header-btn"}>Join Now</button></Link>
            <Link to="/login">
              <span className={userName ? "logout-hide" : "header-login"}>
                Login
              </span>
            </Link>
              <span className="header-login">
                {userName ? `Hi- ${userName}` : ""}
              </span>
            <button id="logout" className={userName ? "logout-btn" : "logout-hide"} onClick={logout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Header;
