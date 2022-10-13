import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, NotFound404, LiftersProductPage, About } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/lifters" element={<LiftersProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
