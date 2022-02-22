import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blob from "./Components/Blob";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="blob/:invoiceId" element={<Blob />} />
    </Routes>
    <span
      style={{
        textAlign: "center",
        paddingBottom: "2em",
        alignSelf: "end",
        width: "90vw",
        display: "block",
      }}
    >
      Finlay | 2022
    </span>
  </BrowserRouter>,
  document.getElementById("root")
);
