import { Container, Input, Button, Icon } from "./styled";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import trash from "../../assets/trash-can.png";
import { useState } from "react";

export default function AmountCounter() {
  const [amount, setAmount] = useState(1);

  return (
    <Container>
      <Button onClick={() => amount > 1 && setAmount(amount - 1)}>
        <Icon src={amount === 1 ? trash : minus} />
      </Button>
      <Input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Button onClick={() => setAmount(amount + 1)}>
        <Icon src={plus} />
      </Button>
    </Container>
  );
}
