import React,  { useState }  from "react";
import Title from './Title';
import ResetButton from './ResetButton';
import Tile from './Tile';
import WeaponModal from './WeaponModal';
import Announcement from './Announcement';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
 

//create your first component
const Home = () => {
	let boardData = [
		"", "", "",
		"", "", "",
		"", "", "",
	] ;

	let [count, setCount] = useState(0);
	let [lock, setLock] =useState (false);
	const toggle = (e, num) => {
		console.log(e, num)
		if (lock) {
			return 0;
		}
		if (count%2 === 0) {
			console.log("Hola")
			e.target.innerHTML = "<img src= 'https://cdn-icons-png.flaticon.com/512/831/831682.png'";
			boardData[num] = "Hola";
			setCount (++count);
		} else {
			e.target.innerHTML = "<img src= 'https://cdn.iconscout.com/icon/free/png-256/free-moon-icon-download-in-svg-png-gif-file-formats--and-stars-nature-pack-icons-1798529.png?f=webp'";
			boardData[num] = "x";
			setCount (++count);
		}
	}
   
	return (
		<div className="text-center container">
            <div className= "menu d-flex flex-column">
				<div className="title">
					<Title/>
				</div>
				<div>
					<Announcement/>
					{/* <WeaponModal/> */}
					<ResetButton/>
				</div>
			</div>
			<div className= "board d-flex flex-column justify-content-center my-3">
            <div className= "row 1 justify-content-center">
                <div className= "box col-3" onClick = {(e)=>{toggle (e,0)}}></div>
                <div className= "box col-3" onClick = {(e)=>{toggle (e,1)}}></div>
                <div className= "box col-3" onClick = {(e)=>{toggle (e,2)}}></div>
            </div>
            <div className= "row 2 justify-content-center">
                <div className= "box col-3" onClick = {(e)=>{toggle (e,3)}}></div>
                <div className= "box col-3" onClick = {(e)=>{toggle (e,4)}}></div>
                <div className= "box col-3" onClick = {(e)=>{toggle (e,5)}}></div>
            </div>
            <div className= "row 3 justify-content-center">
                <div className= "box col-3" onClick = {(e)=>{toggle (e,6)}}></div>
                <div className= "box col-3" onClick = {(e)=>{toggle (e,7)}}></div>
                <div className= "box col-3" onClick = {(e)=>{toggle (e,8)}}></div>
            </div>
        </div>
		</div>
	);
};

export default Home;