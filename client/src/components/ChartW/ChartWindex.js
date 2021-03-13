import React from "react";
import ReactDOM from "react-dom";
import "./ChartWindex.css";
import ChartW from "./ChartW";
import ChartWreportWebVitals from "./ChartWreportWebVitals";
import ChartW from "./ChartW";

ReactDOM.render(
  <React.StrictMode>
    <ChartW />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ChartWreportWebVitals();

export default ChartW;
