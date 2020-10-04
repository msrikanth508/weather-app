import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }
  body {
    font-size: 16px;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyles;
