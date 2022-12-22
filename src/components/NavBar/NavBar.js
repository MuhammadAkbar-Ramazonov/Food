import "./NavBar.scss";
import { Link } from "react-router-dom";
import { DashboardIcon, DiscountIcon, HomeIcon, Logo, LogOutIcon, MessageIcon, NotificationIcon, SettingIcon } from "../../assets/images/icons/icons";
import { NavBarItems } from "../NavBarItems/NavBarItems";

export const NavBar = () => {
    return <>
        <div className="site-navbox">
            <div className="logo-box">
                <Link className="logo" to="/">
                    <Logo />
                </Link>
            </div>

            <nav className="site-nav">
                <ul className="nav-list">
                    <NavBarItems link="/">
                        <HomeIcon/>
                    </NavBarItems>
                    
                    <NavBarItems link="/discount">
                        <DiscountIcon/>
                    </NavBarItems>
                    
                    <NavBarItems link="/dashboard">
                        <DashboardIcon/>
                    </NavBarItems>
                    
                    <NavBarItems link="/message">
                        <MessageIcon/>
                    </NavBarItems>
                    
                    <NavBarItems link="/notification">
                        <NotificationIcon/>
                    </NavBarItems>
                    
                    <NavBarItems link="/setting">
                        <SettingIcon/>
                    </NavBarItems>
                    
                </ul>
            </nav>

            <div className="log-out-box">
                <Link className="log-out-link" to="/">
                    <LogOutIcon/>
                </Link>
            </div>
        </div>
    </>
}