import React from "react";
import "./about.css";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-container container">
        <div className="about-data">
          <h2>Choose Your Adventure!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            suscipit voluptates ataus molesti Laboriosam?
          </p>
        </div>
        <div className="about-box-data">
          <i className="icon-left">
            <box-icon name="chevron-left"></box-icon>
          </i>
          <div className="about-box">
            <div className="home-box1 boxi">
              <img src={box2} alt="" />
              <h3>Football</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
            <div className="home-box1 boxi">
              <img src={box3} alt="" />
              <h3>Basketball</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
            <div className="home-box1 boxi">
              <img src={box1} alt="" />
              <h3>Volleyball</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
            <div className="home-box1 boxi">
              <img src={box1} alt="" />
              <h3>Badminton</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
          </div>
          <i className="icon-right">
            <box-icon name="chevron-right"></box-icon>
          </i>
        </div>
      </div>
    </div>
  );
};

export default About;
