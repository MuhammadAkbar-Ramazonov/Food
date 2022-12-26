import "./Management.scss"
import {NavLink} from "react-router-dom"
export const Management =() => {
    return<>
        <div className="settings-menegement-header">
            <div className="settings-menegement-header-top">
                <h2 className="settings-menegement-title">
                    Products Management
                </h2>

                <select className="settings-menegement-select" name="manage_select_result">
                    <option selected value="">Manage Categories</option>
                </select>
            </div>

            <nav className="settings-menegement-header-nav">
                <ul className="home-header-list">
                    <li className="home-header-item">
                        <NavLink className={({isActive}) => isActive ? "home-header-link home-header-link-active" : "home-header-link"} to="/setting/management" end>Hot Dishes</NavLink>
                    </li>
                    <li className="home-header-item">
                        <NavLink className={({isActive}) => isActive ? "home-header-link home-header-link-active" : "home-header-link"} to="cold">Cold Dishes</NavLink>
                    </li>
                    <li className="home-header-item">
                        <NavLink className={({isActive}) => isActive ? "home-header-link home-header-link-active" : "home-header-link"} to="soup">Soup</NavLink>
                    </li>
                    <li className="home-header-item">
                        <NavLink className={({isActive}) => isActive ? "home-header-link home-header-link-active" : "home-header-link"} to="grill">Grill</NavLink>
                    </li>
                    <li className="home-header-item">
                        <NavLink className={({isActive}) => isActive ? "home-header-link home-header-link-active" : "home-header-link"} to="appatizer">Appetizer</NavLink>
                    </li>
                    <li className="home-header-item">
                        <NavLink className={({isActive}) => isActive ? "home-header-link home-header-link-active" : "home-header-link"} to="dessert">Dessert</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </>
}