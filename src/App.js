import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Year1 from './components/Year1';

function App() {
  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/year1" element={<Year1 />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
