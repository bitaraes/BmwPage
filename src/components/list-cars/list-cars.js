import React from "react";
import { carsData } from "../cars-data/cars-data";
import CarsCard from "../shared/cars-card/cars-card";

import "./style.css";

export default function ListCars({ click }) {
	return (
		<>
			<div className="container">
				<div className="list-cars__container">
					<h1>ESCOLHA SEU BMW</h1>

					<ul className="list-cars">
						{carsData.map((current, index) => {
							return (
								<li
									className="list-cars__item-card"
									key={index}
								>
									<CarsCard
										img={current.img}
										name={current.name}
										click={click}
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
