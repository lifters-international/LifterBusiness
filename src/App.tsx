import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Home, NotFound404, LiftersProductPage, FoodApiProductPage, About, FoodApi, Contact} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/lifters" element={<LiftersProductPage />} />
      <Route path="/products/food-api" element={<FoodApiProductPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/food-api" element={<FoodApi />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
