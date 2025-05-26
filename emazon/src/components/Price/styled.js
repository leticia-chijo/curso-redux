import styled from "styled-components";
import { colors } from "../../constants/colors";

export const PriceContainer = styled.div`
  display: flex;
`;

export const PriceSmall = styled.p`
  color: ${colors.textPrimary};
  font-size: 16px;
`;

export const PriceBig = styled.p`
  color: ${colors.textPrimary};
  font-size: 30px;
  line-height: 20px;
  padding: 0 2px;
`;
