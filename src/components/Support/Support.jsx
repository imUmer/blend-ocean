

import React from 'react';  
import './Support.css' 
import pic1 from "./3d2.jpg";
import svgpic  from "./bg-hexa.svg";
import supportimg  from "../../assets/supportimg.svg";

export default function Support(props) {
  return (
    <>
    <div className='support-container'>
      {/* <img className='bg-img' src={svgpic} alt="Your SVG" /> */}
       <div className='support-icons'>
          <h1 >SUPPORTED BY</h1>
          <img src={supportimg} alt=""   />
          <img src={supportimg} alt=""   />
          <img src={supportimg} alt=""   />
       </div>
       <div className='support-patron'>
          <h1 >SUPPORTERS</h1>
          <p>Your contributions have made it possible for us to continue our work in a sustainable manner. With your support, we are able to expand our collection of assets and enhance the quality of what we offer.
Thank you for making a difference.</p>
          <button class="signup-btn">BECOME A PATRON</button>
       </div>
       <div className='support-names'>
          <h1 >Created With Love of Patrons</h1>
          <div className='support-patron-names'>
            <p>name of supporters</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores eos distinctio nulla veritatis. Esse nulla dolorum sit recusandae voluptatum!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et asperiores eos distinctio nulla veritatis. Esse nulla dolorum sit recusandae voluptatum!</p>
          </div>
          
       </div>
    </div>
   </>
  );
}
