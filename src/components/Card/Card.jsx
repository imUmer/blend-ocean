

import React from 'react';  
import './Card.css' 
import picModel from "../../assets/3d-MODELS.jpg";
import picTexture from "../../assets/Textures2.jpg";
import picHdris from "../../assets/HDRIS.jpg";
import Compare from '../Compare/Compare';
export default function Card() {
  return (
    <div>
        
        <div className='card-container'>
            <div class="c-card">
                <div class="card-img"><img src={picModel} alt="" /></div>
                <div class="card-head"> 
                    <h1 className='card-heading-text'>Models</h1>
                    <button class="card-signup-btn">Browse</button>
                </div>
            </div>
            <div class="c-card">
                <div class="card-img"><img src={picTexture} alt="" /></div>
                    <div class="card-head"> 
                        <h1 className='card-heading-text'>Textures</h1>
                        <button class="card-signup-btn">Browse</button>
                    </div>
            </div>
            <div class="c-card">
                <div class="card-img">
                    <img src={picHdris} alt="" />
                </div>
                <div class="card-head"> 
                    <h1 className='card-heading-text'>HDRIs</h1>
                    <button class="card-signup-btn">Browse</button>
                </div>
            </div>
        </div>
        <div className='card-showcase'> 
            <div className='card-showcase-left'>
                <div className="card-showcase-center">
                
                    <h1 className='card-showcase-head'>HIGH QUALITY FULLY OPTIMISED 3D MODELS</h1>
                    <p className='card-showcase-text'>Fully optimized VR models can also reduce file size and memory usage,
                    allowing for faster loading and rendering times.</p>
                                    <p className='card-showcase-text'>The use of efficient geometry and texture compression techniques can
                    also help to reduce the CPU and GPU workload.</p>
                                    <p className='card-showcase-text'>Fully optimized game-ready models can also reduce file size and memory usage,
                    allowing for faster loading and rendering times.</p>
                                    <p className='card-showcase-text'>Fully optimized 3D models for architectural visualization (archviz) are designed to
                    provide high-quality and realistic images of buildings and other structures.</p>
                                    <p className='card-showcase-text'>Fully optimized AR models can also reduce file size and memory usage, allowing
                    for faster loading and rendering times, and providing smooth experience for
                    users.</p>
                </div>
            </div>
           
            <div className='card-showcase-right'>
             <Compare />
            </div>
        </div>
   </div>
  );
}
