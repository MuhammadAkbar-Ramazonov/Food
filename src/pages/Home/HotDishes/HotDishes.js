import {FoodItmes} from "../../../components/FoodItmes"
import {hotDishes} from "../../../assets/data/Dishes"
export const HotDishes = () => {
    return<>
        <ul className="dishes-list-box">
            {hotDishes.map(item => <FoodItmes obj={item} />)}
        </ul>
    </>
}