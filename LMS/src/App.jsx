import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import main pages
import Home from './components/pages/home/Home';
import Login from './components/pages/Registration/Login';
import SignUp from './components/pages/Registration/SignUp';
import Courses from './components/pages/courses/courses';
import AboutUs from './components/pages/aboutus/AboutUs';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;