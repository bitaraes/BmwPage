import React from "react";

import "./style.css";
import logoBmw from "../../assets/imgs/logos/logo-bmw-rio.svg";
import Button from "../shared/button/button";
export default function StickyHeader() {
	return (
		<header className="sticky-header">
			<div>
				<img
					src={logoBmw}
					alt="BMW Logo"
					className="copyright__bmw-logo"
				/>
			</div>
			<div className="sticky-header__button-container">
				<Button color="blue" text="Solicitar cotação" />
			</div>
		</header>
	);
}
