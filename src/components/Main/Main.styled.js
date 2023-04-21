import { device } from 'utils/mediaQueries';

const { default: styled } = require('@emotion/styled');

export const MainStyle = styled.main`
  min-height: 100vh;

  padding-bottom: 44px;
  padding-top: 54px;

  background-size: 21.6px 21.6px;
  background-repeat: repeat;
  background-position: 10px 1px, 20.4px 11.4px;
  background-color: ${props => (props.theme.main.background)};
  background-image: 
    radial-gradient(circle, ${props => (props.theme.main.backgroundDots)} 3px, transparent 3px), 
    radial-gradient(circle, ${props => (props.theme.main.backgroundDots)} 3px, transparent 3px);

  ${device.mobile} {
    padding-top: 120px;
  }
`;
