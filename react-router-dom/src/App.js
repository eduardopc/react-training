import React from "react";
import { BrowserRouter } from "react-router-dom";

import Router from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <header>Header da aplicação</header>
      <Router />
    </BrowserRouter>
  );
}

export default App;
