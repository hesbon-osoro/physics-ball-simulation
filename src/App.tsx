import React, { useState } from 'react';
import './App.css';

function App() {
	const [density, setDensity] = useState(1.22);
	const [gravity, setGravity] = useState(1);
	const [friction, setFriction] = useState(0.47);

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
						<label htmlFor="density">Density of Fluid: {density}</label>
						<input
							type="range"
							id="density"
							min="0"
							step="0.01"
							max="1000"
							onChange={e => setDensity(parseInt(e.currentTarget.value))}
							value={density}
						/>
					</div>
					<div className="labels">
						<label htmlFor="gravity">
							Acceleration due to gravity: {gravity}
						</label>
						<input
							type="range"
							id="gravity"
							min="0"
							step="0.1"
							max="10"
							onChange={e => setGravity(parseInt(e.currentTarget.value))}
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
							onChange={e => setFriction(parseInt(e.currentTarget.value))}
							value={friction}
						/>
					</div>
				</div>
				<div className="canvas">
					<canvas id="canvas"></canvas>
				</div>
			</section>
		</div>
	);
}

export default App;
