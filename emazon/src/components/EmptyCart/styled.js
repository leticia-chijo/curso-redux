import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  padding: 12px;
  border-top: none !important;
`;

export const Text = styled.p`
  color: ${colors.textSecondary};
`;

export const Image = styled.img`
  width: 200px;
  padding-left: 16px;
`;
