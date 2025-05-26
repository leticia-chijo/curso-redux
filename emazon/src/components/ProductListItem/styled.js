import styled from "styled-components";
import { colors } from "../../constants/colors";

export const Container = styled.div`
  width: 250px;
  height: 500px;
  border: 1px solid ${colors.border};
  border-radius: 4px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 4px 4px 0 0;
`;

export const InfoContainer = styled.div`
  height: calc(100% - 250px);
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 12px;
`;

export const Title = styled.h2`
  color: ${colors.textPrimary};
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Description = styled.h3`
  color: ${colors.textSecondary};
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Button = styled.button`
  all: unset;
  height: 34px;
  cursor: pointer;
  border-radius: 20px;
  background-color: ${colors.primary};
  color: ${colors.primaryContrast};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding: 0 16px;
  &:hover {
    background-color: ${colors.primaryDark};
  }
`;
