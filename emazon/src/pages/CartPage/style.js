import styled from "styled-components";
import { colors } from "../../constants/colors";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 70px - 20px - 20px);
  background-color: ${colors.background};
  padding: 20px;
  padding-top: 90px;
`;

export const ItemsContainer = styled.div`
  background-color: white;
  width: 90%;
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  & > :nth-child(2) {
    border-top: 1px solid ${colors.border};
  }
  & > h1 {
    align-self: flex-start;
    color: ${colors.textPrimary};
    font-size: 32px;
    padding-left: 36px;
  }
  & > :last-child {
    display: flex;
    align-self: flex-end;
    padding: 16px 36px 16px 0;
    gap: 12px;
  }
`;
