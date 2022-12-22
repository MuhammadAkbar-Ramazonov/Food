import {FoodItmes} from "../../../components/FoodItmes"
import {soup} from "../../../assets/data/Dishes"
export const Soup = () => {
    return<>
        <ul className="dishes-list-box">
            {soup.map(item => <FoodItmes obj={item} />)}
        </ul>
    </>
}