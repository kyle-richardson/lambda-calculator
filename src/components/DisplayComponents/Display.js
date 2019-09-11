import React from "react";

import App from '../../App'

const Display = (props) => {
  return (
    <div className="display">
      <input 
        name="display"
        type='text' 
        value={props.display}
        placeholder='Display Here' 
        style={{textAlign: 'right'}}
      />
    </div>
  )
  
};

export default Display