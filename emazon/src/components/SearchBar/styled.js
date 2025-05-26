import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  all: unset;
  height: 32px;
  width: 500px;
  border-radius: 4px 0 0 4px;
  padding: 4px 12px;
  background-color: white;
`;

export const Button = styled.button`
  all: unset;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${colors.primaryDark};
  }
`;

export const Icon = styled.img`
  height: 20px;
  width: 20px;
`;
