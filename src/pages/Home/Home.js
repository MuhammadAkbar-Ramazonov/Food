import "./Home.scss"
import {Route, Routes} from "react-router-dom";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HotDishes } from "./HotDishes";
import { ColdDishes } from "./ColdDishes"
import { Soup } from "./Soup";
import { Grill } from "./Grill";
import { Appetizer } from "./Appetizer";
import { Dessert } from "./Dessert";
export const Home = () => {
    return<>
        <div className="home-inner">
            {/* Bu yerda Home ni Head qismi ulanadi */}
            <HomeHeader/> 
            {/* Bu joyda ong tarafti Home page di Orders #34562 */}
            {/* </> */}
            <Routes>
                <Route index element={<HotDishes />}/>
                <Route path="cold" element={<ColdDishes />}/>
                <Route path="soup" element={<Soup/>}/>
                <Route path="grill" element={<Grill/>}/>
                <Route path="appatizer" element={<Appetizer/>}/>
                <Route path="dessert" element={<Dessert/>}/>
            </Routes>
        </div>
    </>
}