import { useDispatch, useSelector } from "react-redux";
import Price from "../Price";
import { Container, Description, Image, InfoContainer, Title, Button } from "./styled";
import { addItemToCart } from "../../redux/cartSlice";
import AmountCounter from "../AmountCounter";

export default function ProductListItem({ product }) {
  const { id, title, price, description, category, image } = product;
  const dispatch = useDispatch();
  const itemInCart = useSelector((state) => state.cart.cartItems.find((item) => item.id === id));

  return (
    <Container>
      <Image src={image} />
      <InfoContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price price={price} />
        {itemInCart ? (
          <AmountCounter product={itemInCart} />
        ) : (
          <Button onClick={() => dispatch(addItemToCart(product))}>Adicionar ao Carrinho</Button>
        )}
      </InfoContainer>
    </Container>
  );
}
