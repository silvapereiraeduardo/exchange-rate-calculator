import React from "react";

import { Container, Select, Input } from "./styles";

export default function UpdateSection(props) {
  const {
    currency,
    amount,
    changeCurrency,
    changeAmount,
    disabledAmount = false
  } = props;

  const currencyOptions = [
    "AED",
    "ARS",
    "AUD",
    "BGN",
    "BRL",
    "BSD",
    "CAD",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CZK",
    "DKK",
    "DOP",
    "EGP",
    "EUR",
    "FJD",
    "GBP",
    "GTQ",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "ISK",
    "JPY",
    "KRW",
    "KZT",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PAB",
    "PEN",
    "PHP",
    "PKR",
    "PLN",
    "PYG",
    "RON",
    "RUB",
    "SAR",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "TWD",
    "UAH",
    "USD",
    "UYU",
    "ZAR"
  ];

  const onChangeCurrency = event => {
    const value = event.target.value;

    if (changeCurrency) {
      changeCurrency(value);
    }
  };

  const onChangeAmount = event => {
    const value = Number(event.target.value || 0);

    if (changeAmount && !disabledAmount) {
      changeAmount(value);
    }
  };

  return (
    <Container className="update-section">
      <Select
        name="currency"
        className="currency"
        value={currency}
        onChange={value => onChangeCurrency(value)}
      >
        {currencyOptions.map((option, key) => (
          <option key={key} value={option}>
            {option}
          </option>
        ))}
      </Select>

      <Input
        type="number"
        name="amount"
        className="amount"
        value={amount}
        onChange={value => onChangeAmount(value)}
      />
    </Container>
  );
}
