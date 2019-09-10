import React from "react";

import SpecialButton from "./SpecialButton"

import {specials} from "../../../data";

const Specials = () => {
  const specialArray = specials;
  return (
    <div className="specials-container">
      {specialArray.map( ele => {
        return <SpecialButton char = {ele} />
      })}
    </div>
  )
};

export default Specials