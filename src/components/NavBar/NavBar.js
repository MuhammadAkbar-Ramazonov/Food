import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../../assets/images/icons/icons";

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
                    <li className="nav-item">
                        
                    </li>
                </ul>
            </nav>
        </div>
    </>
}