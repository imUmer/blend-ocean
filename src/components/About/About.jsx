

import React from 'react'; 
import { Button } from 'react-bootstrap';
import './About.css' 
import pic1 from "./3d2.jpg";

export default function About(props) {
  return (
    <>
    <div className='about-container'>
       <h1>About us! </h1>
       <p>Welcome to Blend Ocean, the ultimate open-source library of 3D models for Blender users.
          Our library is designed to provide Blender users with a vast collection of high-quality 3D models,
          textures, and HDRIs that can be used for a variety of purposes such as animation, game development,
          architectural visualization, augmented reality (AR) and more. We are constantly updating and expanding
          our library to ensure that it remains current and relevant, with new models being added monthly. Our library
          is compatible with the latest version of Blender.</p>
       </div>
   </>
  );
}
