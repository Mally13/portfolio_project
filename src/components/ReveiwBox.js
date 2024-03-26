import React from 'react'
import '../assets/styles/reviewbox.css'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import google from "../assets/images/google.png"
import trust from"../assets/images/trust.png"

function ReveiwBox() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='review-box'>
      <Slider {...settings}>
        <div className='review'>
          <img src={google} alt=""/>
        </div>
        <div className='review'>
          <img src={trust} alt=""/>
        </div>
      </Slider>
        
    </div>
  )
}

export default ReveiwBox