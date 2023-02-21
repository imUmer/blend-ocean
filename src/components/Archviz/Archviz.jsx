

import React from 'react';
import './Archviz.css' 
import fbx from "./3d2.jpg";
import blend from "../../assets/file-blend.svg";
import fbximg from "../../assets/file-fbx.svg";
import obj from "../../assets/file-obj.svg";
import pic3 from "./garden.svg"; 

export default function Archviz() {
  return (
    <div className='archvix'> 
        <div className='archvix-left'>
            <h1 className='archvix-head'>ARCHVIZ PROFESSIONALS</h1>
            <p className='archvix-text'>A solution specifically tailored for architectural visualization professionals, 
offering a comprehensive 3D library to meet the evolving demands of architects
and interior designers.</p>
            <h1 className='archvix-head'>100% FREE CC0</h1>
           
            <p className='archvix-text'>CC0 (Creative Commons Zero) is a type of public domain dedication that allows creators
to waive all rights to their work and place it in the public domain.</p>
            <p className='archvix-text'>This means that anyone can use, reproduce, modify, and distribute the work without
obtaining permission or paying royalties.</p>
            <p className='archvix-text'>You won't be asked to pay for it, nor will you need to go through a lengthy sign-up process.
Enjoy hassle-free access to what you need - no hidden costs, no registration needed.
Simply download what you need and start using it right away, without any worries.</p>
            <h1 className='archvix-head'>blender native files, .fbx & .obj</h1> 
            <div className="file-imgs">
              <img className='' src={blend} alt=""   />
              <img className='' src={fbximg} alt=""   />
              <img className='' src={obj} alt=""   />
            </div>
            </div>

        <div className='archvix-right'>
            <img className='' src={pic3} alt=""   />
        </div>
    </div>
  );
}
