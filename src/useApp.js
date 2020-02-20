import { useState, useCallback, useEffect } from "react";

import usePersistedState, { NUMBER_TYPE } from "./utils/usePersistedState";
import round from "./utils/round";
import api from "./services/api";

export default function useApp() {
  const [currency, setCurrency] = usePersistedState("currency", "BRL");
  const [responseCurrency, setResponseCurrency] = usePersistedState(
    "responseCurrency",
    "USD"
  );
  const [amount, setAmount] = usePersistedState("amount", 1, NUMBER_TYPE);

  const [unitAmount, setUnitAmount] = useState(0);
  const [responseAmount, setResponseAmount] = useState(0);
  const [rates, setRates] = useState([]);

  const onSwap = useCallback(() => {
    const currentCurrency = currency;
    const currentResponseCurrency = responseCurrency;

    setCurrency(currentResponseCurrency);
    setResponseCurrency(currentCurrency);
  }, [currency, responseCurrency, setCurrency, setResponseCurrency]);

  const calculate = useCallback((amount, unitAmount) => {
    const newResponseAmount = round(
      unitAmount * amount,
      2
    ).toLocaleString("pt-BR", { minimumFractionDigits: 2 });

    setResponseAmount(newResponseAmount);
  }, []);

  const getNewUnitAmount = useCallback(() => {
    return rates[responseCurrency];
  }, [rates, responseCurrency]);

  const loadRates = useCallback(currency => {
    const load = async () => {
      const { data } = await api.get(`/${currency}`);

      setRates(data.rates);
    };

    load();
  }, []);

  useEffect(() => {
    calculate(amount, unitAmount);
  }, [amount, unitAmount, calculate]);

  useEffect(() => {
    setUnitAmount(getNewUnitAmount());
  }, [rates, getNewUnitAmount]);

  useEffect(() => {
    loadRates(currency);
  }, [currency, loadRates]);

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
