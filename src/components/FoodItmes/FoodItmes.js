import "./FoodItmes.scss"
export const FoodItmes = ({obj}) => {
    return (
			<>
				<li className='foods-item'>
					<img
						className='foods-img'
						src={`http://localhost:5000/${obj.image}`}
						width='132'
						height='132'
						alt={obj.foodName}
					/>
					<h4 className='foods-title'>{obj.name}</h4>
					<span className='foods-price-text'>$ {obj.price}</span>
					<p className='foods-available-text'>{obj.bowls} Bowls available</p>
				</li>
			</>
		);
}