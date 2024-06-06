import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CoinPage from './pages/Coin';


function App() {
  return <div className = "App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/coin/:coinID" element={<CoinPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
