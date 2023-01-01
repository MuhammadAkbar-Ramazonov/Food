import { FoodItmes } from "../../../components/FoodItmes";
import { useEffect, useState } from "react";
import axios from "axios";
import { Food, LocalHost } from "../../../api/API";
export const Dessert = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`${LocalHost}${Food}6/`).then((res) => setData(res.data));
		console.log("oknfjnd");
	}, [LocalHost]);
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