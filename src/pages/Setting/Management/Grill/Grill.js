import axios from "axios";
import React, { useEffect, useState } from "react";

import { HotDishesItem } from "../HotDishes/HotDishesItem/HotDishesItem";
import { LocalHost, Food } from "../../../../api/API";
import { PlusBtn } from "../../../../assets/images/icons";
import { Modal } from "../../../../components/Modal/Modal";
import { EditModal } from "../../../../components/Modal/EditModal/EditModal";
export const Grill = () => {
	const [editFoodId, setEditFoodId] = useState(-1)
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`${LocalHost}${Food}/4`).then((res) => setData(res.data));
		console.log("oknfjnd");
	}, [editFoodId]);

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
					<HotDishesItem key={index} obj={item} setEditFood={setEditFoodId}/>
				))}
			</ul>
			<Modal />
			<EditModal id={editFoodId} setEditFoodId={setEditFoodId} />
		</div>
	);
};
