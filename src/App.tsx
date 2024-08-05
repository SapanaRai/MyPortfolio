import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import ContactForm from './pages/Contac';
import About from './pages/About';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;
