import Price from "../Price";
import { Container, Description, Image, InfoContainer, Title, Button } from "./styled";

export default function ProductListItem({ product }) {
  const { id, title, price, description, category, image } = product;

  return (
    <Container>
      <Image src={image} />
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price price={price} />
        <Button onClick={() => alert("Carrinho")}>Adicionar ao Carrinho</Button>
      </InfoContainer>
    </Container>
  );
}
