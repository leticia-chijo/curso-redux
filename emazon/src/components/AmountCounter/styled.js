import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  height: 30px;
  width: fit-content;
  border: 2px solid ${colors.primary};
  border-radius: 20px;
  display: flex;
  margin-top: 8px;
`;

export const Input = styled.input`
  all: unset;
  width: 24px;
  text-align: center;
`;

export const Button = styled.button`
  all: unset;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.textPrimary};
  padding: 0 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
