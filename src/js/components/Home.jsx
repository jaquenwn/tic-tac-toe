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
		
 	};


	const result = () => {
		if (board[0] === board[1] && board[1] === board[2]  && board[1] !== "") {
			win(board[2]);
		} else if (board[3] === board[4] && board[4] === board[5]  && board[5] !== "") {
			win(board[5]);
		} else if (board[6] === board[7] && board[7] === board[8]  && board[8] !== "") {
			win(board[8]);
		} else if (board[0] === board[3] && board[3] === board[6]  && board[6] !== "") {
			win(turn);
		} else if (board[1] === board[4] && board[4] === board[7]  && board[7] !== "") {
			win(turn);
		} else if (board[2] === board[5] && board[5] === board[8]  && board[8] !== "") {
			win(turn);
		} else if (board[0] === board[4] && board[4] === board[8]  && board[8] !== "") {
			win(turn);
		} else if (board[2] === board[4] && board[4] === board[6]  && board[6] !== "") {
			win(turn);
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
					<ResetButton/>
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