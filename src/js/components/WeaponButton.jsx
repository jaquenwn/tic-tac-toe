import React from "react";

const WeaponButton = (props) => {
     const figuraClasses = {
        luna: "fa-solid fa-moon",
        sol: "fa-solid fa-sun",
    }
    return (
        <div className="text-center">
            <input 
            type="radio" 
            className="btn-check" 
            name="btnradio"
            id= {props.figura} 
            autocomplete="off"
            />
            <label 
            for = {props.figura}
            className=" btn btn-outline-primary display-1 rounded-circle my-2 mx-2"
            >
                <i className={figuraClasses[props.figura]}></i>
            </label>
        </div>
    );
};

export default WeaponButton;