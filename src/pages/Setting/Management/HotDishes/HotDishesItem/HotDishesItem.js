import { EditBtn } from "../../../../../assets/images/icons/icons";

export const HotDishesItem = ({ obj, setEditFood }) => {
	return (
		<>
			<li className='settings-hot-dishes-inner-item'>
				<div className='settings-hot-dishes-inner-item-inner'>
					<img
						className='settings-hot-dishes-inner-item-img'
						src={`http://localhost:5000/${obj.image}`}
						width='143'
						height='130'
						alt={obj.name}
					/>
					<h4 className='settings-hot-dishes-inner-item-title'>{obj.name}</h4>
					<div className='settings-hot-dishes-inner-item-wraper'>
						<p className='settings-hot-dishes-inner-item-desc'>$ {obj.price}</p>
						<span className='settings-hot-dishes-inner-item-dots'></span>
						<p className='settings-hot-dishes-inner-item-desc'>
							{obj.bowls} Bowls
						</p>
					</div>
				</div>
				<div className=''>
					<button className='settings-hot-dishes-inner-item-btn' onClick={() => {
						setEditFood(obj.id)
					}} data-bs-toggle='modal' data-bs-target='#EditModal' type='button'>
						<EditBtn />
						Edit dish
					</button>
				</div>
			</li>
		</>
	);
};
