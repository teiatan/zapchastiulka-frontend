import styled from "@emotion/styled";
import { device } from "utils/mediaQueries";

export const Div = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    width: 200px;
    min-height: 320px;
    background-color: ${props => props.theme.header.backgroundColor};

    ${device.mobile} {
        top: 72px;
    }
`;