import { useState } from "react";
import "./style.css";
import currencies from "../currencies";


const INPUT_MAX_LENGTH = 14;

const Form = ({ children, calculateResult }) => {
	const [exchange, setExchange] = useState(0.21);
	const [amount, setAmount] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();

		calculateResult(exchange, amount);
	};

	return (
		<form
			onSubmit={onFormSubmit}
			className="form"
		>
			<fieldset className="form__fieldset">
				<legend className="form__legend">
					Przelicznik walutowy
				</legend>
				<input
					className="form__input"
					type="number"
					value={amount}
					onChange={({ target }) =>
						setAmount(target.value.slice(0, INPUT_MAX_LENGTH))}
				/>
				<span className="form__mainCurrency">
					PLN
				</span>
				<div>
					{children}
					<select
						className="form__select"
						onChange={({ target }) => setExchange(target.value)}
					>
						{currencies.map(currency =>
							<option
								key={currency.key}
								value={currency.exchange}
							>
								{currency.name}
							</option>
						)}
					</select>
				</div>
				<button className="form__button">
					Oblicz
				</button>
				<div class="form__information">
					<p>
						Kursy walut na dzień 23.02.2023r.
					</p>
				</div>
			</fieldset>
		</form>
	);
};

export default Form;