import styled from '@emotion/styled';
import { device } from "utils/mediaQueries";

export const Tag = styled.div`

`;
  
export const Form = styled.form`
    display: flex;
    align-items: center;
    background-color: ${props => (props.theme.header.formBackground)};
    border-radius: 20px;
    border: 1px solid ${props => (props.theme.header.formBorder)};
    overflow: hidden;

    ${device.smallerThanMobile} {
        max-width: 200px;
    }
`;
  
export const Button = styled.button`
    display: inline-block;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background-color: ${props => (props.theme.header.formBackground)};
    cursor: pointer;
    &:hover {
        opacity: 1;
    }

`;
  
export const Label = styled.label`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`;
  
export const Input = styled.input`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
    background-color: ${props => (props.theme.header.formBackground)};
    color: ${props => (props.theme.header.formText)};

    &::placeholder {
    font: inherit;
    font-size: 18px;

    ${device.smallerThanMobile} {
        font-size: 13px;
        text-justify: center;
    }
  }
`;
