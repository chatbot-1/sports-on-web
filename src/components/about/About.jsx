import React from "react";
import "./about.css";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

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
        <Swiper
          slidesPerView={3}
          spaceBetween={50}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="home-box1 boxi">
              <img src={box2} alt="" />
              <h3>Footbal</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-box1 boxi">
              <img src={box3} alt="" />
              <h3>Footbal</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-box1 boxi">
              <img src={box1} alt="" />
              <h3>Footbal</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-box1 boxi">
              <img src={box1} alt="" />
              <h3>Footbal</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-box1 boxi">
              <img src={box1} alt="" />
              <h3>Footbal</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="home-box1 boxi">
              <img src={box1} alt="" />
              <h3>Footbal</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                voluptatum odit obcaecati, aperiam totam dolorum.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
