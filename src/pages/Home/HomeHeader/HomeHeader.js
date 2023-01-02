import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select/Select";
import "./HomeHeader.scss";

export const HomeHeader = () => {
const [data, setData] = useState([])

    axios.get("http://localhost:5000/category").then(res => setData(res.data))
    return (
			<>
				<div className='home-header'>
					<div className='home-header-inner'>
						<div className='home-header-titlebox'>
							<h2 className='home-header-title'>Jaegar Resto</h2>
							<time className='home-header-date' dateTime='2021-02-02'>
								Tuesday, 2 Feb 2021
							</time>
						</div>

						<form
							className='home-hero-from'
							onSubmit={(evt) => evt.preventDefault()}
						>
							<Input
								classList='home-hero-search'
								typeInput='search'
								placeHolder='Search for food, coffe, etc..'
							/>
						</form>
					</div>

					<nav className='home-header-nav'>
						<ul className='home-header-list'>
							{/* {data.map(item => (
                                
                            ))} */}
							<li className='home-header-item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "home-header-link home-header-link-active"
											: "home-header-link"
									}
									to='/home'
									end
								>
									Hot Dishes
								</NavLink>
							</li>
							<li className='home-header-item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "home-header-link home-header-link-active"
											: "home-header-link"
									}
									to='cold'
								>
									Cold Dishes
								</NavLink>
							</li>
							<li className='home-header-item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "home-header-link home-header-link-active"
											: "home-header-link"
									}
									to='soup'
								>
									Soup
								</NavLink>
							</li>
							<li className='home-header-item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "home-header-link home-header-link-active"
											: "home-header-link"
									}
									to='grill'
								>
									Grill
								</NavLink>
							</li>
							<li className='home-header-item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "home-header-link home-header-link-active"
											: "home-header-link"
									}
									to='appatizer'
								>
									Appetizer
								</NavLink>
							</li>
							<li className='home-header-item'>
								<NavLink
									className={({ isActive }) =>
										isActive
											? "home-header-link home-header-link-active"
											: "home-header-link"
									}
									to='dessert'
								>
									Dessert
								</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className='home-top'>
					<h2 className='home-top-title'>Choose Dishes</h2>

					<Select name='dine'>
						<option selected value=''>
							Dine in
						</option>
					</Select>
				</div>
			</>
		);
}