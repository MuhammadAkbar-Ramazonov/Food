import { useContext } from "react";
import { checkedCard } from "../../../Context/Payment";
import "./OrdersCard.scss";

export const OrdersCard = ({obj, index}) => {
    const {checkedCardIndex, setCheckedCardIndex } = useContext(checkedCard);
    return <>
        <li className="orders-modal-card-item">
            <label className={checkedCardIndex === index? "orders-modal-card-label orders-modal-card-label-active" : "orders-modal-card-label"}>
                <input className="visually-hidden" type="radio" name="user_money_card" value={obj.value}  onClick={() => {
                    if(checkedCardIndex === index){
                        setCheckedCardIndex(-1)
                    }
                    else{
                        setCheckedCardIndex(index)
                    }
                }} />
                {obj.img}
                <span className="orders-modal-card-title">
                    {obj.name}
                </span>
                <span className="orders-mmodal-card-checked">
                </span>
            </label>
        </li>
    </>
}