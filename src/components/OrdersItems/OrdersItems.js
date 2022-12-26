import { DeleteBtnIcon } from "../../assets/images/icons/icons";
import { Input } from "../Input";
import "./OrdersItems.scss";

export const OrdersItems = ({obj}) => {
    return <>
        <li className="orders-item">
            <div className="orders-infobox">
                <div className="orders-textbox">
                    <div className="orders-item-top-infobox">
                        <img className="orders-item-img" src={obj.foodImg} width="40" height="40" alt={obj.foodName} />
                        <div className="orders-item-textbox">
                            <h4 className="orders-item-text">
                                {obj.foodName}
                            </h4>
                            <span className="orders-item-price">
                                {obj.foodPrice}
                            </span>
                        </div>
                    </div>
                    <button className="oreders-item-top-btn">
                        1
                    </button>
                </div>

                <span className="orders-sum-price">
                    $ 4,58
                </span>
            </div>
            <div className="orders-itme-bottom">
                <form className="orders-item-form" action="post" onSubmit={(evt)=> evt.preventDefault()}>
                    <Input typeInput="text" classList="orders-item-input" placeHolder="Order Note..." ></Input>
                </form>
                <button className="orders-item-delete-btn" type="button">
                    <DeleteBtnIcon />
                </button>
            </div>
        </li>
    </>
}