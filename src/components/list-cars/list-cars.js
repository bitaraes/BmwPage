import React from "react";
import CarsCard from "../shared/cars-card/cars-card";
import m3 from "../../assets/imgs/veiculos/m3.png";
import z4 from "../../assets/imgs/veiculos/z4.png";
import m5 from "../../assets/imgs/veiculos/m5.png";
import serie3 from "../../assets/imgs/veiculos/serie-3.png";
import serie4 from "../../assets/imgs/veiculos/serie-4.png";
import serie1 from "../../assets/imgs/veiculos/serie1.png";
import serie2 from "../../assets/imgs/veiculos/serie2.png";
import x2 from "../../assets/imgs/veiculos/x2.png";
import "./style.css";

export default function ListCars() {
	const cars = [
		{ name: "BMW Série 1", img: serie1 },
		{ name: "BMW M3 Competition", img: m3 },
		{ name: "BMW M5", img: m5 },
		{ name: "BMW X2", img: x2 },
		{ name: "BMW Série 4", img: serie4 },
		{ name: "BMW Série 3", img: serie3 },
		{ name: "BMW Z4", img: z4 },
		{ name: "BMW Série 2", img: serie2 },
	];
	return (
		<>
			<div className="container">
				<div className="list-cars__container">
					<h1>ESCOLHA SEU BMW</h1>

					<ul className="list-cars">
						{cars.map((current, index) => {
							return (
								<li
									className="list-cars__item-card"
									key={index}
								>
									<CarsCard
										img={current.img}
										name={current.name}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}
