import "./Home.scss"
import {Route, Routes} from "react-router-dom";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HotDishes } from "./HotDishes";
import { ColdDishes } from "./ColdDishes"
import { Soup } from "./Soup";
import { Grill } from "./Grill";
import { Appetizer } from "./Appetizer";
import { Dessert } from "./Dessert";
import { Orders } from "./Orders";
import { OrdersModal } from "../../components/OrdersModal/OrdersModal";
import { PaymentModal, checkedCard } from "../../Context/Payment";
import { useState } from "react";
export const Home = () => {
    const [modalPayment, setModalPayment] = useState(false)
    const [checkedCardIndex, setCheckedCardIndex] = useState(-1)

    return<>
        <PaymentModal.Provider value={
            {
                modalPayment: modalPayment, 
                setModalPayment: setModalPayment,
            }}>
            <checkedCard.Provider value={{
                checkedCardIndex: checkedCardIndex,
                setCheckedCardIndex: setCheckedCardIndex,
            }}>
                <div className="home-inner">
                    <div className="home-wrapper">
                        {/* Bu yerda Home ni Head qismi ulanadi */}
                        <HomeHeader/> 
                        <Routes>
                            <Route index element={<HotDishes />}/>
                            <Route path="cold" element={<ColdDishes />}/>
                            <Route path="soup" element={<Soup/>}/>
                            <Route path="grill" element={<Grill/>}/>
                            <Route path="appatizer" element={<Appetizer/>}/>
                            <Route path="dessert" element={<Dessert/>}/>
                        </Routes>
                    </div>
                        {/* Bu joyda ong tarafti Home page di Orders #34562 */}
                        <Orders />
                </div>

                <OrdersModal/>
            </checkedCard.Provider>
        </PaymentModal.Provider>
    </>
}