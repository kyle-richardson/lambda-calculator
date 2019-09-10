import React from "react";

import NumberButton from "./NumberButton"

import {numbers} from "../../../data"


const Numbers = () => {
  const numArray = numbers;
  return (
    <div className="numbers-container">
      {numArray.map( ele => {
        return <NumberButton number = {ele} />
      })}
    </div>
  );
};

export default Numbers