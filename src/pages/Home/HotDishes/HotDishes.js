import { useEffect, useState } from "react";
import { Food, LocalHost } from "../../../api/API";
import axios from "axios";
import { FoodItmes } from "../../../components/FoodItmes";
export const HotDishes = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`${LocalHost}${Food}1/`).then((res) => setData(res.data));
		console.log("oknfjnd");
	}, []);
	return (
		<>
			<ul className='dishes-list-box'>
				{data.map((item, index) => (
					<FoodItmes key={index} obj={item} />
				))}
			</ul>
		</>
	);
};
