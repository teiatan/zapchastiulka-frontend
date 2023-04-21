import styled from '@emotion/styled';
import { device } from 'utils/mediaQueries';
export const GalleryStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${device.mobile} {
    justify-content: center;
  } 
`;
