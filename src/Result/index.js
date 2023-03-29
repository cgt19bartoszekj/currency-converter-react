import "./style.css"

const Result = ({ result }) => {

	return (
		<span className="result">
			{result.toFixed(2)}
		</span>
	);
};

export default Result;