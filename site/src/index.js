import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import RequireAuth from './components/Authentication';
import Login from './pages/Login';
import Home from './pages/Home';
import Info from './pages/Info';
import './styling/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Background />

    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/info" element={<RequireAuth><Info /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
