import React from "react";

import "./style.css";

export default function FormInput({ type, id, placeholder, name, options }) {
	if (type === "select") {
		return (
			<div className="input-container">
				<select
					className="form-control-input"
					placeholder={placeholder}
					name={name}
					required
				>
					<option>{placeholder}</option>
					{options.map((current, index) => {
						return <option key={index}>{current}</option>;
					})}
				</select>
			</div>
		);
	}
	if (type === "textarea") {
		return (
			<div className="input-container">
				<textarea
					className="form-control-input"
					placeholder={placeholder}
					name={name}
					id={id}
					rows="2"
					required
				></textarea>
				<label htmlFor={id}>{placeholder}</label>
			</div>
		);
	}

	return (
		<div className="input-container">
			<input
				className="form-control-input"
				placeholder={placeholder}
				name={name}
				id={id}
				type={type}
				required
			></input>
			<label htmlFor={id}>{placeholder}</label>
		</div>
	);
}
