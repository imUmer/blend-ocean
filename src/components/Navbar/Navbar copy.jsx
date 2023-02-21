import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Blend Ocean</div>
     
      <div class="center-container">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search"></i>
          <i class="fa-search" aria-hidden="true"></i>

        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </div>
      
      <button class="signup-btn">Sign Up</button>

      {/* <div className="signup-btn">Sign Up</div> */}
    </nav>
  );
}

export default Navbar;
