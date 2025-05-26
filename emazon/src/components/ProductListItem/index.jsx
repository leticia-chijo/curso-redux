import Price from "../Price";
import { Container, Description, Image, InfoContainer, Title, Button } from "./styled";

const tshirt = "https://cdn.aboutstatic.com/file/images/341b3edb7974a23f568ba95a2c003842.png";

export default function ProductListItem() {
  return (
    <Container>
      <Image src={tshirt} />
      <InfoContainer>
        <Title>Camiseta</Title>
        <Description>Essa camiseta é muito bonita e interessante, foi comprada várias vezes</Description>
        <Price />
        <Button onClick={() => alert("Carrinho")}>Adicionar ao Carrinho</Button>
      </InfoContainer>
    </Container>
  );
}
