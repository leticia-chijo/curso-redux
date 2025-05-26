import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${colors.secondary};
  padding: 8px;
  position: relative;
  &:hover {
    border: 1px solid white;
    border-radius: 4px;
  }
`;

export const Icon = styled.img`
  height: 36px;
  width: 48px;
`;

export const Text = styled.p`
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 12px 0 0 4px;
`;

export const ContainerItems = styled.div`
  width: 20px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 14px;
  left: 26px;
`;

export const TextItems = styled.p`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: bold;
`;
