// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import MainPage from './components/MainPage';
import './App.css'; // Import CSS file

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route for Landing Page */}
          <Route path="/" element={<LandingPage />} />
          {/* Authentication routes */}
          <Route path="/auth/*" element={<AuthPage />} />
          {/* Main page (after logging in) */}
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
