import React from "react";


const Display = (props) => {
  return (
    <div className="display">
      <input 
        name="display"
        type='text' 
        value={props.display}
        placeholder='0'
        style={{textAlign: 'right'}}
      />
    </div>
  )
  
};

export default Display