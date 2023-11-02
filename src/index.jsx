import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { Provider } from "react-redux";
import reduxStore from "./reduxStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>
);
