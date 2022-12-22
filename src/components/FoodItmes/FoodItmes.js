import "./FoodItmes.scss"
export const FoodItmes = ({obj}) => {
    return <>
        <li className="foods-item">
            <img className="foods-img" src={obj.foodImg} width="132" height="132" alt={obj.foodName} />
            <h4 className="foods-title">
                {obj.foodName}
            </h4>
            <span className="foods-price-text">
                {obj.foodPrice}
            </span>
            <p className="foods-available-text">
                {obj.isAvailable}
            </p>
        </li>
    </>
}