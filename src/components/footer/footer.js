import React from "react";

import "./style.css";
import logoBmw from "../../assets/imgs/logos/logo-bmw-rio.svg";

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__text">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed a elementum orci, vitae commodo nibh. In vitae
						convallis nisl. Morbi rhoncus mattis purus sed commodo.
						Integer rhoncus ex risus. Proin efficitur elit nunc, ut
						pulvinar massa egestas in. Fusce quis quam viverra,
						pretium quam ac, consectetur lectus.
					</p>
				</div>
				<div className="footer__copyright">
					<img
						src={logoBmw}
						alt="BMW Logo"
						className="copyright__bmw-logo"
					/>
					<p>© Copyright © 2021 Lorem ipsum dolor sit amet.</p>
					<div className="copyright__by">
						<span>Feito por: </span>{" "}
						<a href="https://www.linkedin.com/in/ibitaraes/">Igor Bitarães</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
