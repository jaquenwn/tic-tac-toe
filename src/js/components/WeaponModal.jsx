import React from "react";
import PlayerName from './PlayerName';
import WeaponButton from './WeaponButton';

const WeaponModal = () => {
	return (
		<div className="text-center container">
            <div className= "menu">
				<h3 className="text-center mt-5">CHOOSE YOUR WEAPON</h3>
				<PlayerName/>
                <PlayerName/>
                <div className= "buttongroup">
                <WeaponButton/>
                <WeaponButton/>
                </div>
			</div>
		</div>
	);
};

export default WeaponModal;