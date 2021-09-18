import React from "react";
import Button from "../shared/button/button";
import FormInput from "../shared/form-input/form-input";

import "./style.css";

export default function Form() {
	const inputs = [
		{ type: "text", name: "name", placeholder: "Nome" },
		{ type: "email", name: "email", placeholder: "E-mail" },
		{ type: "phone", name: "phone", placeholder: "Telefone" },
		{
			type: "select",
			name: "model",
			placeholder: "Modelo",
			options: [
				"Série 1",
				"Série 2",
				"Série 3",
				"Série 4",
				"M3",
				"M5",
				"X2",
				"Z4",
			],
		},
		{ type: "textarea", name: "message", placeholder: "Mensagem" },
	];
	return (
		<>
			<div className="form-container">
				<div className="form-title">
					<i className="icon-carro"></i>
					<h3>Solicitar cotação</h3>
				</div>
				<form>
					{inputs.map((current, index) => {
						return (
							<FormInput
								key={index}
								type={current.type}
								id={`input-${index}`}
								placeholder={current.placeholder}
								name={current.name}
								options={current.options}
								required
							/>
						);
					})}
					<div className="privacy-checkbox">
						<input type="checkbox" id="accept" required></input>
						<label htmlFor="accept">
							Aceito a <span>Política de Privacidade</span>
						</label>
					</div>
					<div className="submit-button">
						<Button text="Enviar" color="blue" />
					</div>
				</form>
			</div>
		</>
	);
}
