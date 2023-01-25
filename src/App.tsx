import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { 
  Home, 
  NotFound404, 
  LiftersProductPage, 
  FoodApiProductPage, 
  About, 
  FoodApi, 
  CreateFoodApiAccount,
  LoginFoodApiAccount,
  Contact,
  FoodApiSetUpPayments,
  FoodApiSetUpPaymentComplete,
  TermsConditions,
  PrivacyPolicy,
  TrainersAgreementPolicy
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/lifters" element={<LiftersProductPage />} />
      <Route path="/products/food-api" element={<FoodApiProductPage />} />
      <Route path="/food-api/setup-payment" element={<FoodApiSetUpPayments />} />
      <Route path="/food-api/setup-payment-complete" element={<FoodApiSetUpPaymentComplete />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms-condition" element={<TermsConditions />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy /> } />
      <Route path="/trainers-agreement-policy" element={<TrainersAgreementPolicy /> } />
      <Route path="/contact" element={<Contact />} />
      <Route path="/food-api" element={<FoodApi />} />
      <Route path="/food-api/createAccount" element={<CreateFoodApiAccount />} />
      <Route path="/food-api/logIn" element={<LoginFoodApiAccount />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
}

export default App;
