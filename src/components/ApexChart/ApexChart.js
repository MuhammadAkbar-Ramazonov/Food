import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const ApexChart = () => {
	const [state, setState] = useState({
		series: [75, 50, 67, 0],
		options: {
			chart: {
				height: 178,
				type: "radialBar",
			},
			plotOptions: {
				radialBar: {
					hollow: {
						margin: 0,
						size: "40%",
					},
					dataLabels: {
						name: {
							fontSize: "30px",
						},
						value: {
							fontSize: "20px",
						},
					},
				},
			},
			plotOptions: {
				radialBar: {
					track: {
						background: "#2A2836",
						strokeWidth: "100%",
						margin: 0, // margin is in pixels
						dropShadow: {
							enabled: true,
							blur: 0,
						},
					},
				},
			},

			stroke: {
				lineCap: "round",
			},
			labels: ["Delivery", "To Go", "Dine In", ""],

			colors: ["#65B0F6", "#FFB572", "#FF7CA3", ""],
		},
	});

	return (
		<div id='chart'>
			<ReactApexChart
				options={state.options}
				series={state.series}
				type='radialBar'
				height={350}
			/>
		</div>
	);
};
