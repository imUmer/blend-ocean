

import React from 'react'; 
import { Button } from 'react-bootstrap';
import './Footer.css' 
import pic1 from "./3d2.jpg";

export default function Footer(props) {
  return (
    <>
    <div className='footer-container'>
    <nav className="footer-navbar">
      <div className="logo">Blend Ocean</div>
        <div className="nav-links">
          <a href="#">LICENSE</a>
          <a href="#">ASSETS</a>
          <a href="#">LEARN</a>
          <a href="#">BLOG</a>
          <a href="#">SUPPORT US!</a>
        </div>
        <div className="footer-social">
            <h3>Contact us</h3>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-youtube"></a>
        </div>
      

       </nav>
    </div>
   </>
  );
}
