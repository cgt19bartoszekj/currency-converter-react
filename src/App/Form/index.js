import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import {
	Wrapper,
	Fieldset,
	Legend,
	Input,
	MainCurrency,
	Output,
	Select,
	Button,
	Information
} from "./styled";


const INPUT_MAX_LENGTH = 14;

export const Form = ({ calculateResult, result }) => {
	const [exchange, setExchange] = useState(0.21);
	const [amount, setAmount] = useState("");

	const onFormSubmit = (event) => {
		event.preventDefault();

		calculateResult(exchange, amount);
	};

	return (
		<Wrapper onSubmit={onFormSubmit}>
			<Fieldset>
				<Legend>
					Przelicznik walut
				</Legend>
				<Clock />
				<Input
					type="number"
					value={amount}
					onChange={({ target }) =>
						setAmount(target.value.slice(0, INPUT_MAX_LENGTH))}
				/>
				<MainCurrency>
					PLN
				</MainCurrency>
				<Output>
					<Result
						result={result}
					>
					</Result>
					<Select
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
					</Select>
				</Output>
				<Button>
					Przelicz
				</Button>
				<Information>
					<p>
						Kursy walut na dzień 23.02.2023r.
					</p>
				</Information>
			</Fieldset>
		</Wrapper>
	);
};
