import {Route, Routes} from "react-router-dom";
import { HotDishes } from "./HotDishes";
export const Home = () => {
    return<>
        {/* </>  */}
        <Routes>
            <Route index element={<HotDishes />}/>
            {/* <Route path="cold" element={</>}/> */}
            {/* <Route path="soup" element={</>}/> */}
            {/* <Route path="grill" element={</>}/> */}
            {/* <Route path="appatizer" element={</>}/> */}
            {/* <Route path="dessert" element={</>}/> */}
        </Routes>
    </>
}