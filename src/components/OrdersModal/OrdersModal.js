import "./OrdersModal.scss"
import { useContext } from "react";
import { PaymentModal } from "../../Context/Payment";
import { Cash, CreditCardIcon, PayPalIcon } from "../../assets/images/icons";
import { OrdersCard } from "./OrdersCard/OrdersCard";
import { Input } from "../Input";
import { Select } from "../Select/Select";

export const OrdersModal =() => {
    const {modalPayment, setModalPayment} = useContext(PaymentModal)

    const modalMoneyCard = [
        {
            img: <CreditCardIcon/>,
            name: "Credit Card",
        },
        
        {
            img: <PayPalIcon/>,
            name: "Paypal",
        },
        
        {
            img: <Cash/>,
            name: "Cash",
        },
        
    ]

    return<>
        <div className={modalPayment ? "orders-modal-overlay payment-modal-show" : "orders-modal-overlay"}>
            <div className="orders-modal-body">
                <div className="orders-modal-top">
                    <h2 className="orders-modal-top-title">
                        Payment
                    </h2>
                    <p className="ordes-modal-desc">
                        3 payment method available
                    </p>
                </div>
                <h3 className="orders-modal-text">
                    Payment Method
                </h3>
                <form className="orders-modal-form" action="#" method="get" onSubmit={(evt) => {
                    evt.preventDefault();
                    console.log(evt);
                }}>
                    <ul className="orders-modal-cardlist">
                        {modalMoneyCard.map((item, i) => <OrdersCard obj={item} index={i} />)}
                    </ul>

                    <label className="orders-modal-label">
                        <span className="orders-modal-label-title">Cardholder Name</span>
                        <Input typeInput="text" classList="orders-modal-input" placeHolder="Cardholder Name"/>
                    </label>
                    <label className="orders-modal-label">
                        <span className="orders-modal-label-title">Card Number</span>
                        <Input typeInput="number" classList="orders-modal-input" placeHolder="XXX XXX XXX XXX"/>
                    </label>

                    <div className="orders-modal-form-box orders-modal-form-box-top">
                        <label className="orders-modal-label orders-modal-label-mini">
                            <span className="orders-modal-label-title">Expiration Dater</span>
                            <Input typeInput="number" classList="orders-modal-input" placeHolder="Expiration Date"/>
                        </label>
                        <label className="orders-modal-label">
                            <span className="orders-modal-label-title">CVV</span>
                            <Input typeInput="password" classList="orders-modal-input" placeHolder="CVV"/>
                        </label>
                    </div>
                    <div className="orders-modal-form-box">
                        <label className="orders-modal-label orders-modal-label-mini">
                            <span className="orders-modal-label-title">Order Type</span>
                            <Select name="dine_in" className="orders-modal-select">
                                <option value="Dine-in">Dine in</option>
                            </Select>
                        </label>
                        <label className="orders-modal-label">
                            <span className="orders-modal-label-title">Table no.</span>
                            <Input typeInput="number" classList="orders-modal-input" placeHolder="Table no"/>
                        </label>
                    </div>

                    <div className="orders-modal-btnbox">
                        <button className="orders-modal-cancel-btn" type="button" onClick={() => {
                            setModalPayment(false)
                        }}>
                            Cancel
                        </button>
                        <button className="orders-modal-confirm-btn" type="button">
                            Confirm Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
}