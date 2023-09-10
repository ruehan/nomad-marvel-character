import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${props => props.theme.background};
        cursor: url('../icons8-marvel-48.png'), auto;
    }
`;

