import {FoodItmes} from "../../../components/FoodItmes"
import {coldDishes} from "../../../assets/data/Dishes"

export const ColdDishes = () => {
    return <>
        <ul className="dishes-list-box">
            {coldDishes.map(item => <FoodItmes obj={item} />)}
        </ul>
    </>
}