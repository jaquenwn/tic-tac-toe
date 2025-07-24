import React,  { useState, useRef }  from "react";
import Title from './Title';
import ResetButton from './ResetButton';

import WeaponModal from './WeaponModal';
import Announcement from './Announcement';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
 const imgSol = "https://cdn-icons-png.flaticon.com/512/831/831682.png";
 const imgLuna = "https://cdn.iconscout.com/icon/free/png-256/free-moon-icon-download-in-svg-png-gif-file-formats--and-stars-nature-pack-icons-1798529.png?f=webp";

//create your first component
const Home = () => {
	const initialBoard = Array(9).fill(null);
	const [board, setBoard] = useState(initialBoard);
	const [turn, setTurn] = useState("sun"); // "sol" o "luna"
 	const [lock, setLock] = useState(false);
	const winnerRef = useRef (null);

	const handleClick = (index) => {
 		if (lock || board[index] !== null) return;
 
 		const newBoard = [...board];
 		newBoard[index] = turn;
 		setBoard(newBoard);
 		setTurn(turn === "sun" ? "moon" : "sun");
		result (newBoard)
 	};
	const resetGame = () => {
	setBoard(Array(9).fill(null));
	setTurn("sun");
	setLock(false);
	setWinner(null); 
	};


	 const result = (currentBoard) => {
 		if (currentBoard[0] === currentBoard[1] && currentBoard[1] === currentBoard[2] && currentBoard[1] !== null) {
 			win(currentBoard[0]);
		} else if (currentBoard[3] === currentBoard[4] && currentBoard[4] === currentBoard[5] && currentBoard[5] !== null) {
 			win(currentBoard[3]);
		} else if (currentBoard[6] === currentBoard[7] && currentBoard[7] === currentBoard[8] && currentBoard[8] !== null) {
			win(currentBoard[6]);
		} else if (currentBoard[0] === currentBoard[3] && currentBoard[3] === currentBoard[6] && currentBoard[6] !== null) {
 			win(currentBoard[0]);
 		} else if (currentBoard[1] === currentBoard[4] && currentBoard[4] === currentBoard[7] && currentBoard[7] !== null) {
			win(currentBoard[1]);
 		} else if (currentBoard[2] === currentBoard[5] && currentBoard[5] === currentBoard[8] && currentBoard[8] !== null) {
 			win(currentBoard[2]);
 		} else if (currentBoard[0] === currentBoard[4] && currentBoard[4] === currentBoard[8] && currentBoard[8] !== null) {
			win(currentBoard[0]);
		} else if (currentBoard[2] === currentBoard[4] && currentBoard[4] === currentBoard[6] && currentBoard[6] !== null) {
 			win(currentBoard[2]);
 		}
	}

	const win = (winner) => {
		setLock(true);
		console.log(winner)
		if (winner === "sun") {
			winnerRef.current = "Sun won! Congrats"
		} else {
			winnerRef.current = "Moon won! Congrats"
		}

	}
   
	console.log (board)
	return (
		<div className="text-center container">
            <div className= "menu d-flex flex-column">
				<div className="title">
					<Title/>
				</div>
				<div>
					<Announcement ganador= {winnerRef.current}/>
					{/* <WeaponModal/> */}
					<ResetButton onReset = {resetGame}/>
				</div>
			</div>
			<div className="board d-flex flex-column justify-content-center my-3">
				{[0, 1, 2].map((row) => (
 					<div className="row justify-content-center" key={row}>
 						{[0, 1, 2].map((col) => {
 							const index = row * 3 + col;
 							return (
 								<div
									className="box col-3 d-flex align-items-center justify-content-center"
									key={index}
									onClick={() => handleClick(index)}
 									style={{ height: "100px" }}
								>
									{board[index] && (
 										<img
											src={board[index] === "sun" ? imgSol : imgLuna}
											alt={board[index]}
											style={{ width: "80px", height: "80px" }}
										/>
									)}
								</div>
							);
						})}
					</div>
				))}
			 </div>
		</div>
	);
};

export default Home;