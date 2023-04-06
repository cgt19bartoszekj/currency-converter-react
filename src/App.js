import { useState } from 'react';
import './index.css';
import Container from './Container';
import Form from "./Form";

function App() {
	const [result, setNewResult] = useState(0);

	const calculateResult = (rate, amount) => {
		setNewResult(result => amount * rate);
	};

	return (
		<Container>
			<Form
				calculateResult={calculateResult}
				result={result}
			>
			</Form>
		</Container>
	);
}

export default App;
