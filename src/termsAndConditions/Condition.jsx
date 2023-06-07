import React, { useEffect } from "react";
import "./condition.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"
import { Link, useLocation } from "react-router-dom";
import CommonHeader from "../components/commonHeader/commonHeader";

const Condition = () => {
  const navigate = useNavigate();

  const takeToHome = () => {
    navigate("/");
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <>
    <CommonHeader/>
      <div className="terms">
        <div className="terms-container container">
          <div className="terms-box">
            <div className="terms-title">
              <h2>Terms and Conditions</h2>
            </div>
            <div className="terms-content">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit provident obcaecati pariatur dicta fugit molestiae
                dolor fugiat. Consectetur cumque neque sit, dolor amet, maiores
                vel, eaque expedita quam modi nesciunt fugiat recusandae. Velit
                corrupti, neque reprehenderit tempore quis soluta autem sequi
                sunt provident architecto vel maxime atque sapiente doloremque
                nesciunt inventore in magni fugiat. Atque!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
                amet enim consequuntur perferendis earum sed provident, eos ex
                reprehenderit repudiandae doloribus nam dolorum!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda cupiditate, ipsum repellendus ut cum at doloribus.
                Beatae nemo est similique eius ipsum maxime dolor ex nostrum,
                sequi, pariatur officia fugit amet nihil cum. Reiciendis
                blanditiis iure ad? Quia fugit laudantium suscipit qui molestiae
                aliquid minus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Assumenda cupiditate, ipsum repellendus ut cum at doloribus.
                Beatae nemo est similique eius ipsum maxime dolor ex nostrum,
                sequi, pariatur officia fugit amet nihil cum. Reiciendis
                blanditiis iure ad? Quia fugit laudantium suscipit qui molestiae
                aliquid minus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                rem qui id aliquam harum? Repudiandae exercitationem fuga
                officia ex laudantium illum illo ea impedit beatae vel laborum
                itaque, corporis saepe, quas eveniet harum quia qui et omnis eum
                voluptatum odit. Ea maiores eos suscipit? Similique natus fugit
                vero quidem aliquid non dolor earum doloribus minus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti praesentium magnam numquam vel debitis tempora
                excepturi maxime officiis inventore aperiam facilis non eligendi
                rerum ipsam iste, aspernatur quis laudantium eaque, molestias,
                ex aliquid? Eveniet necessitatibus impedit obcaecati cumque sunt
                voluptatem dolore ipsa quaerat esse voluptates deleniti, eius
                quisquam saepe harum, et tenetur hic doloremque! Sequi, optio
                quasi? Fugiat ipsum voluptas nobis consequatur quo vero ea error
                eligendi! Quasi, voluptates soluta voluptatum sit ad repellat
                asperiores delectus. Illum et at nostrum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
                quia reiciendis tenetur nihil molestiae dicta eius cupiditate
                obcaecati nobis libero adipisci, eveniet harum non natus autem
                magnam officia, velit laborum neque aliquam consectetur fugiat.
                Nemo similique officiis, quas repellat, ipsam inventore quasi
                recusandae saepe suscipit obcaecati illum commodi delectus,
                deserunt at beatae eius sed quae rem fuga minus tempora dolorum?
                Veritatis consectetur deleniti eos minus distinctio at nihil
                odio delectus.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas cupiditate laudantium, voluptatum nostrum accusamus
                molestiae ipsa vero non dolore eum explicabo reiciendis ut!
              </p>
            </div>
            <div className="terms-button">
              <button className="terms-btn1">Decline</button>
              <button className="terms-btn2" onClick={takeToHome}>
                Accept
              </button>
            </div>
          </div>
          <Link to="/"><button className="terms-btn">Back to home page</button></Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Condition;
