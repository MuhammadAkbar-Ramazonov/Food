import React from "react";
import { hotDishes } from "../../../../assets/data/Dishes";
import { PlusBtn } from "../../../../assets/images/icons/icons";
import "./HotDishes.scss";
import { HotDishesItem } from "./HotDishesItem";
export const HotDishes = () => {
	return (
		<div className='settings-hot-dishes-inner'>
			<ul className='settings-hot-dishes-inner-list'>
				<li className='settings-hot-dishes-inner-item-edit'>
					<PlusBtn />
					<p className='settings-hot-dishes-inner-item-edit-title'>Add new dish</p>
				</li>
				{hotDishes.map((item, index) => (
					<HotDishesItem key={index} obj={item} />
				))}
			</ul>

			<div className='settings-hot-dishes-inner-btn-wrap'>
				<button className='settings-hot-dishes-inner-discard'>
					Discard Changes
				</button>
				<button className='settings-hot-dishes-inner-save'>Save Changes</button>
			</div>
		</div>
	);
};
