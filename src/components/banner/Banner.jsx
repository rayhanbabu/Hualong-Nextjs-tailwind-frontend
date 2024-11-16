"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import useFetch from '@/utils/useFetch';
import { base_img } from '@/app/api/image_url';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

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

  const { data, loading } = useFetch("/notice/80");

  return (
    <div className="relative">
      {loading ? (
        // Show skeleton loader while data is being fetched
        <div className="w-full h-[60vh] relative">
          <Skeleton height="100%" width="100%" />
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl lg:text-6xl font-bold max-w-md">
            <Skeleton count={1} width={300} />
          </div>
        </div>
      ) : (
        // Render Slider when data is available
        <Slider {...settings}>
          {data?.data.map((slide, index) => (
            <div key={index} className="w-full h-[30vh] sm:h-[60vh] relative">
              <img
                src={base_img + slide.image}
                alt="slide"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white text-4xl sm:text-5xl lg:text-6xl font-bold max-w-md">
                {slide.title}
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Banner;
