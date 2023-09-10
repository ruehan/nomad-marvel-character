import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.background};
        cursor: url('../icons8-spiderman-24.png'), auto;
    }
`;

