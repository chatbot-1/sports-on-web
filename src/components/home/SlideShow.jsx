import React from 'react'
// import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'
import { Fade, Zoom } from 'react-slideshow-image'
import front1 from "../../assets/front1.png";
import front2 from "../../assets/front2.png";
import front3 from "../../assets/front3.png";
import front4 from "../../assets/front4.png";
import "./slideshow.css"

const slideImages = [
    {
      url: front1,
    },
    {
      url: front2,
    },
    {
      url: front3,
    },
    {
      url: front4,
    },
  ];

const divSlide = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const SlideShow = () => {
  return (
    <div className='slide-container'>
        <Fade>
            {
                slideImages.map((image, index) => (
                    <div key={index}>
                        <div style={{...divSlide, backgroundImage:`url(${image.url})`}}>
                        </div>
                    </div>
                ))
            }
        </Fade>
    </div>
  )
}

export default SlideShow