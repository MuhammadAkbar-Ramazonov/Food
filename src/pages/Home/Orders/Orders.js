import "./Orders.scss";
import dish1 from "../../../assets/data/images/image1.png"
import dish2 from "../../../assets/data/images/image2.png"
import dish3 from "../../../assets/data/images/image3.png"
import Grill1 from "../../../assets/data/images/Grill1.jfif"
import Grill2 from "../../../assets/data/images/Grill2.jfif"
import { OrdersItems } from "../../../components/OrdersItems/OrdersItems";
import { useContext } from "react";
import { PaymentModal } from "../../../Context/Payment";
export const Orders = () => {
    const ordersFood = [
        {
            id: 1,
            foodImg: dish1,
            foodName: 'Spicy seasoned seafood noodles',
            foodPrice: '$ 2.29',
            isAvailable: '20 Bowls available',
        },
    
        {
            id: 2,
            foodImg: dish2,
            foodName: 'Salted Pasta with mushroom sauce',
            foodPrice: '$ 2.69',
            isAvailable: '11 Bowls available',
        },
    
        {
            id: 3,
            foodImg: dish3,
            foodName: 'Beef dumpling in hot and sour soup',
            foodPrice: '$ 2.99',
            isAvailable: '16 Bowls available',
        },
        {
            id: 28,
            foodImg: Grill1,
            foodName: 'New York Strip',
            foodPrice: '$ 20.50',
            isAvailable: '5 Bowls available',
        },
        {
            id: 29,
            foodImg: Grill2,
            foodName: 'Ribye',
            foodPrice: '$ 19.80',
            isAvailable: '2 Bowls available',
        },    
    ]

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
            {ordersFood.length !== 0 ? (
                <ul className="orders-list">
                    {ordersFood.map(item => <OrdersItems obj={item} />)}
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