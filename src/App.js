import React from "react";
import GlobalStyle from "./styles/global";

import useApp from "./useApp";

import UpdateSection from "./components/UpdateSection";
import ResponseSection from "./components/ResponseSection";
import MoneyImage from "./assets/money.png";

// import { Container } from './styles';

export default function App() {
  const { state, methods } = useApp();
  const {
    currency,
    amount,
    unitAmount,
    responseCurrency,
    responseAmount
  } = state;
  const { setCurrency, setAmount, setResponseCurrency, onSwap } = methods;

  return (
    <div className="App">
      <GlobalStyle />

      <header>
        <img src={MoneyImage} alt="Imagem do logo" className="logo" />
        <h1>Exchange Rate Calculator</h1>
        <p>Choose the currency and the amounts to get the exchange rate</p>
      </header>

      <main>
        <UpdateSection
          currency={currency}
          amount={amount}
          changeCurrency={setCurrency}
          changeAmount={setAmount}
        />

        <ResponseSection
          onSwap={onSwap}
          unitAmount={unitAmount}
          currency={currency}
          responseCurrency={responseCurrency}
        />

        <UpdateSection
          currency={responseCurrency}
          amount={responseAmount}
          changeCurrency={setResponseCurrency}
          disabledAmount={true}
        />
      </main>

      <footer>Com ❤ Eduardo Pereira</footer>
    </div>
  );
}
