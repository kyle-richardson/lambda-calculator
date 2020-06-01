import React from "react";

import NumberButton from "./NumberButton"

import {numbers} from "../../../data"


const Numbers = (props) => {
  const numArray = numbers;
  return (
    <div className="numbers-container">
      {numArray.map( ele => {
        return <NumberButton number = {ele} onClick={props.onClick}/>
      })}
    </div>
  );
};

export default Numbers