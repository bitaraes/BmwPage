import React from "react";

import "./style.css";
import banner from "../../assets/imgs/banners/desktop-.jpg";

export default function Banner() {
	return (
		<>
			<div className="banner">
				<img alt="bmw-banner" src={banner} className="banner__img" />
			</div>
		</>
	);
}
