import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Op from "./op";

ReactDOM.render(
  <>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="operation" element={<Op />} />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
