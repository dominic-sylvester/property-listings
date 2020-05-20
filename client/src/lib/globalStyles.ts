import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}


  :root {
     --color-dark: #3d3d3d;
     --color-primary: #e74c3c;
     --color-gray: #ececec;
     --color-dark-gray: #6c6c6c;
  }

  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--color-dark);
    font-weight: 400;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    color: var(--color-dark);
  }

  h1 {
    font-size: 1.6rem;
  }

  h2 {
    font-size: 1.4rem;
  }

  button, input, textarea {
    font-family: 'Poppins', sans-serif;
  }
 
`;
