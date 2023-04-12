import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 35px;
  padding: 40px;
  background-image: url(https://i.postimg.cc/Pq03Mkfh/money-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #e8eaed;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;