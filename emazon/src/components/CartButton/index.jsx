import { useNavigate } from "react-router-dom";
import cart from "../../assets/shopping-cart.png";
import { Container, Icon, TextItems, Text, ContainerItems } from "./styled";
import { useSelector } from "react-redux";

export default function CartButton() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Container onClick={() => navigate("/cart")}>
      <ContainerItems>
        <TextItems>{cartItems.length}</TextItems>
      </ContainerItems>
      <Icon src={cart} />
      <Text>Carrinho</Text>
    </Container>
  );
}
