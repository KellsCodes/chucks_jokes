import React from "react";
import { Routes, Route } from "react-router-dom";
import * as ROUTES from "./routes/routes";

//pages import
import Home from "./pages/home/index.jsx";
// import Quote from "./pages/single_quote/index.jsx";

export default function App() {
  return (
    <Routes>
      <Route exact path={ROUTES.HOME} element={<Home />} />
      <Route path={"/about"} element={<>About</>} />
      {/* <Route path={ROUTES.PRODUCTION+"/index.html"} element={<Home />} /> */}
      <Route path={ROUTES.NOT_FOUND} element={<>Page not found.</>} />
    </Routes>
  );
}

//"webpack -d && copy src\\index.html dist\\index.html /y && webpack-dev-server --content-base src --inline --port 3000"