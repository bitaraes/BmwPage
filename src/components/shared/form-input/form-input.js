import React from "react";

import "./style.css";

export default function FormInput({ type, id, placeholder, name }) {
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
