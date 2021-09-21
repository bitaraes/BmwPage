import React from "react";
import { useState, useEffect } from "react";

import "./style.css";
import CarsCard from "../shared/cars-card/cars-card";
import { carsData } from "../cars-data/cars-data";

export default function CarsSlider({ isVisible }) {
	const [current, setCurrent] = useState(0);
	const list = document.querySelector(".slider__list-cars");

	async function nextSlide() {
		const next = current + 1;
		list.style.transform = `translateX(calc(70vw / 4 * ${next} * -1))`;
		setCurrent(current + 1);
	}

	function prevSlide() {
		const prev = current - 1;
		list.style.transform = `translateX(calc(70vw / 4 * ${prev} * -1))`;
		setCurrent(current - 1);
	}

	const sliderStyle = {
		visibility: !isVisible ? "hidden" : "visible",
		opacity: !isVisible ? "0" : "1",
		transition: "all 0.5s",
	};

	return (
		<div className="slider" style={sliderStyle}>
			{current > 0 ? (
				<i className="icon-seta-a-esquerda" onClick={prevSlide}></i>
			) : null}
			<div className="slider__container">
				<ul className="slider__list-cars">
					{carsData.map((current, index) => {
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
			</div>
			{current < carsData.length - 4 ? (
				<i className="icon-seta-a-direita" onClick={nextSlide}></i>
			) : null}
		</div>
	);
}
