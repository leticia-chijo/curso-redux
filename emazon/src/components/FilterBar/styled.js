import styled from "styled-components";
import { colors } from "../../constants/colors";
import { Checkbox, Slider } from "@mui/material";

export const Container = styled.div`
  width: 250px;
  min-width: 250px;
  min-height: calc(100vh - 70px - 20px - 20px);
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: fixed;
  top: 90px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.textPrimary};
  margin: 8px 0;
`;

export const ContainerCheck = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: -8px;
  &:hover {
    p {
      color: ${colors.primaryDark};
    }
  }
`;

export const Check = styled(Checkbox)`
  &.Mui-checked svg {
    color: ${colors.range};
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${colors.textPrimary};
`;

export const ContainerSlider = styled.div`
  display: flex;
  gap: 12px;
`

export const RangeSlider = styled(Slider)`
  color: ${colors.range};
  .MuiSlider-rail {
    background-color: gray;
  }
`;

export const Button = styled.button`
  all: unset;
  height: 30px;
  width: fit-content;
  padding: 0 12px;
  border: 1px solid gray;
  border-radius: 15px;
  color: gray;
  cursor: pointer;
`;
