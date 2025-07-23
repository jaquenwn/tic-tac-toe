import React from "react";

const PlayerName = (props) => {
    
    return (
        <div className="text-center">
            <input 
            className="rounded-pill mx-1 border-0" 
            type= "text"
            placeholder = {"✯ Player " + props.playerNum + " username ✯"}
            />
        </div>
    );
};

export default PlayerName;