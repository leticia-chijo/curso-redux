import { useDispatch, useSelector } from "react-redux";
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
import { selectCategories } from "../../redux/filterSelectors";
import { toggleCategory } from "../../redux/filterSlice";

export default function FilterBar() {
  const categories = useSelector(selectCategories);
  const selectedCategories = useSelector((state) => state.filters.selectedCategories);
  const dispatch = useDispatch();

  const handleCheck = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <Container>
      <Title>Categorias</Title>

      {categories.map((cat) => (
        <ContainerCheck key={cat} onClick={() => handleCheck(cat)}>
          <Check checked={selectedCategories.includes(cat)} />
          <Text>{cat}</Text>
        </ContainerCheck>
      ))}

      <Title>Preço</Title>
      <Text>R$20 – R$50</Text>
      <ContainerSlider>
        <RangeSlider value={[20, 50]} color={colors.range} min={0} max={100} sx={{ width: "75%" }} />
      </ContainerSlider>
    </Container>
  );
}
