import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis } from 'recharts';
export const Chart = ({ data }) => {
	return (
		<LineChart width={400} height={400} data={data}>
			<XAxis dataKey="name" />
			<Tooltip />
			<CartesianGrid stroke="#f5f5f5" />
			<Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
			<Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
		</LineChart>
	);
};
