import React, { useCallback } from "react";

import pic2 from "./one.jpg";
import pic3 from "./3d3.jpg"; 

import {
    ReactCompareSlider,
    ReactCompareSliderHandle,
    ReactCompareSliderImage
  } from "react-compare-slider";
  
const CustomHandle = ({ style, ...props }) => {
    const handlePositionChange = useCallback(
      (position) => console.log("[Portrait]", position),
      []
    );
  
    return (
      <ReactCompareSlider
        {...props}
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              backdropFilter: undefined,
              background: "white",
              border: 0,
              color: "#333"
            }}
          />
        }
        itemOne={
          <ReactCompareSliderImage
            src={pic2}
            style={{ filter: "grayscale(1)" }}
            alt="one"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={pic3}
            alt="two"
          />
        }
        onPositionChange={handlePositionChange}
        style={{
          display: "flex",
          width: "100%",
          height: "60vh",
          borderRadius:"20px",
          ...style
        }}
      />
    );
  };


  export default CustomHandle;