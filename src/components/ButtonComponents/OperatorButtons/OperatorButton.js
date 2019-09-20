import React from "react";

const OperatorButton = (props) => {
  return (
    <button 
      name={props.operator.char}
      className={props.operator.char==="=" ? "operator-button equals-button" : "operator-button"}
      value={props.operator.value}
      onClick={props.onClick}
    >
      {props.operator.char}
    </button>
  );
};

export default OperatorButton