import React from "react";

const NumberButton = (props) => {
  return (
    <button 
      name ={props.number}
      className={props.number==="0" ? "number-button zero-button" : "number-button"}
      type='button'
      value={props.number}
      onClick={props.onClick}
    >
      {props.number}
    </button>
  );
};

export default NumberButton
