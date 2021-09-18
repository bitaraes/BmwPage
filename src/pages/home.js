import React from "react";
import { useState, useEffect } from "react";
import Banner from "../components/banner/banner";
import Estimate from "../components/estimate/estimate";
import Footer from "../components/footer/footer";
import Form from "../components/form/form";

import Header from "../components/header/header";
import ListCars from "../components/list-cars/list-cars";
import StickyFooter from "../components/sticky-footer/sticky-footer";
import StickyHeader from "../components/sticky-header/sticky-header";

export function Home() {
	const [scroll, setScroll] = useState(null);
	const [open, setOpen] = useState(null);

	useEffect(() => {}, [scroll]);

	useEffect(() => {}, [open]);

	function positionSet() {
		if (window.scrollY >= 100) {
			setScroll(true);
			return;
		} else {
			setScroll(null);
			return;
		}
	}

	function scrollBlock() {
		if (open) {
			document.documentElement.style.overflow = "hidden";
		} else {
			document.documentElement.style.overflow = "auto";
		}
	}

	window.addEventListener("scroll", positionSet);
	return (
		<>
			{scrollBlock()}
			{!open ? null : (
				<Estimate
					close={() => {
						setOpen(!open);
					}}
				/>
			)}
			<Header />
			{scroll ? (
				<StickyHeader
					open={open}
					click={() => {
						setOpen(!open);
					}}
				/>
			) : null}
			<Banner />
			<Form />
			<ListCars
				click={() => {
					setOpen(!open);
				}}
			/>
			<Footer />
			{scroll ? <StickyFooter /> : null}
		</>
	);
}
