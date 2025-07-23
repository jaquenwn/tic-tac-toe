import React, { useState } from "react";


const Tile = () => {

   
 	

    return (
        <div className= "board d-flex flex-column justify-content-center my-3">
            <div className= "row 1 justify-content-center">
                <div className= "box col-3" onClick = {(e=>{toggle (e,0)})}></div>
                <div className= "box col-3" onClick = {(e=>{toggle (e,1)})}></div>
                <div className= "box col-3" onClick = {(e=>{toggle (e,2)})}></div>
            </div>
            <div className= "row 2 justify-content-center">
                <div className= "box col-3" onClick = {(e=>{toggle (e,3)})}></div>
                <div className= "box col-3" onClick = {(e=>{toggle (e,4)})}></div>
                <div className= "box col-3" onClick = {(e=>{toggle (e,5)})}></div>
            </div>
            <div className= "row 3 justify-content-center">
                <div className= "box col-3" onClick = {(e=>{toggle (e,6)})}></div>
                <div className= "box col-3" onClick = {(e=>{toggle (e,7)})}></div>
                <div className= "box col-3" onClick = {(e=>{toggle (e,8)})}></div>
            </div>
        </div>
    );
};

export default Tile;