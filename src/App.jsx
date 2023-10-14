import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login'
import Register from './pages/Register'
import Configuration from './pages/Configuration'
import Pie from './components/Pie'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Configuration" element={<Configuration />} />

      </Routes>
    </Router>
  );
}

export default App
