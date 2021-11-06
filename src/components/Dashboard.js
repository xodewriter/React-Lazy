import React from 'react';
import Plot from 'react-plotly.js';

const Dashboard = () => {
	return (
		<>
			<h2>Dashboard</h2>
			<Plot
				data={[
					{
						x: [1, 2, 3],
						y: [2, 6, 3],
						type: 'scatter',
						mode: 'lines+markers',
						marker: { color: 'red' },
					},
					{ type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
				]}
				layout={{
					width: 640,
					height: 480,
					title: 'A Fancy Plot by Xodewriter',
				}}
			/>
		</>
	);
};

export default Dashboard;
