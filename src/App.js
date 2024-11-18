import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Createtodo from './Pages/Createtodo';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Createtodo" element={<Createtodo />}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default App;