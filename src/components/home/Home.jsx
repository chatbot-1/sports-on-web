import React, { useEffect, useState } from "react";
import "./home.css";
import Header from "../header/Header";
import About from "../about/About";
import Goal from "../goal/Goal";
import Contact from "../contacts/Contact";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow";
import { getAuth } from "firebase/auth";
import Team from "../ourTeam/Team";

const Home = () => {
  const [userName, setUserName] = useState("");

  const auth = getAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <>
      <section className="home" id="home">
        <Header />
        <div className="home-container container">
          <div className="home-content">
            <div className="home-box">
              <div className="box1"></div>
              <div className="box2"></div>
            </div>
            <div className="home-data">
              <h1>{userName ? `Welcome ${userName}` : "Join Us Now!"}</h1>
              <p>
                SportOn unites athletes from diverse nations, fostering a global
                community to participate, organize, and compete in various
                sports events, providing a platform to track individual and
                collective athletic growth.
              </p>
              <Link to="/signup">
                <button className={userName ? "logout-hide" : "home-btn"}>
                  Join Now
                  <i class="fa-solid fa-chevron-right"></i>
                </button>
              </Link>
            </div>
            <div className="home-social">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>{" "}
            </div>
          </div>
        </div>
        <SlideShow />
      </section>
      <About />
      <Goal />
      <Team />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
