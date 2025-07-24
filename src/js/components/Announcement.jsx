import React from "react";


const Announcement = ({ganador}) => {
    return (
        <div className="text-center visible">
            <h1>{ganador}</h1>
            <h2>Game Over </h2>
        </div>
    );
};

export default Announcement;