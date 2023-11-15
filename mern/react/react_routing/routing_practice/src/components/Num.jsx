import { useParams } from "react-router-dom";
import React from "react";

const Num = () => {
  const { num } = useParams();

  return (
    <div>
      <p>The number is: {num}</p>
    </div>
  );
};

export default Num;
