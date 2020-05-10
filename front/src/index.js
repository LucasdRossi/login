import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// THEME
import GlobalStyle from "./configs/globalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
