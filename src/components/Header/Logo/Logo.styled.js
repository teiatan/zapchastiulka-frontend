import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { device } from "utils/mediaQueries";

export const StyledLink = styled(Link)`
    font-weight: 700;
    text-transform: uppercase;
    ${device.mobile} {
        width: 20px;
    font-size: 10px;
    text-align: center;
  }

`;