import React from 'react';
import "./InfoSlide.css"
import {data} from "./data";
const InfoSlide = () => {
	return (
		<>
			<div className={"container"}>
				<img src={"images/worm/many-pink-worm.png"} className={"element-info"}/>
				<img src={"images/slider.png"} className={"element-info"}/>
				<p className={"text-message"}>ТЕКСТ СООБЩЕНИЯ</p>
				<div className={"text-field"}>
					<b>{data[0]}</b>
					{data[1].slice(26)}
					<br/><br/>{data[1]}
					</div>
			</div>
		</>
	);
};

export default InfoSlide;