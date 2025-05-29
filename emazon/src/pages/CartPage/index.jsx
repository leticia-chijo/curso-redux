import { useSelector } from "react-redux";
import CartListItem from "../../components/CartListItem";
import Price from "../../components/Price";
import { ItemsContainer, PageContainer } from "./style";
import EmptyCart from "../../components/EmptyCart";
import { selectCartTotal } from "../../redux/cartSelectors";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector(selectCartTotal);

  return (
    <PageContainer>
      <ItemsContainer>
        <h1>Carrinho de compras</h1>
        {cartItems.lenght === 0 && <EmptyCart />}
        {cartItems.map((prod) => (
          <CartListItem key={prod.id} product={prod} />
        ))}
        <div>
          <p>Total: </p>
          <Price price={total} />
        </div>
      </ItemsContainer>
    </PageContainer>
  );
}
