import React from "react";

const NumberButton = (props) => {
  return (
    <button 
      name ='numberButton'
      className="number-button"
      type='button'
      value={props.number}
      onClick={e =>props.onClick(e.target)}
    >
      {props.number}
    </button>
  );
};

export default NumberButton
