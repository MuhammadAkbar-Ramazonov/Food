import "./App.scss"
import {Route, Routes} from "react-router-dom";
import { Discount } from "./pages/Discount";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Message } from "./pages/Message";
import { Notification } from "./pages/Notification";
import { Setting } from "./pages/Setting";

function App() {
    return (
        <>
            {/* </> */}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/discount" element={<Discount/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>    
                <Route path="/message" element={<Message/>}/>    
                <Route path="/notification" element={<Notification/>}/>    
                <Route path="/setting" element={<Setting/>}/>    
            </Routes>
        </>
    );
}

export default App;
