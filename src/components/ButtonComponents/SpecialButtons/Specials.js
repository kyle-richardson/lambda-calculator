import React from "react";

import SpecialButton from "./SpecialButton"

import {specials} from "../../../data";

const Specials = (props) => {
  const specialArray = specials;
  return (
    <div className="specials-container">
      {specialArray.map( ele => {
        return <SpecialButton char={ele} onClick={props.onClick}/>
      })}
    </div>
  )
};

export default Specials