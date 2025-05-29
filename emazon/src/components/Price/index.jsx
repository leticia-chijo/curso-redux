import { PriceBig, PriceContainer, PriceSmall } from "./styled";

export default function Price({ price }) {
  const priceToString = Math.round(price * 100).toString();
  const len = priceToString.length;
  const bigger = priceToString.substring(0, len - 2);
  const smaller = priceToString.substring(len - 2, len);

  return (
    <PriceContainer>
      <PriceSmall>R$</PriceSmall>
      <PriceBig>{bigger || "0"}</PriceBig>
      <PriceSmall>{smaller || "0"}</PriceSmall>
    </PriceContainer>
  );
}
