import React from "react";
import EstimateForm from "../estimate-form/estimate-form";
import Button from "../shared/button/button";

import "./style.css";

export default function Estimate({ click }) {
	return (
		<div>
			<div className="form__button-estimate " onClick={click}>
				<Button color="gray" text="Minimizar" />
			</div>
			<EstimateForm />
			<div className="estimate-container" onClick={click}></div>
		</div>
	);
}
