import "./style.css";

const Result = ({ result }) => (
	<span className="result">
		{result.toFixed(2)}
	</span>
);

export default Result;