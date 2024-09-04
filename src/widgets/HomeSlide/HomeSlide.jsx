import React from 'react';
import "./HomeSlide.css"
import {data} from "./data";
const HomeSlide = () => {
	
	return (
		<div className={"container"}>
			<img src={"images/sphere/blue-sphere.png"} className={"element-home"}/>
			<div className={"title-field"}>
				<p className={"title-one"}>ПРИВЕТ,</p>
				<p className={"title-two"}>ЭТО <b>НЕ</b> КОММЕРЧЕСКОЕ ЗАДАНИЕ</p>
			</div>
			{data.map((obj) =>
				<img src={obj} className={"element-home"}/>
			)}
		</div>
	);
};

export default HomeSlide;