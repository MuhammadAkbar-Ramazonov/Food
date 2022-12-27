import React from "react";

export const Items = ({ name, protsent, money, desc, img, secondImg, color}) => {
	return (
		<li className={name}>
			<div className='dashboard__inner'>
				<div className='dashboard__inner-icon'>{img}</div>
				<p className={`text-${color}`}>{protsent}</p>
				<div className='dashboard__inner-img'>{secondImg}</div>
			</div>
			<h3 className="dashboard__title">{money}</h3>
			<p className="dashboard__desc">{desc}</p>
		</li>
	);
};
