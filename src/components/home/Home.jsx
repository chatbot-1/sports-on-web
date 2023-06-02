import React from "react";
import "./home.css";
import Header from "../header/Header";
import back from "../../assets/back.png";
import back1 from "../../assets/back1.jpg";
import back2 from "../../assets/back2.jpg";
import back3 from "../../assets/back3.jpg";
import back4 from "../../assets/back4.jpg";
import foot from "../../assets/foot.jpg"
import About from "../about/About";
import Goal from "../goal/Goal";
import Contact from "../contacts/Contact";
import Footer from "../footer/Footer";

const Home = () => {
  // var counter = 1;
  // setInterval(function () {
  //   document.getElementById("radio" + counter).checked = true;
  //   counter++;
  //   if (counter > 5) {
  //     counter = 1;
  //   }
  // }, 5000);

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
              <h1>Join Us Now!</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
                nesciunt aperiam velit est nemo! Odit iusto aut reperitatis?
              </p>
              <button className="home-btn">
                Join Now
                <i>
                  <box-icon name="chevron-right"></box-icon>
                </i>{" "}
              </button>
            </div>
            <div className="home-social">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>{" "}
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />
            <input type="radio" name="radio-btn" id="radio5" />

            {/* <div className="slide first">
              <img src={back} alt="" className="background" />
            </div> */}
            {/* <div className="slide">
              <img src={back1} alt="" className="background" />
            </div> */}
            {/* <div className="slide">
              <img src={back2} alt="" className="background" />
            </div> */}
            <div className="slide">
              <img src={foot} alt="" className="background" />
            </div>
            {/* <div className="slide">
              <img src={back4} alt="" className="background" />
            </div> */}

            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
              <div className="auto-btn5"></div>
            </div>
          </div>

          <div className="navigation-manual">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
            <label htmlFor="radio5" className="manual-btn"></label>
          </div>
        </div>
      </section>
      <About/>
      <Goal/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
