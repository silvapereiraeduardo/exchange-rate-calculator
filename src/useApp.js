import { useState, useCallback, useEffect } from "react";

export default function useApp() {
  const [currency, setCurrency] = useState("BRL");
  const [responseCurrency, setResponseCurrency] = useState("USD");

  const [unitAmount, setUnitAmount] = useState(0);
  const [amount, setAmount] = useState(1);
  const [responseAmount, setResponseAmount] = useState(0);
  const [rates, setRates] = useState(0);

  const onSwap = useCallback(() => {
    const currentCurrency = currency;
    const currentResponseCurrency = responseCurrency;

    setCurrency(currentResponseCurrency);
    setResponseCurrency(currentCurrency);
  }, [currency, responseCurrency]);

  // const calculateQuote = useCallback(() => {
  // }, [amount, currency, rates, unitAmount, responseCurrency]);

  useEffect(() => {
    console.log(currency);
  }, [currency]);

  const state = {
    currency,
    responseCurrency,
    amount,
    unitAmount,
    responseAmount
  };

  const methods = {
    setCurrency,
    setAmount,
    setResponseCurrency,
    onSwap
  };

  return {
    state,
    methods
  };
}
