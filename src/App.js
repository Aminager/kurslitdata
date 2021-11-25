import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Year from './components/Year';

function App() {
  return (

    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/year1" element={<Year year="1"/>}></Route>
        <Route path="/year2" element={<Year year="2"/>}></Route>
        <Route path="/year3" element={<Year year="3"/>}></Route>
        <Route path="/year4" element={<Year year="4"/>}></Route>
        <Route path="/year5" element={<Year year="5"/>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
