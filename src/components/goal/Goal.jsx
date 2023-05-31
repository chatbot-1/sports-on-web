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
              At SportOn, our mission is to empower sports enthusiasts like you
              to connect, organize, and play together. We understand the passion
              you have for sports and the joy that comes from sharing those
              experiences with others. That's why we've created a platform that
              makes it easier than ever to coordinate and participate in sports
              matches, bringing your favorite activities to life.
            </p>
            <p>
              With SportOn, you have the power to take control of your sporting
              journey. Whether you're looking to join an existing session,
              create a new one, or simply find like-minded individuals to engage
              in a friendly match, our app is here to support you every step of
              the way.
            </p>
            <p>
              Furthermore, we're committed to ensuring a safe and inclusive
              environment for everyone. We prioritize user privacy and provide
              moderation tools to maintain a respectful and enjoyable
              atmosphere. Our goal is to foster a supportive community where
              people of all backgrounds and skill levels feel welcome,
              motivated, and inspired to push their sporting boundaries.
            </p>
            <p>
              Join us on this exciting journey as we revolutionize the way
              sports matches are organized and experienced. With SportOn, you
              have the ultimate tool to unleash your passion for sports, forge
              unforgettable memories, and create a vibrant community of sports
              enthusiasts. Let's come together, play together, and elevate the
              way we enjoy sports!
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
