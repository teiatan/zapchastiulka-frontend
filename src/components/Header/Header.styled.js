import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  //background-color: ${props => (props.theme.header.backgroundColor)};
  z-index: 10;
  //background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet, red);
  background: #C6FFDD;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
  background: ${props => (props.theme.header.background)}; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-bottom: 1px groove ${props => (props.theme.header.bottomBorder)};

`;

export const CoverDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  color: ${props => (props.theme.header.textColor)};

  ${device.mobile} {
    //flex-direction: column;
    font-size: 10px;
  }

`;

export const MobileMenuButton = styled.button`
  padding: 0;
  background-color: inherit;
  border: none;
  cursor: pointer;

  ${device.biggerThanMobile} {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`

  ${device.mobile} {
    display: none;
    position: absolute;
    top: 72px;
    right: 0;
    background-color: ${props => props.theme.header.backgroundColor};
    width: 260px;

  }
`;

export const MobileMenuInsideContainer = styled.div`
  display: flex;
  gap: 10px;

  ${device.mobile} {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding: 10px;
    
  }
`;

export const HeaderSpan = styled.span`
display: none;
  ${device.mobile}{
    display: inline;
    margin-left: 10px;
    font-size: 15px;
    color: ${props => props.theme.header.textColor};
    vertical-align: 35%;
  }
`;

