import React from "react";

import "./style.css";
import logoBmw from "../../assets/imgs/logos/logo-bmw-rio.svg";
import Button from "../shared/button/button";
export default function StickyHeader({ open, click }) {
	if (!open) {
		return (
			<header className="sticky-header">
				<div>
					<img
						src={logoBmw}
						alt="BMW Logo"
						className="copyright__bmw-logo"
					/>
				</div>
				<div
					className="sticky-header__button-container"
					onClick={click}
				>
					<Button color="blue" text="Solicitar cotação" />
				</div>
			</header>
		);
	}
	return (
		<header className="sticky-header">
			<div>
				<img
					src={logoBmw}
					alt="BMW Logo"
					className="copyright__bmw-logo"
				/>
			</div>
			<div
				className="sticky-header__button-container lock"
				onClick={click}
			>
				<Button color="gray" text="Minimizar" />
			</div>
		</header>
	);
}
