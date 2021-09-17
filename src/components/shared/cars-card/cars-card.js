import React from "react";
import Button from "../button/button";

import "./style.css";

export default function CarsCard({ img, name }) {
	return (
		<div className="cars-card">
			<img src={`${img}`} alt="Foto do veículo" />
			<h3>{name}</h3>
			<div className="card-button">
				<Button color="blue" text="Cotação" />
			</div>
			<div className="social">
				<span>Compartilhe: </span>
				<i className="icon-facebook share"></i>
				<i className="icon-whatsapp share"></i>
			</div>
		</div>
	);
}
