// // import React, { useState } from 'react';
import './Hero.css'

// function Hero() {
//   // const [currentImage, setCurrentImage] = useState(0);
//   // const images = [
//   //   'https://picsum.photos/id/1/1200/600',
//   //   'https://picsum.photos/id/2/1200/600',
//   //   'https://picsum.photos/id/3/1200/600',
//   //   'https://picsum.photos/id/4/1200/600'
//   // ];

//   // const handleLeftArrowClick = () => {
//   //   if (currentImage === 0) {
//   //     setCurrentImage(images.length - 1);
//   //   } else {
//   //     setCurrentImage(currentImage - 1);
//   //   }
//   // };

//   // const handleRightArrowClick = () => {
//   //   if (currentImage === images.length - 1) {
//   //     setCurrentImage(0);
//   //   } else {
//   //     setCurrentImage(currentImage + 1);
//   //   }
//   // };

//   return (
//     <div class="hero">
//     {/* <div class="slider">
//       <img src="./../../assets/3d1.jpg" />
//       <img src="./../../assets/3d2.jpg" />
//       <img src="./../../assets/3d3.jpg" />
//     </div>
//     <div class="left-arrow">
//       <i class="fas fa-arrow-left"></i>
//     </div>
//     <div class="right-arrow">
//       <i class="fas fa-arrow-right"></i>
//     </div> */}
//   </div>
  
//   );
// }

// export default Hero;


// import React from 'react'; 

// function Hero() {
//   return (
//     <div className="hero">
//       <div className="hero__content">
//         <h1 className="hero__title">My Website</h1>
//         <p className="hero__subtitle">
//           A modern and responsive website built with React, HTML5, CSS, and JavaScript
//         </p>
//         <button className="hero__button">Learn More</button>
//       </div>
//     </div>
//   );
// }

// export default Hero;
import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '../../assets/white_and_black__top_mou.jpg';
import backgroundImage2 from './one.jpg';
import backgroundImage3 from './one.jpg';
import logo from '../../assets/BO-LOGO-only-with-no-MIDDLE.png';
import logoname from '../../assets/BO-TEXT-LOGO-LARGE.png';
function Hero() {
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="hero">
      <Slider {...settings}>
        <div className="hero__slide hero_1" >
          <div className="hero__content">
            <img className='logo-img' src={logo} alt="" srcset="" />
            <img className='logo-img-name' width={20} src={logoname} alt="" srcset="" />
          </div>
        </div>
        <div className="hero__slide hero_2" >
          <div className="hero__content">
            <h1 className="hero__title">My Website</h1>
            <p className="hero__subtitle">
              A modern and responsive website built with React, HTML5, CSS, and JavaScript
            </p>
            <button className="hero__button">Learn More</button>
          </div>
        </div>
        <div className="hero__slide hero_3" >
          <div className="hero__content">
            <h1 className="hero__title">My Website</h1>
            <p className="hero__subtitle">
              A modern and responsive website built with React, HTML5, CSS, and JavaScript
            </p>
            <button className="hero__button">Learn More</button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
