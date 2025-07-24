import React from "react";


const Announcement = ({ganador}) => {
    return (
        <div className="text-center visible">
            <h2>Game Over {ganador}</h2>
        </div>
    );
};

export default Announcement;