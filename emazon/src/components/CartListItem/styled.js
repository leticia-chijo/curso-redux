import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  width: 90%;
  background-color: white;
  padding: 20px 12px;
  border-bottom: 1px solid ${colors.border};
  display: flex;
  justify-content: space-between;
`;

export const ContainerProduct = styled.div`
  display: flex;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 12px;
  p {
    color: green;
    font-size: 14px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const Title = styled.h2`
  color: ${colors.textPrimary};
  font-size: 26px;
`;
