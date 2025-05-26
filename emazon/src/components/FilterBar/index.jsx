import { colors } from "../../constants/colors";
import {
  Check,
  Container,
  ContainerCheck,
  RangeSlider,
  Text,
  Title,
  Button,
  ContainerSlider,
} from "./styled";

export default function FilterBar() {
  return (
    <Container>
      <Title>Categorias</Title>

      <ContainerCheck>
        <Check />
        <Text>aaaaa</Text>
      </ContainerCheck>

      <ContainerCheck>
        <Check />
        <Text>aaaaa</Text>
      </ContainerCheck>

      <Title>Preço</Title>
      <Text>R$20 – R$50</Text>
      <ContainerSlider>
        <RangeSlider value={[20, 50]} color={colors.range} min={0} max={100} sx={{ width: "75%" }} />
      </ContainerSlider>
    </Container>
  );
}
