import { useState } from "react";
import { Result } from "./Result";
import { Clock } from "./Clock";
import { useRatesData } from "./useRatesData";
import { useResult } from "./useResult";
import {
  Wrapper,
  Fieldset,
  Legend,
  Input,
  Output,
  Select,
  Button,
  Information,
  Fail,
  Loading
} from "./styled";

const INPUT_MAX_LENGTH = 14;

export const Form = () => {
  const [inputCurrency, setInputCurrency] = useState("EUR");
  const [outputCurrency, setOutputCurrency] = useState("EUR");
  const [amount, setAmount] = useState();

  const ratesData = useRatesData();
  const { calculateResult, result } = useResult();

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(
      ratesData,
      inputCurrency,
      outputCurrency,
      amount
    );
  };

  return (
    <Wrapper onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>
          Przelicznik walut
        </Legend>
        <Clock />
        {ratesData.status === "loading" ? (
          <Loading>
            Prosimy czekać, pobieramy aktualne kursy walut.
          </Loading>
        ) : ratesData.status === "error" ? (
          <Fail>
            Coś poszło nie tak. Sprawdź swoje połączenie z
            internetem lub spróbuj ponownie później.
          </Fail>
        ) : (
          <>
            <Input
              type="number"
              value={amount}
              onChange={({ target }) =>
                setAmount(target.value.slice(0, INPUT_MAX_LENGTH))
              }
            />
            <Select
              value={inputCurrency}
              onChange={({ target }) =>
                setInputCurrency(target.value)
              }
            >
              {Object.keys(ratesData.rates).map(
                (inputCurrency) => (
                  <option
                    value={inputCurrency}
                    key={inputCurrency}
                  >
                    {inputCurrency}
                  </option>
                )
              )}
            </Select>
            <Output>
              <Result result={result} />
              <Select
                value={outputCurrency}
                onChange={({ target }) =>
                  setOutputCurrency(target.value)
                }
              >
                {Object.keys(ratesData.rates).map(
                  (outputCurrency) => (
                    <option
                      value={outputCurrency}
                      key={outputCurrency}
                    >
                      {outputCurrency}
                    </option>
                  )
                )}
              </Select>
            </Output>
            <Button>
              Przelicz
            </Button>
            <Information>
              <p>
                Kursy walut na dzień {ratesData.date}.
              </p>
            </Information>
          </>
        )}
      </Fieldset>
    </Wrapper>
  );
};
