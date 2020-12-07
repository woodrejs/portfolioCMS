import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "lightgallery.js/dist/css/lightgallery.css";

const theme = {
  colors: {
    dark: "#150E0E",
    light: "#DAD7D7",
    bck: "#f5f5f5",
  },
  size: {
    xxs: "10.24px",
    xs: "12.8px",
    s: "16px",
    m: "20px",
    l: "25px",
    xl: "31.25px",
    xxl: "39.06px",
    xxxl: "48.83px",
    xxxxl: "61.04px",
    xxxxxl: "76.29px",
    xxxxxxl: "95.37px",
    xxxxxxxl: "119.21px",
    xxxxxxxxl: "149.01px",
    xxxxxxxxxl: "228px",
    xxxxxxxxxxl: "282.83px",
  },
};
export const URL = "https://portfolio-szczepanski.herokuapp.com";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
