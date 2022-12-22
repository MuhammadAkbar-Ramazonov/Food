import {FoodItmes} from "../../../components/FoodItmes"
import {appetizer} from "../../../assets/data/Dishes"
export const Appetizer = () => {
    return<>
        <ul className="dishes-list-box">
            {appetizer.map(item => <FoodItmes obj={item} />)}
        </ul>
    </>
}