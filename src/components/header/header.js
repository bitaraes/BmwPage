import React from "react";
import Button from "../shared/button/button";

import "./style.css";
import Logo from "../../assets/imgs/logos/logo-bmw-rio.svg";

export default function Header() {
	const linksList = [
		"1",
		"2",
		"3",
		"4",
		"5",
		"7",
		"8",
		"X",
		"Z",
		"M",
		"I",
		"Plug-in-Hybrid",
	];
	return (
		<header className="header">
			<div className="container">
				<div className="header__container">
					<nav className="header__nav">
						<div className="header__buttons">
							<div className="header-button">
								<Button
									color="black"
									text="(21) 2042-4442"
									icon="telefone"
								/>
							</div>
							<div className="header-button">
								<Button
									color="black"
									text="TOUR VIRTUAL"
									icon="360"
								/>
							</div>
							<div className="header-button">
								<Button
									color="green"
									text="WHATSAPP"
									icon="whatsapp"
								/>
							</div>
						</div>
						<div className="header__list">
							<ul className="list">
								{linksList.map((current, index) => {
									return (
										<li className="list__item" key={index}>
											<a href={`#${current}`}>
												{current}
											</a>
										</li>
									);
								})}
							</ul>
						</div>
					</nav>
					<div className="logo">
						<img src={Logo} alt="Logo"></img>
					</div>
				</div>
			</div>
		</header>
	);
}
