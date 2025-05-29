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
import {
  selectCategories,
  selectFilteredProducts,
  selectPossiblePriceRange,
} from "../../redux/filterSelectors";
import { setPriceRange, toggleCategory } from "../../redux/filterSlice";
import { useEffect } from "react";

export default function FilterBar() {
  const categories = useSelector(selectCategories);
  const selectedCategories = useSelector((state) => state.filters.selectedCategories);

  const [minPrice, maxPrice] = useSelector(selectPossiblePriceRange);
  const priceRange = useSelector((state) => state.filters.priceRange);
  const filteredProducts = useSelector(selectFilteredProducts);

  const dispatch = useDispatch();

  const handleCheck = (category) => {
    dispatch(toggleCategory(category));
  };

  const handlePriceChange = (event, newValue) => {
    dispatch(setPriceRange(newValue));
  };

  useEffect(() => {
    if (priceRange[0] === 0 && priceRange[1] === Infinity && filteredProducts.length > 0) {
      dispatch(setPriceRange([minPrice, maxPrice]));
    }
  }, []);

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
      <Text>
        R${priceRange[0]} – R${priceRange[1]}
      </Text>
      <ContainerSlider>
        <RangeSlider
          value={priceRange}
          onChange={handlePriceChange}
          color={colors.range}
          min={minPrice}
          max={maxPrice}
          sx={{ width: "75%" }}
        />
      </ContainerSlider>
    </Container>
  );
}
