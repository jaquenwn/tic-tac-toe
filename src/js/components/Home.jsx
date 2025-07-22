import React from "react";
import ResetButton from './ResetButton';
import Tile from './Tile';
import WeaponModal from './WeaponModal';
import Announcement from './Announcement';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	constructor (){
		super();
		this.state = {
			gameBoard: [
				' ', ' ', ' ',
				' ', ' ', ' ',
				' ', ' ', ' ',
			]
		}
	} 
	return (
		<div className="text-center container">
            <div className= "menu">
				<h1 className="text-center mt-5">Tic-Tac-Toe</h1>
				<Announcement/>
				<WeaponModal/>
				<ResetButton/>
			</div>
			{this.state.gameBoard.map(function(value, i){
				<Tile/>
			})}
		</div>
	);
};

export default Home;