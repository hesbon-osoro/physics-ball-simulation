import React from 'react';
import {
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
	LineChart,
	Line,
	Tooltip,
	Label,
} from 'recharts';

import './App.css';
export interface IData {
	time: number;
	height: number;
}

const Chart = ({ data }) => {
	return (
		<ResponsiveContainer width="100%" height={400}>
			<LineChart data={data}>
				<defs>
					<linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
						<stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
						<stop offset="75%" stopColor="#2451B7" stopOpacity={0} />
					</linearGradient>
				</defs>
				<XAxis dataKey="time" axisLine={false} tickLine={false}>
					<Label
						style={{
							textAnchor: 'middle',
							fontSize: '130%',
							position: 'absolute',
							bottom: '-50px',
						}}
						value={'Time (s)'}
					/>
				</XAxis>
				<YAxis
					dataKey="height"
					axisLine={false}
					tickLine={false}
					tickCount={8}
					tickFormatter={number => `${number.toFixed(2)}`}
					label={{
						value: 'Height (ft.)',
						fontSize: '130%',
						angle: 270,
						position: 'insideLeft',
					}}
				/>
				<Tooltip
					contentStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
					itemStyle={{ color: '#fff' }}
					cursor={false}
				/>
				<Line
					type="monotone"
					dataKey="height"
					stroke="#8884d8"
					strokeWidth="5"
					dot={{ fill: '#2e4355', stroke: '#8884d8', strokeWidth: 2, r: 5 }}
					activeDot={{
						fill: '#2e4355',
						stroke: '#8884d8',
						strokeWidth: 5,
						r: 10,
					}}
				/>
				<CartesianGrid />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default Chart;
