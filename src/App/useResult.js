import { useState } from "react";

export const useResult = () => {
	const [result, setResult] = useState(0);

	const calculateResult = (rate, amount) => {
		setResult((result) => amount * rate);
	};

	return { result, calculateResult };
};
