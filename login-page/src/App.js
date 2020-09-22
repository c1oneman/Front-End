import React from 'react';
import LoginPage from './loginPage';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'


function App() {
  return (
    <div class="container">
     
     <Router><LoginPage /></Router>
  
    </div>

  );
}

export default App;
