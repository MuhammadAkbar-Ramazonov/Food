import "./SettingsNavItem.scss";
import { NavLink } from "react-router-dom"
export const SettingsNavItem = ({obj}) => {
    return <>
        <li className="settings-navitem">
            <NavLink className={({isActive}) => isActive ? "settigs-nav-link settigs-nav-link-active" : "settigs-nav-link"} to={obj.link} end>
                <span className="settings-nav-icon">
                    {obj.img}
                </span>
                <span className="settings-nav-link-box">
                    <span className="settings-nav-link-title">
                        {obj.title}
                    </span>
                    <span className="settings-nav-link-desc">
                        {obj.desc}
                    </span>
                </span>
            </NavLink>
        </li>
    </>
}