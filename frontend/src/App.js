import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Organizations from './pages/Organizations';
import Navbar from './components/Navbar';
import Tracker from './pages/Tracker';
import Header from './components/Header';
import { ServicesContextProvider } from './context/ServicesContext';

function App() {
  return (
    <ServicesContextProvider>
    <div className="App">
      <Router>
        <div className='header'>
        <Header></Header>
        <div className='navbar'>
        <Navbar />
          <div className='pages'>
            <Routes>
              <Route 
                path="/" element={<Tracker />} 
              />
              {/* <Route extact path="/organizations" element={<Organizations />} /> */}
            </Routes>
          </div>
          </div>
        </div>
      </Router>
    </div>
    </ServicesContextProvider>
  );
}

export default App;
