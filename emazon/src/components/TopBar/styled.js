import styled from "styled-components";
import { colors } from "../../constants/colors";

export const BarBackground = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${colors.secondary};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
`;

export const Logo = styled.img`
  height: 32px;
  padding-top: 8px;
  cursor: pointer;
`;
