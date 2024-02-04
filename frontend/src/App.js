import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Organizations from './pages/Organizations';
import Navbar from './components/Navbar';
import Tracker from './pages/Tracker';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className='header'>
      <Header></Header>
       <div className='navbar'>
       <Navbar />
        <Routes>
          <Route extact path="/" element={<Tracker />} />
          <Route extact path="/organizations" element={<Organizations />} />
        </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
