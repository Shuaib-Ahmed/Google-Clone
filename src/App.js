import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Iamge from "./Pages/Image";
import News from "./Pages/News";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<Search />} />
          <Route path="/image" element={<Iamge />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
