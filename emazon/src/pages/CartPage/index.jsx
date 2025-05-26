import CartListItem from "../../components/CartListItem";
import Price from "../../components/Price";
import { ItemsContainer, PageContainer } from "./style";

export default function CartPage() {
  return (
    <PageContainer>
      <ItemsContainer>
        <h1>Carrinho de compras</h1>
        <CartListItem />
        <CartListItem />
        <div>
          <p>Total: </p>
          <Price />
        </div>
      </ItemsContainer>
    </PageContainer>
  );
}
