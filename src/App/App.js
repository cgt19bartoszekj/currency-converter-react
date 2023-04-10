import { useState } from 'react';
import '../index.css';
import Form from "./Form";

function App() {
	const [result, setNewResult] = useState(0);

	const calculateResult = (rate, amount) => {
		setNewResult(result => amount * rate);
	};

	return (
		<Form
			calculateResult={calculateResult}
			result={result}
		>
		</Form>
	);
}

export default App;
