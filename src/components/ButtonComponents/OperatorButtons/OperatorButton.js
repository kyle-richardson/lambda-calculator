import React from "react";

const OperatorButton = (props) => {
  return (
    <button 
      name="operatorButton"
      className="operator-button"
      value={props.operator.value}
      onClick={e => props.onClick(e.target)}
    >
      {props.operator.char}
    </button>
  );
};

export default OperatorButton