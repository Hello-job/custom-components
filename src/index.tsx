import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./module/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  HashRouter,
  useRoutes,
  Router,
} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
