import styled from 'styled-components';

export const Button = styled.button`
    padding: 10px 20px;
    cursor: pointer;
    color: white;

    background-color: ${props => props.primary ? '#5a77d0' : '#ababdf'};
    border: ${props => props.primary ? 'none' : '1px solid'}
`