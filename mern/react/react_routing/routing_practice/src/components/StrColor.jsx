import React from "react";
import { useParams } from "react-router-dom";

const StrColor = () => {
  const { strColor, wColor, bgColor } = useParams();

  const textStyle = { color: wColor, backgroundColor: bgColor };
  return (
    <div>
      <p style={textStyle}>The word is: {strColor} </p>
    </div>
  );
};

export default StrColor;
