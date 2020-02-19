import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: #F4F4F4;
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    color: #5FBAA7;
  }

  header,
  main,
  footer {
    text-align: center;
    width: 90%;
    max-width: 500px;
    margin: 0 auto 70px;
  }

  img.logo {
    width: 150px;
  }
`;
