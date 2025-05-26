import emptyCart from "../../assets/empty-cart.png";
import { Container, Image, Text } from "./styled";

export default function EmptyCart() {
  return (
    <Container>
      <Image src={emptyCart} />
      <Text>Não há nenhum item no seu carrinho</Text>
    </Container>
  );
}
