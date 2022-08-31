import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import TestContainer from "./components/testContainer/TestContainer";
import ScrollContainer from "./components/scrollContainer/ScrollContainer";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<TestContainer />} />
        <Route path="/scroll" element={<ScrollContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
