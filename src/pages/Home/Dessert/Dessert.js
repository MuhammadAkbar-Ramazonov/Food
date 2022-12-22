import {FoodItmes} from "../../../components/FoodItmes"
import {dessert} from "../../../assets/data/Dishes"
export const Dessert = () => {
    return<>
        <ul className="dishes-list-box">
            {dessert.map(item => <FoodItmes obj={item} />)}
        </ul>
    </>
}