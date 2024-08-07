import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#58a6ff",
};

export const spacing = {
  side: "100px",
  taside: "50px",
  moSide: "20px",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: "Noto Sans KR", sans-serif;
        background-color: white;
        color: #222;
        letter-spacing: -1px;
        word-break: keep-all;
    }

    img {
      width: 100%;
      display: block;
    }

    a {
        text-decoration: none;
        color: #222;
    }
`;
