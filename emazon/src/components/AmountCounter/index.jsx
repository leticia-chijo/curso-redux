import { Container, Input, Button, Icon } from "./styled";
import plus from "../../assets/plus.png";
import minus from "../../assets/minus.png";
import trash from "../../assets/trash-can.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart, changeAmount, removeItemFromCart } from "../../redux/cartSlice";

export default function AmountCounter({ product }) {
  const [amount, setAmount] = useState(product.amount);
  const dispatch = useDispatch();

  useEffect(() => {
    setAmount(product.amount);
  }, [product.amount]);

  const handleBlur = () => {
    const num = parseInt(amount);

    if (isNaN(num) || num < 1) {
      dispatch(changeAmount({ id: product.id, amount: product.amount }));
    } else {
      dispatch(changeAmount({ id: product.id, amount: num }));
    }
  };

  return (
    <Container>
      <Button onClick={() => dispatch(removeItemFromCart(product))}>
        <Icon src={amount === 1 ? trash : minus} />
      </Button>
      <Input value={amount} onChange={(e) => setAmount(e.target.value)} onBlur={handleBlur} />
      <Button onClick={() => dispatch(addItemToCart(product))}>
        <Icon src={plus} />
      </Button>
    </Container>
  );
}
