

import React from 'react'; 
import { Button } from 'react-bootstrap';
import './CaroCard.css' 
import pic1 from "./3d2.jpg";

export default function CaroCard(props) {
  return (
    <>
    <div className='container'>
        <div class="card">
            <div class="card-image"><img src={props.img} alt="" /></div>
               
        </div>
    </div>
   </>
  );
}
