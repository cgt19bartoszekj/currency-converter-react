import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Clock } from "./Clock";
import {
  Wrapper,
  Fieldset,
  Legend,
  Input,
  Output,
  Select,
  Button,
  Information
} from "./styled";

const INPUT_MAX_LENGTH = 14;

export const Form = ({ calculateResult, result }) => {
  const [inputValue, setInputValue] = useState(1);
  const [outputValue, setOutputValue] = useState(1);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(inputValue, outputValue, amount);
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Przelicznik walut
        </Legend>
        <Clock />
        <Input
          type="number"
          value={amount}
          onChange={({ target }) =>
            setAmount(target.value.slice(0, INPUT_MAX_LENGTH))
          }
        />
        <Select onChange={({ target }) => setInputValue(target.value)}>
          {currencies.map((currency) => (
            <option value={currency.value}>
              {currency.name}
            </option>
          ))}
        </Select>
        <Output>
          <Result result={result} />
          <Select onChange={({ target }) => setOutputValue(target.value)}>
            {currencies.map((currency) => (
              <option value={currency.value}>
                {currency.name}
              </option>
            ))}
          </Select>
        </Output>
        <Button>
          Przelicz
        </Button>
        <Information>
          <p>
            Kursy walut na dzień 23.02.2023r.
          </p>
        </Information>
      </Fieldset>
    </Wrapper>
  );
};
