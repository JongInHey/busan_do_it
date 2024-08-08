import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const colors = {
  point: "#58a6ff",
  gradient: "#a5cefa",
};

export const spacing = {
  side: "80px",
  taside: "40px",
  moSide: "10px",
  top: "70px",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }
    
    body {
        font-family: "Noto Sans KR", sans-serif;
        background-color: white;
        color: #212121;
        letter-spacing: -1px;
        word-break: keep-all;
    }

    img {
      width: 100%;
      display: block;
    }

    a {
        text-decoration: none;
        color: #212121;
    }
`;
