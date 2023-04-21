import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const FooterTag = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  //background-color: ${props => (props.theme.footer.backgroundColor)};
  background: ${props => (props.theme.footer.background)};
  border-top: 1px groove ${props => (props.theme.header.bottomBorder)};

  ${device.mobile} {
    position: static;
  }
`;

export const AddressTag = styled.address`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  color: ${props => (props.theme.footer.textColor)};

  ${device.mobile} {
    flex-direction: column;
  }

`;
