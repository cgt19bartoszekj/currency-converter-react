import { useState } from "react";
import "./style.css"

const currencies = [
	{
		key: 0,
		name: "EUR",
		exchange: 0.21
	},
	{
		key: 1,
		name: "USD",
		exchange: 0.22
	},
	{
		key: 2,
		name: "GBP",
		exchange: 0.19
	}
];

const Form = ({ children, calculateResult }) => {

	const [selectValue, setSelectValue] = useState(0.21);
	const [inputValue, setInputValue] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();
		calculateResult(selectValue, inputValue);
	};

	const handleSelect = ({ target }) => {
		setSelectValue(target.value)
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
					value={inputValue}
					onChange={({ target }) => setInputValue(inputValue => target.value)}
				/>
				<span className="form__mainCurrency">
					PLN
				</span>
				<div>
					{children}
					<select
						className="form__select"
						onChange={handleSelect}>
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
			</fieldset>
		</form>
	);
};

export default Form;