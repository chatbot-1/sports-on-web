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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              molestias! Sapiente reprehenderit, facilis maiores optio sit ipsum
              voluptates et necessitatibus harum temporibus. Reprehenderit
              officia debitis quaerat consectetur quo cumque hic recusandae
              laudantium. Architecto, distinctio nostrum? Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Earum dolores, minima, atque
              quaerat magni sequi deleniti laudantium illo doloremque quos
              commodi. Praesentium, tempore sint minus doloribus in sapiente
              ipsam quasi? maiores? Eius voluptatem vitae et, provident iure
              beatae odit impedit incidunt? Odio, ipsum dolores?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
              molestias! Sapiente reprehenderit, facilis maiores optio sit ipsum
              voluptates et necessitatibus harum temporibus. Reprehenderit
              officia debitis quaerat consectetur quo cumque hic recusandae
              laudantium. Architecto, distinctio nostrum? Lorem ipsum dolor sit
              amet Praesentium, tempore sint minus doloribus in sapiente ipsam
              quasi? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus sunt architecto excepturi sapiente libero. Dolor,
              architecto maiores? Eius voluptatem vitae et, provident iure
              beatae odit impedit incidunt? Odio, ipsum dolores?
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
