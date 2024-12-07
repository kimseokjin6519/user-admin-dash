import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; 
import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"          element={<Login />} />
        <Route path="/Login"     element={<Login />} />
        <Route path="/Home"      element={<Home />} />
        <Route path="/Users"     element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;