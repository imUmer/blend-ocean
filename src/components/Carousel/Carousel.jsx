import React, { useState } from 'react';
import './Carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CaroCard from '../CaroCard/CaroCard';
import pic from '../../assets/1.jpg';
import pic2 from '../../assets/2.jpg';
import pic3 from '../../assets/3.jpg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
function CarouselComponent() {
  return (
    <div className="carousel">
      <div> <h2 className='carousel-head'>NEW ASSETS</h2></div>
     <Carousel responsive={responsive}>
        <div><CaroCard img={pic} /></div>
        <div><CaroCard img={pic2}/></div>
        <div><CaroCard img={pic3}/></div>
        <div><CaroCard img={pic2}/></div>
        <div><CaroCard img={pic2}/></div>
      </Carousel>
      <div className='carousel-bottom'> " Sign in today to get rid of Ads and start exploring the endless possibilities of 3D modeling with Blend Ocean open-source library. "</div>
  </div>
  );
  }

export default CarouselComponent;