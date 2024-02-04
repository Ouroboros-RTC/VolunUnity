import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Tracker from './pages/Tracker';
import Header from './components/Header';
import OrgsPage  from './pages/Orgs';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='header'>
        <Header></Header>
        <div className='home'>
        <div className='navbar'>
        <Navbar />
          <div className='pages'>
            <Routes>
              <Route 
                path="/" element={<Tracker />} 
              />
              <Route extact path="/organizations" element={<OrgsPage />} />
            </Routes>
          </div>
        </div>
        </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
