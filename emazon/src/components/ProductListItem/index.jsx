import { useDispatch } from "react-redux";
import Price from "../Price";
import { Container, Description, Image, InfoContainer, Title, Button } from "./styled";
import { addItemToCart } from "../../redux/cartSlice";

export default function ProductListItem({ product }) {
  const { id, title, price, description, category, image } = product;
  const dispatch = useDispatch();

  return (
    <Container>
      <Image src={image} />
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price price={price} />
        <Button onClick={() => dispatch(addItemToCart(product))}>Adicionar ao Carrinho</Button>
      </InfoContainer>
    </Container>
  );
}
