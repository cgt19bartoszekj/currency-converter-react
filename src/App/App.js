import { useState } from "react";
import "../index.css";
import { Form } from "./Form";

function App() {
	const [result, setResult] = useState(0);

	const calculateResult = (rate, amount) => {
		setResult((result) => amount * rate);
	};

	return (
		<Form
			calculateResult={calculateResult}
			result={result}
		/>
	);
}

export default App;
