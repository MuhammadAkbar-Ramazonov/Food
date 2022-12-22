import "./App.scss"
import {Navigate, Route, Routes} from "react-router-dom";
import { Discount } from "./pages/Discount";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Message } from "./pages/Message";
import { Notification } from "./pages/Notification";
import { Setting } from "./pages/Setting";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace={true}/>}/>
                <Route path="/home/*" element={<Home/>}/>
                <Route path="/discount/*" element={<Discount/>}/>
                <Route path="/dashboard/*" element={<Dashboard/>}/>    
                <Route path="/message/*" element={<Message/>}/>    
                <Route path="/notification/*" element={<Notification/>}/>    
                <Route path="/setting/*" element={<Setting/>}/>    
            </Routes>
        </>
    );
}

export default App;
