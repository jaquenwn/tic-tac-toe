import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center container">
            <div className= "menu">
				<h1 className="text-center mt-5">Tic-Tac-Toe</h1>
				<Announcement/>
				<WeaponModal/>
				<ResetButton/>
			</div>
		</div>
	);
};

export default Home;