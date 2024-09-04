import React from 'react';
import "./ProductSlide.css"
import {data} from "./data";
const ProductSlide = () => {
	return (
		<div className={"container"}>
			<div className={"notepad-field"}>
				A arcu cursus vitae
			</div>
			<div className={"dish-field"}>
				Ehicula ipsum a arcu cursus vitae. Eu non diam phasellus vestibulum lorem sed risus ultricies
			</div>
			<div className={"field-product-t"}>
				<p className={"product-message"}>КЛЮЧЕВОЕ СООБЩЕНИЕ</p>
				<p className={"product-name"}>BREND<b>XY</b></p>
			</div>
			{data.map((obj) =>
				<img src={obj} className={"element-product"}/>
			)}
		</div>
	);
};

export default ProductSlide;