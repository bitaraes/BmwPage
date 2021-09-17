import React from "react";
import { useState, useEffect } from "react";

import "./style.css";
import CarsCard from "../shared/cars-card/cars-card";
import { carsData } from "../cars-data/cars-data";

export default function CarsSlider({ isVisible }) {
	const [current, setCurrent] = useState(0);
	const [last, setLast] = useState(4);
	const [cars, setCars] = useState(carsData.slice(current, last));

	useEffect(() => {
		function execute() {
			setCars(carsData.slice(current, last));
		}
		execute();
	}, [current, last]);

	function nextSlide() {
		if (last < carsData.length - 1) {
			setLast(last + 1);
			setCurrent(current + 1);
		}
	}

	function prevSlide() {
		if (current > 0) {
			setLast(last - 1);
			setCurrent(current - 1);
		}
	}

	const sliderStyle = {
		visibility: !isVisible ? "hidden" : "visible",
		opacity: !isVisible ? "0" : "1",
		transition: "all 0.5s",
	};

	return (
		<div className="slider" style={sliderStyle}>
			<div className="slider__container">
				{current > 0 ? (
					<i className="icon-seta-a-esquerda" onClick={prevSlide}></i>
				) : null}
				<ul className="slider__list-cars">
					{cars.map((current, index) => {
						return (
							<li
								className="slider__item-card"
								key={index}
								id={index}
							>
								<CarsCard
									img={current.img}
									name={current.name}
									invisible="invisible"
								/>
							</li>
						);
					})}
				</ul>
				{last < carsData.length - 1 ? (
					<i className="icon-seta-a-direita" onClick={nextSlide}></i>
				) : null}
			</div>
		</div>
	);
}
