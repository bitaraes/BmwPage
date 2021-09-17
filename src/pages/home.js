import React from "react";
import Banner from "../components/banner/banner";
import Footer from "../components/footer/footer";
import Form from "../components/form/form";

import Header from "../components/header/header";
import ListCars from "../components/list-cars/list-cars";

export function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Form />
			<ListCars />
			<Footer />
		</>
	);
}
