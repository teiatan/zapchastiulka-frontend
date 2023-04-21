import styled from '@emotion/styled';

export const Div = styled.div`
    display: flex;
    justify-content: center;
    gap: 5px;
    padding-bottom: 30px;
`;

export const Button = styled.button`
    border-radius: 30px;
    padding: 10px;
    min-width: 30px;
    color: ${props => props.theme.pagination.text};
    background-color: ${props => props.theme.pagination.background};
    border: none;
    //box-shadow: 2px 3px 5px lightgrey;
    cursor: pointer;

    :disabled {
        opacity: 0.5;
        }
`;