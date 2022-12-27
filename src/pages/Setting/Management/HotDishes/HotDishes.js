import React from "react";
import { hotDishes } from "../../../../assets/data/Dishes";
import { PlusBtn } from "../../../../assets/images/icons/icons";
import { Modal } from "../../../../components/Modal/Modal";
import "./HotDishes.scss";
import { HotDishesItem } from "./HotDishesItem";
export const HotDishes = () => {
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
			<Modal />
		</div>
	);
};
