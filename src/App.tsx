import React, { useState } from 'react';
import './App.css';
import Chart, { IData } from './Chart';

function App() {
	const [density, setDensity] = useState(1.22);
	const [gravity, setGravity] = useState(1);
	const [friction, setFriction] = useState(0.47);
	const [toggleGraph, setToggleGraph] = useState(false);

	let data: IData[] = [];

	let heights = [
		200, 0, 140, 0, 98, 0, 68.6, 0, 48, 0, 33.6, 0, 20, 0, 10, 0, 0,
	];

	for (let i = 0; i < heights.length; i++) {
		data.push({
			time: i,
			height: heights[i],
		});
	}
	return (
		<div className="container-fluid">
			<header className="header">
				<h1>Bouncing Ball</h1>
				<h5>Simulation in React and TypeScript</h5>
				<h3>Click and drag to Create Ball and set its velocity!</h3>
			</header>
			<section className="section">
				<div className="inputs">
					<div className="labels">
						<label htmlFor="density">
							Density of Fluid: {density}kg/m<sup>3</sup>
						</label>
						<input
							type="range"
							id="density"
							min="0"
							step="0.01"
							max="1000"
							onChange={e => setDensity(parseFloat(e.currentTarget.value))}
							value={density}
						/>
					</div>
					<div className="labels">
						<label htmlFor="gravity">
							Acceleration due to gravity: {gravity}g
						</label>
						<input
							type="range"
							id="gravity"
							min="0"
							step="0.1"
							max="10"
							onChange={e => setGravity(parseFloat(e.currentTarget.value))}
							value={gravity}
						/>
					</div>
					<div className="labels">
						<label htmlFor="drag">Drag Coefficient: {friction}</label>
						<input
							type="range"
							id="drag"
							min="0"
							step="0.01"
							max="1"
							onChange={e => setFriction(parseFloat(e.currentTarget.value))}
							onBlur={e => setFriction(parseFloat(e.currentTarget.value))}
							onClick={e => setFriction(parseFloat(e.currentTarget.value))}
							value={friction}
						/>
					</div>
				</div>
				<div className="canvas">
					<canvas id="canvas" width="800" height="550"></canvas>
				</div>
				{toggleGraph && (
					<div className="graph">
						<Chart data={data} />
					</div>
				)}
			</section>
			<button
				className={toggleGraph ? 'btn hide-graph' : 'btn show-graph'}
				onClick={() => setToggleGraph(!toggleGraph)}
			>
				{toggleGraph ? 'Hide' : 'Show'} Graph
			</button>
		</div>
	);
}

export default App;
