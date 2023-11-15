import React from "react";
import { useParams } from "react-router-dom";

const NewStr = () => {
  const { newStr } = useParams();
  return (
    <div>
      <p>The word is: {newStr}</p>
    </div>
  );
};

export default NewStr;
