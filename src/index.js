import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import store from "./Store/Store";

// todo - так обнуляем стили
const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0; 
  box-sizing: border-box;
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
