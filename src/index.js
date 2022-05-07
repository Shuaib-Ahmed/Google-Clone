import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import SearchContextProvider from "./Contexts/SearchContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SearchContextProvider>
    <App />
  </SearchContextProvider>
);
