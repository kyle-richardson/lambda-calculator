import React from "react";

import OperatorButton from "./OperatorButton"

import {operators} from "../../../data";

const Operators = (props) => {
  const operArray = operators;
  return (
    <div className="operators-container">
      {operArray.map( ele => {
        return <OperatorButton operator = {ele} onClick={props.onClick}/>
      })}
    </div>
  )
};

export default Operators
