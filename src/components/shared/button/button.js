import React from "react";

import "./style.css";

export default function Button({ text, color, icon }) {
	return (
		<>
			<button className={`button ${color}`}>
				<i className={`icon-${icon} button__icon`}></i>
				{text}
			</button>
		</>
	);
}
