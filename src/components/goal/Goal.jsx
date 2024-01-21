import React from "react";
import "./goal.css";
import device from "../../assets/device.png";
import man from "../../assets/man.png";

const Goal = () => {
  return (
    <div className="goal" id="goal">
      <div className="goal-container container">
        <div className="goal-content">
          <div className="goal-data">
            <h2>Our Goal</h2>
            <p>
              The goal of SportOn is to create a dynamic and inclusive global
              platform that caters to athletes from different countries,
              fostering a sense of community and collaboration. The project aims
              to provide a comprehensive ecosystem where athletes can not only
              choose and participate in their favorite sports such as football,
              basketball, volleyball, and badminton but also organize and engage
              in sports events worldwide.
            </p>

            <p>
              SportOn's overarching objective is to enable athletes to track
              their personal growth and development within their chosen sports.
              The platform will facilitate seamless connections between
              like-minded individuals, encouraging the exchange of ideas,
              strategies, and experiences. By emphasizing inclusivity, SportOn
              seeks to break down geographical barriers, allowing athletes from
              diverse backgrounds to come together, compete, and collectively
              celebrate their passion for sports.
            </p>
            <p>
              Furthermore, the project aims to enhance the overall sporting
              experience by integrating features that promote fair play, healthy
              competition, and skill improvement. With an emphasis on
              user-friendly interfaces and robust tracking mechanisms, SportOn
              strives to be a go-to platform for athletes seeking not only a
              competitive edge but also a supportive and global community to
              share their athletic journey. Ultimately, SportOn aims to redefine
              the way athletes connect, compete, and thrive in their respective
              sports, creating a lasting impact on the world of sports
              networking and development.
            </p>
          </div>
          <div className="goal-img">
            <img src={device} alt="" />
          </div>
        </div>
        <div className="goal-man">
          <img src={man} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Goal;
