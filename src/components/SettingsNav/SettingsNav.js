import "./SettingsNav.scss";
import { SettingsNavItem } from "./SettingsNavItem/SettingsNavItem";
import { AboutUsIcon, AppereanceIcon, ManagementIcon, NotificationsIcon, RestaurantIcon, SecurityIcon} from "../../assets/images/icons"
export const SettingsNav = () => {

    const settingsNav = [
        {
            img: <AppereanceIcon />,
            title: "Appereance",
            desc: "Dark and Light mode, Font size",
            link: "appereance",
        },
        {
            img: <RestaurantIcon />,
            title: "Your Restaurant",
            desc: "Dark and Light mode, Font size",
            link: "your-restaurant",
        },
        {
            img: <ManagementIcon />,
            title: "Products Management",
            desc: "Manage your product, pricing, etc",
            link: "management",
        },
        {
            img: <NotificationsIcon />,
            title: "Notifications",
            desc: "Customize your notifications",
            link: "settings-notifications",
        },
        {
            img: <SecurityIcon />,
            title: "Security",
            desc: "Configure Password, PIN, etc",
            link: "security",
        },
        {
            img: <AboutUsIcon />,
            title: "About Us",
            desc: "Find out more about Posly",
            link: "about-us",
        },
    ]

    return <>
        <ul className="settings-nav-list">
            {settingsNav.map(item => <SettingsNavItem obj={item} />)}
        </ul>
    </>
} 