// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Loginuser from './components/Loginuser'; // Importing the Loginuser component
import Dashboard from './components/Dashboard'; // Import your Dashboard component here
import RegisterUser from './components/RegisterUser'; // Import your Dashboard component here


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/register" element={<RegisterUser />} />  {/* Route for Loginuser */}
          <Route path="/login" element={<Loginuser />} />  {/* Route for Loginuser */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard */}
          <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect from home to login */} 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
