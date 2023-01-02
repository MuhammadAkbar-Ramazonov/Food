import { useState } from "react";
import { DeleteBtnIcon } from "../../assets/images/icons/icons";
import { Input } from "../Input";
import "./OrdersItems.scss";

export const OrdersItems = ({ obj }) => {
	const [data, setData] = useState(1);
console.log(data);
	return (
		<>
			<li className='orders-item'>
				<div className='orders-infobox'>
					<div className='orders-textbox'>
						<div className='orders-item-top-infobox'>
							<img
								className='orders-item-img'
								src={`http://localhost:5000/${obj.image}`}
								width='40'
								height='40'
								alt={obj.name}
							/>
							<div className='orders-item-textbox'>
								<h4 className='orders-item-text'>{obj.name}</h4>
								<span className='orders-item-price'>{obj.price} $</span>
							</div>
						</div>
						<form onSubmit={(evt) => evt.preventDefault()}>
							<input
								onChange={(evt) =>
									// console.log(evt.target.value)
									setData(evt.target.value)
								}
								className='oreders-item-top-btn'
								type='number'
							/>
						</form>
						{/* <button className='oreders-item-top-btn'>1</button> */}
					</div>

					<span className='orders-sum-price'>{obj.price * data} $</span>
				</div>
				<div className='orders-itme-bottom'>
					<form
						className='orders-item-form'
						action='post'
						onSubmit={(evt) => evt.preventDefault()}
					>
						<Input
							typeInput='text'
							classList='orders-item-input'
							placeHolder='Order Note...'
						></Input>
					</form>
					<button className='orders-item-delete-btn' type='button'>
						<DeleteBtnIcon />
					</button>
				</div>
			</li>
		</>
	);
};
