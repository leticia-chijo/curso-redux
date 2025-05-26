import { PriceBig, PriceContainer, PriceSmall } from "./styled";

export default function Price() {
  return (
    <PriceContainer>
      <PriceSmall>R$</PriceSmall>
      <PriceBig>20</PriceBig>
      <PriceSmall>02</PriceSmall>
    </PriceContainer>
  );
}
