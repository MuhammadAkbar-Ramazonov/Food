import "./Home.scss"
import {Route, Routes} from "react-router-dom";
import { HomeHeader } from "./HomeHeader/HomeHeader";
import { HotDishes } from "./HotDishes";
import {ColdDishes} from "./ColdDishes"
export const Home = () => {
    return<>
        <div className="home-inner">
            {/* Bu yerda Home ni Head qismi ulanadi */}
            <HomeHeader/> 
            {/* Bu joyda ong tarafti Home page di Orders #34562 */}
            {/* </> */}
            <Routes>
                <Route path="/home/*" index element={<HotDishes />}/>
                <Route path="cold" element={<ColdDishes />}/>
                {/* <Route path="soup" element={</>}/> */}
                {/* <Route path="grill" element={</>}/> */}
                {/* <Route path="appatizer" element={</>}/> */}
                {/* <Route path="dessert" element={</>}/> */}
            </Routes>
        </div>
    </>
}