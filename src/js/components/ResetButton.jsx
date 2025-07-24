import React from "react";

const ResetButton = ({onReset}) => {
    return (
        <div className="text-center ">
            <button className= "rounded-pill border-0 p-2" onClick= {onReset}>Reset</button>
        </div>
    );
};

export default ResetButton;