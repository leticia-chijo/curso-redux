import { useNavigate } from "react-router-dom";
import cart from "../../assets/shopping-cart.png";
import { Container, Icon, TextItems, Text, ContainerItems } from "./styled";

export default function CartButton() {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/cart")}>
      <ContainerItems>
        <TextItems>0</TextItems>
      </ContainerItems>
      <Icon src={cart} />
      <Text>Carrinho</Text>
    </Container>
  );
}
