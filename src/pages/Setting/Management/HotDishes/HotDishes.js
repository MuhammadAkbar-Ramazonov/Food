import axios from "axios";
import React, { useEffect, useState } from "react";
import { PlusBtn } from "../../../../assets/images/icons/icons";
import { Modal } from "../../../../components/Modal/Modal";
import "./HotDishes.scss";
import { HotDishesItem } from "./HotDishesItem";
import { LocalHost, Food } from "../../../../api/API";
export const HotDishes = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`${LocalHost}${Food}1/`).then((res) => setData(res.data));
		console.log("oknfjnd");
	}, [LocalHost]);

	return (
		<div className='settings-hot-dishes-inner'>
			<ul className='settings-hot-dishes-inner-list'>
				<li className='settings-hot-dishes-inner-item-edit'>
					<button
						type='button'
						class='settings-hot-dishes-inner-item-edit-btn'
						data-bs-toggle='modal'
						data-bs-target='#exampleModal'
					>
						<PlusBtn />
						<p className='settings-hot-dishes-inner-item-edit-title'>
							Add new dish
						</p>
					</button>
				</li>
				{data.map((item, index) => (
					<HotDishesItem key={index} obj={item} />
				))}
			</ul>
			<Modal />
		</div>
	);
};
