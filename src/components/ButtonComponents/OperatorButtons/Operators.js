import React from "react";

import OperatorButton from "./OperatorButton"

import {operators} from "../../../data";

const Operators = () => {
  const operArray = operators;
  return (
    <div className="operators-container">
      {operArray.map( ele => {
        return <OperatorButton operator = {ele} />
      })}
    </div>
  )
};

export default Operators
