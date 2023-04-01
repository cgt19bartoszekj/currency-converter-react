import { useState } from 'react';
import './index.css';
import Container from './Container';
import Form from "./Form";
import Result from "./Result";

function App() {

	const [result, setNewResult] = useState(0);

	const calculateResult = (rate, amount) => {
		setNewResult(result => amount * rate);
	};

	return (
		<Container>
			<Form
				calculateResult={calculateResult}
			>
				<Result
					result={result}
				>
				</Result>
			</Form>
		</Container>
	);
}

export default App;
