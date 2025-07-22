import React from "react";
import Title from './Title';
import ResetButton from './ResetButton';
import Tile from './Tile';
import WeaponModal from './WeaponModal';
import Announcement from './Announcement';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	//  const [gameBoard, setGameBoard] = useState([
    // ' ', ' ', ' ',
    // ' ', ' ', ' ',
    // ' ', ' ', ' ',
 	//  ]);
	return (
		<div className="text-center container">
            <div className= "menu d-flex flex-column">
				<div className="title">
					<Title/>
				</div>
				<div>
					<Announcement/>
					<WeaponModal/>
					<ResetButton/>
				</div>
			</div>
			{/* <div className="game-board">
        		{gameBoard.map((value, index) => (
        		  <Tile key={index} value={value} />
        		))}
    		</div> */}
		</div>
	);
};

export default Home;