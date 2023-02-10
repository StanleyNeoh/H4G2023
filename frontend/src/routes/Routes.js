import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
import CourseDetailsPage from '../pages/CourseDetailsPage'
import AllCouresPage from '../pages/AllCouresPage';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/about" element={<CourseDetailsPage />} />
        <Route exact path="/courses" element={<AllCouresPage />} />
        <Route exact path="/courses/:category/:courseName" element={<CourseDetailsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
