import AmountCounter from "../AmountCounter";
import Price from "../Price";
import { Container, ContainerProduct, ContainerText, Image, Title } from "./styled";

export default function CartListItem({ product }) {
  const { id, title, price, description, category, image, amount } = product;

  return (
    <Container>
      <ContainerProduct>
        <Image src={image} />
        <ContainerText>
          <Title>{title}</Title>
          <p>Em estoque</p>
          <AmountCounter product={product} />
        </ContainerText>
      </ContainerProduct>
      <Price price={price * amount} />
    </Container>
  );
}
