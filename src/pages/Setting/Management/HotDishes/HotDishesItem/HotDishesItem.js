import { EditBtn } from "../../../../../assets/images/icons/icons";

export const HotDishesItem = ({ obj }) => {
	console.log(obj);
	return (
		<>
			<li className='settings-hot-dishes-inner-item'>
				<div className='settings-hot-dishes-inner-item-inner'>
					<img
						className='settings-hot-dishes-inner-item-img'
						src={obj.foodImg}
						width='143'
						height='130'
						alt={obj.foodName}
					/>
					<h4 className='settings-hot-dishes-inner-item-title'>
						{obj.foodName}
					</h4>
					<div className='settings-hot-dishes-inner-item-wraper'>
						<p className='settings-hot-dishes-inner-item-desc'>
							{obj.foodPrice}
						</p>
						<span className='settings-hot-dishes-inner-item-dots'></span>
						<p className='settings-hot-dishes-inner-item-desc'>
							{obj.isAvailable.split(" ", 2).join(" ")}
						</p>
					</div>
				</div>
				<div className=''>
					<button className='settings-hot-dishes-inner-item-btn' type='button'>
						<EditBtn />
						Edit dish
					</button>
				</div>
			</li>
		</>
	);
};
