import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SideNav from './components/sideNav';
import Payments from './pages/payments';

function App() {
  return (
    <Router>
      <Helmet>
        <title>payouts</title>
      </Helmet>
      <div className='app'>
        <SideNav />
        <main className='content'>
          <Routes>
            <Route path="/" element={<Payments />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
