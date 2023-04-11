import "../index.css";
import { useResult } from "./useResult";
import { Form } from "./Form";

function App() {
  const { result, calculateResult } = useResult();

  return (
    <Form
      calculateResult={calculateResult}
      result={result}
    />
  );
}

export default App;
