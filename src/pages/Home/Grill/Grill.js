import {FoodItmes} from "../../../components/FoodItmes"
import {grill} from "../../../assets/data/Dishes"
export const Grill = () => {
    return<>
        <ul className="dishes-list-box">
            {grill.map(item => <FoodItmes obj={item} />)}
        </ul>
    </>
}