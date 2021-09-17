import React from "react";

import "./style.css";

export default function Button({ text, color, icon }) {
	return (
		<>
			<button className={`button ${color}`}>
				{icon ? <i className={`icon-${icon} button__icon`}></i> : null}
				<span>{text}</span>
			</button>
		</>
	);
}
