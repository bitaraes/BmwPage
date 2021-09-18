import React from "react";

import "./style.css";
import desktopBanner from "../../assets/imgs/banners/desktop-.jpg";
import mobileBanner from "../../assets/imgs/banners/mobile-banner.png";

export default function Banner() {
	return (
		<>
			<div className="banner">
				<img
					alt="bmw-banner"
					src={desktopBanner}
					className="banner__img desktop"
				/>
				<img
					alt="bmw-banner"
					src={mobileBanner}
					className="banner__img mobile"
				/>
			</div>
		</>
	);
}
