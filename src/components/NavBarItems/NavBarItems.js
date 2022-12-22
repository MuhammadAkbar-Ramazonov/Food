import { NavLink } from "react-router-dom"

export const NavBarItems = ({children, link}) => {
    return <>
        <li className="nav-item">
            <NavLink className={({isActive}) => isActive ? "nav-link nav-link-active" : "nav-link"} to={link}>
                <span className="nav-link-iconbox">
                    {children}
                </span>
            </NavLink>
            <span className="nav-link-active-top-border"></span>
            <span className="nav-link-active-bottom-border"></span>
        </li>
    </>
}