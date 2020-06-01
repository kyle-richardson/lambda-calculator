import React from "react"

const History = (props) => {
    return (
        <div className="history"> 
            <div className="top-history">
                <p className="history-title">History</p>
                <button className="clear-history" onClick={e=> props.clearHistory()}>Clear</button>
            </div>
            <span>
                {props.history.map(ele => {
                    return <p>{ele}</p>;
                })}
                <br />
            </span>
            
        </div>
    )
    

}

export default History