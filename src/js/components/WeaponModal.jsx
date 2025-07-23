import React from "react";
import PlayerName from './PlayerName';
import WeaponButton from './WeaponButton';

const WeaponModal = () => {
	return (
		<div className="text-center container">
            <div className= "menu">
				<h3 className="text-center mt-5">Choose your icon</h3>
				<div className= "d-flex justify-content-center" >
					<PlayerName playerNum="1" />
        	        <PlayerName playerNum="2"/>
				</div>
                <div className= "d-flex justify-content-center buttongroup">
                <WeaponButton figura = "luna"/>
                <WeaponButton figura = "sol"/>
                </div>
			</div>
		</div>
	);
};

export default WeaponModal;