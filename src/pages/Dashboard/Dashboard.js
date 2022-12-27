import {
	ArminArlert,
	Coin,
	ErenJaegar,
	HanjiZoe,
	HistoriaReiss,
	LeviAckerman,
	ReinerBraunn,
	Save,
	ToDown,
	ToUp,
	User,
} from "../../assets/images/icons";
import dish2 from "./../../assets/data/images/image2.png";
import dish1 from "./../../assets/data/images/image1.png";
import dish3 from "./../../assets/data/images/image3.png";
import { Select } from "../../components/Select";
import "./Dashboard.scss";
import { Items } from "./Items/Items";
import { ApexChart } from "../../components/ApexChart/ApexChart";
export const Dashboard = () => {
	return (
		<>
			<div className='dashboard'>
				<div className='dashboard__wrapper'>
					<div className='dashboard__heading-inner'>
						<h2 className='dashboard__title'>Dashboard</h2>
						<p className='dashboard__desc'>Tuesday 2 Feb, 2021</p>
					</div>

					<ul className='dashboard__list'>
						<Items
							img={<Coin />}
							color={"green"}
							name={"dashboard__item"}
							protsent={"+32.40%"}
							money={"$10,243.00"}
							desc={"Total Revenue"}
							secondImg={<ToUp />}
						/>
						<Items
							img={<Save />}
							color={"red"}
							name={"dashboard__item"}
							protsent={"-12.40%"}
							money={"23,456"}
							desc={"Total Dish Ordered"}
							secondImg={<ToDown />}
						/>
						<Items
							img={<User />}
							color={"green"}
							name={"dashboard__item"}
							protsent={"+2.40%"}
							money={"1,234"}
							desc={"Total Customer"}
							secondImg={<ToUp />}
						/>
					</ul>

					<div className='table-wrapper'>
						<div className='table-inner'>
							<h3 className='table-title'>Order Report</h3>
							<select className='table-select' defaultValue={"Filter Order"}>
								<option value='filter_order'>Filter Order</option>
								<option value='filter_board'>Filter Board</option>
							</select>
						</div>

						<table className='table'>
							<tr className='table-heading-wrapper'>
								<th className='table-heading'>Customer</th>
								<th className='table-heading'>Menu</th>
								<th className='table-heading'>Total Payment</th>
								<th className='table-heading'>Status</th>
							</tr>

							<div className='table-wrap'>
								<tr className='table-inner-wrap'>
									<div className='table-user'>
										<ErenJaegar />
										<td className='table-user-title'>Eren Jaegar</td>
									</div>
									<div className='table-user'>
										<ReinerBraunn />
										<td className='table-user-title'>Reiner Braunn</td>
									</div>
									<div className='table-user'>
										<LeviAckerman />
										<td className='table-user-title'>Levi Ackerman</td>
									</div>
									<div className='table-user'>
										<HistoriaReiss />
										<td className='table-user-title'>Historia Reiss</td>
									</div>
									<div className='table-user'>
										<HanjiZoe />
										<td className='table-user-title'>Hanji Zoe</td>
									</div>
									<div className='table-user'>
										<ArminArlert />
										<td className='table-user-title'>Armin Arlert</td>
									</div>
								</tr>
								<tr className='table-menu'>
									<td className='table-menu-title'>
										Spicy seasoned seafood noodles{" "}
									</td>
									<td className='table-menu-title'>
										Salted Pasta with mushroom sauce
									</td>
									<td className='table-menu-title'>
										Beef dumpling in hot and sour soup
									</td>
									<td className='table-menu-title'>
										Hot spicy fried rice with omelet
									</td>
									<td className='table-menu-title'>
										Hot spicy fried rice with omelet
									</td>
									<td className='table-menu-title'>
										Hot spicy fried rice with omelet
									</td>
								</tr>
								<tr className='table-total-payment'>
									<td className='table-total-payment-title'>$125</td>
									<td className='table-total-payment-title'>$145</td>
									<td className='table-total-payment-title'>$105</td>
									<td className='table-total-payment-title'>$45</td>
									<td className='table-total-payment-title'>$245</td>
									<td className='table-total-payment-title'>$435</td>
								</tr>
								<tr className='table-status'>
									<td className='table-status-title'>Completed</td>
									<td className='table-status-title'>Preparing</td>
									<td className='table-status-title'>Pending</td>
									<td className='table-status-title'>Completed</td>
									<td className='table-status-title'>Completed</td>
									<td className='table-status-title'>Completed</td>
								</tr>
							</div>
						</table>
					</div>
				</div>
				<div className='dashboard__orders'>
					<div className='dashboard__orders-most-order'>
						<div className='dashboard__orders-heading'>
							<h3 className='dashboard__order-title'>Most Ordered</h3>
							<Select name='MostTypeOrder'>
								<option selected value=''>
									Today
								</option>
							</Select>
						</div>
						<ul className='dashboard__orders-list'>
							<li className='dashboard__orders-item'>
								<img
									className='dashboard__orders-img'
									src={dish1}
									width={54}
									height={54}
									alt='Spicy seasoned seafood noodles'
								/>
								<div className='dashboard__orders-list-inner'>
									<h4 className='dashboard__orders-list-inner-title'>
										Spicy seasoned seafood noodles
									</h4>
									<p className='dashboard__orders-list-inner-desc'>
										200 dishes ordered
									</p>
								</div>
							</li>
							<li className='dashboard__orders-item'>
								<img
									className='dashboard__orders-img'
									src={dish2}
									width={54}
									height={54}
									alt='Salted pasta with mushroom sauce'
								/>
								<div className='dashboard__orders-list-inner'>
									<h4 className='dashboard__orders-list-inner-title'>
										Salted pasta with mushroom sauce
									</h4>
									<p className='dashboard__orders-list-inner-desc'>
										120 dishes ordered
									</p>
								</div>
							</li>
							<li className='dashboard__orders-item'>
								<img
									className='dashboard__orders-img'
									src={dish3}
									width={54}
									height={54}
									alt='Beef dumpling in hot and sour soup'
								/>
								<div className='dashboard__orders-list-inner'>
									<h4 className='dashboard__orders-list-inner-title'>
										Beef dumpling in hot and sour soup
									</h4>
									<p className='dashboard__orders-list-inner-desc'>
										80 dishes ordered
									</p>
								</div>
							</li>
						</ul>

						<button className='dashboard__order-button'>View All</button>
					</div>
					<div className='dashboard__orders-most-order'>
						<div className='dashboard__orders-heading'>
							<h3 className='dashboard__order-title'>Most Type of Order</h3>
							<Select name='MostTypeOrder'>
								<option selected value=''>
									Today
								</option>
							</Select>
						</div>
						<div className='apexcharts'>
							<ApexChart />
							<ul className='apexcharts__list'>
								<li className='apexcharts__item'>
									<span className='dine-in'></span>
									<div>
										<h4 className='apexcharts__title'>Dine In</h4>
										<p className='apexcharts__desc'>200 customers</p>
									</div>
								</li>
								<li className='apexcharts__item'>
									<span className='to-go'></span>
									<div>
										<h4 className='apexcharts__title'>To Go</h4>
										<p className='apexcharts__desc'>122 customers</p>
									</div>
								</li>
								<li className='apexcharts__item'>
									<span className='delivery'></span>
									<div>
										<h4 className='apexcharts__title'>Delivery</h4>
										<p className='apexcharts__desc'>264 customers</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
