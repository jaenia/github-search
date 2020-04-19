import { createGlobalStyle } from 'styled-components';

const colors = {
  lighterPurple: '#ac53f2',
  gray: '#5c5c5c',
  white: '#fff',
  black: '#000',
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font-size: 20px;
    font-family: 'Raleway', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyle, colors };
