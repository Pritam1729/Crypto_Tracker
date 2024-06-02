import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';


function App() {
  return <div className = "App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
