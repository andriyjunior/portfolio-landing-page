import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "sint" 0;
  }

  h1,h2,h3,h4,p{
    padding: 0;
    margin: 0;
  }

  a{
    color: inherit;
    text-decoration: none;
    transition-property: background-color border width; 
    transition-duration: .1s ;
    transition-timing-function: ease-out;

    &:focus {
      outline: 0; 
    }
  }

  button {
    background: 'none';
    cursor: pointer;
    transition-property: background-color border width; 
    transition-duration: .1s ;
    transition-timing-function: ease-out;


    &:focus {
      outline: 0; 
    }
  }
`;
