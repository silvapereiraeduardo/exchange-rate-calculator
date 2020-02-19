import React from "react";

import { Container, Button, Paragrath } from "./styles";

export default function ResponseSection(props) {
  const { onSwap, unitAmount, currency, responseCurrency } = props;

  return (
    <Container className="response-section">
      <Button className="swap" onClick={() => onSwap()}>
        Swap
      </Button>
      <Paragrath className="info">
        {`1 ${currency} = ${unitAmount} ${responseCurrency}`}
      </Paragrath>
    </Container>
  );
}
