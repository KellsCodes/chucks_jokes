import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";

//pages import
import Home from "./pages/home/index.jsx";
import Quote from "./pages/single_quote/index.jsx";

export default function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.NOT_FOUND} element={<>Page Not found</>} />
    </Routes>
  );
}
