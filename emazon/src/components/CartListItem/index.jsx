import AmountCounter from "../AmountCounter";
import Price from "../Price";
import { Container, ContainerProduct, ContainerText, Image, Title } from "./styled";

const tshirt = "https://cdn.aboutstatic.com/file/images/341b3edb7974a23f568ba95a2c003842.png";

export default function CartListItem() {
  return (
    <Container>
      <ContainerProduct>
        <Image src={tshirt} />
        <ContainerText>
          <Title>Camiseta Preta Bonita</Title>
          <p>Em estoque</p>
          <AmountCounter />
        </ContainerText>
      </ContainerProduct>
      <Price />
    </Container>
  );
}
