import React, { useState } from "react";

//call React from state

//create your first state

//create your first component
const Home = () => {
	const [click, setClick] = useState("");
	return (
		<div className="box">
			<div
				className={"green" + (click == "green" ? " glow" : "")}
				onClick={() => {
					setClick("green");
				}}></div>
			<div
				className={"yellow" + (click == "yellow" ? " glow" : "")}
				onClick={() => {
					setClick("yellow");
				}}></div>
			<div
				className={"red" + (click == "red" ? " glow" : "")}
				onClick={() => {
					setClick("red");
				}}></div>
		</div>
	);
};

export default Home;
