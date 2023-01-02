import "./Orders.scss";
import { OrdersItems } from "../../../components/OrdersItems/OrdersItems";
import { useContext, useEffect, useState } from "react";
import { PaymentModal } from "../../../Context/Payment";
import axios from "axios";
import { Food, LocalHost } from "../../../api/API";
export const Orders = () => {
    
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`${LocalHost}${Food}1/`).then((res) => setData(res.data));
		console.log("oknfjnd");
	}, [LocalHost]);


    const {setModalPayment} = useContext(PaymentModal)
    return <>
        <div className="orders-body">
            <div className="orders-top">
                <h2 className="orders-top-title">
                    Orders #34562
                </h2>
                <div className="orders-top-buttonbox">
                    <button className="orders-top-button orders-top-button-active">
                        Dine In
                    </button>
                    <button className="orders-top-button">
                        To Go
                    </button>
                    <button className="orders-top-button">
                        Delivery
                    </button>
                </div>
                <div className="orders-top-textbox">
                    <h3 className="orders-top-text">
                        Item
                    </h3>
                    <div className="orders-top-textbox-inner">
                        <h3 className="orders-top-text">
                            Qty
                        </h3>
                        <h3 className="orders-top-text">
                            Price
                        </h3>
                    </div>
                </div>
            </div>
            {data.length !== 0 ? (
                <ul className="orders-list">
                    {data.map(item => <OrdersItems obj={item} />)}
                </ul>
            ):(
                <h3 className="orders-top-title">
                    Orders Not found
                </h3>
            )}
            <div className="orders-bottom">
                <div className="orders-bottom-textbox">
                    <p className="orders-bottom-text">Discount</p>
                    <span className="orders-bottom-price">
                        $0
                    </span>
                </div>
                <div className="orders-bottom-textbox">
                    <p className="orders-bottom-text">Sub total</p>
                    <span className="orders-bottom-price">
                        $ 21,03
                    </span>
                </div>

                <button className="orders-bottom-btn" type="button" onClick={() => setModalPayment(true)}>
                    Continue to Payment
                </button>
            </div>
        </div>
    </>
} 