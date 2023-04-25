import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const Button = styled.button`
  padding: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;

  ${device.biggerThanMobile} {
    display: none;
  }
`;