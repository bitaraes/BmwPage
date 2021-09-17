import React from "react";

import "./style.css";

export default function StickyFooter() {
	return (
		<footer className="sticky-footer">
			<div className="whatsapp-logo">
				<i className="icon-whatsapp"></i>
			</div>
			<div className="phone-number">
				<i className="icon-telefone"></i>
				<span>(21) 2042-4442</span>
			</div>
		</footer>
	);
}
