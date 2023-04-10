import { ResultValue } from "./styled";

export const Result = ({ result }) => (
	<ResultValue>
		{result.toFixed(2)}
	</ResultValue>
);
