import React from "react";
import { useState, useEffect } from "react";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Form from "../components/form/form";

import Header from "../components/header/header";
import ListCars from "../components/list-cars/list-cars";
import StickyFooter from "../components/sticky-footer/sticky-footer";
import StickyHeader from "../components/sticky-header/sticky-header";

export function Home() {
	const [scroll, setScroll] = useState(null);

	useEffect(() => {}, [scroll]);

	function positionSet() {
		if (window.scrollY >= 100) {
			setScroll(true);
			return;
		} else {
			setScroll(null);
			return;
		}
	}
	window.addEventListener("scroll", positionSet);
	return (
		<>
			<Header />
			{scroll ? <StickyHeader /> : null}
			<Banner />
			<Form />
			<ListCars />
			<Footer />
			{scroll ? <StickyFooter /> : null}
		</>
	);
}
