import React from "react";

const SpecialButton = (props) => {
  return (
    <button 
      className="special-button"
      name="specialButton"
      value={props.char}
      onClick={e => props.onClick(e.target)}
    >
      {props.char} 
    </button>
  );
};

export default SpecialButton
