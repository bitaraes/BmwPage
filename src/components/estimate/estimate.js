import React from "react";
import EstimateForm from "../estimate-form/estimate-form";

import "./style.css";

export default function Estimate({ close }) {
	function scrollBlock() {
		document.documentElement.style.overflow = "hidden";
		document.body.scroll = "no";
	}
	return (
		<div>
			<EstimateForm />
			<div className="estimate-container" onClick={close}></div>
		</div>
	);
}
