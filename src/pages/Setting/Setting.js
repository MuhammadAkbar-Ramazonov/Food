import "./Settings.scss";
import { Routes, Route } from "react-router-dom";
import { Appereance } from "./Appereance";
import { Restaurant } from "./Restaurant";
import { Management } from "./Management";
import { SettingsNotifications } from "./SettingsNotifications";
import { Security } from "./Security";
import { AboutUs } from "./AboutUs";
import { SettingsNav } from "../../components/SettingsNav/SettingsNav";
export const Setting = () => {
	return (
		<>
			<div className='settings-inner'>
				<h2 className='settings-title'>Settings</h2>
				<div className='settings-wrapper'>
					<nav className='settings-nav'>
						<SettingsNav />
					</nav>
					<Routes>
						{/* <Route path="/setting" element={<Navigate to="management" replace={true}/>}/> */}
						<Route path='management/*' element={<Management />} />
						<Route path='appereance' element={<Appereance />} />
						<Route path='your-restaurant' element={<Restaurant />} />
						<Route
							path='settings-notifications'
							element={<SettingsNotifications />}
						/>
						<Route path='security' element={<Security />} />
						<Route path='about-us' element={<AboutUs />} />
					</Routes>
				</div>
			</div>
		</>
	);
};
