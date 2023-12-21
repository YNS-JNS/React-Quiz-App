import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// _____________________________________________
// Importing packages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// _____________________________________________
// Importing Style
import './index.css'
// _____________________________________________
// Importing Components:
import Home from './components/Home';
import Quiz from './components/Quiz';
import Header from './components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
