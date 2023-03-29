import { useState } from 'react';
import './index.css';
import Container from './Container';
import Form from "./Form";
import Result from "./Result";

function App() {

	const [result, setNewResult] = useState(0);

	const calculateResult = (selectValue, inputValue) => {
		setNewResult(result => inputValue * selectValue);
	};

	return (
		<Container>
			<Form
				calculateResult={calculateResult}
			>
				<Result
					result={result}>
				</Result>
			</Form>
		</Container>
	);
}

export default App;
