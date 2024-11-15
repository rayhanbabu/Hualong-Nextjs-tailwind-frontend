"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slidesData = [
    {
      image: "https://images.unsplash.com/photo-1729002129878-0eac487f42b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Welcome to Our Platform",
    },
    {
      image: "https://images.unsplash.com/photo-1729002129878-0eac487f42b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Innovate with Us",
    },
    {
      image: "https://images.unsplash.com/photo-1729002129878-0eac487f42b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "Explore Endless Possibilities",
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index} className="w-full h-[80vh] relative">
            <img
              src={slide.image}
              alt="slide"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl lg:text-6xl font-bold max-w-md">
              {slide.text}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
