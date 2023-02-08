import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/HomePage';
import CourseDetailsPage from '../pages/CourseDetailsPage'
import AllCouresPage from '../pages/AllCouresPage';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';

const AppRoutes = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<CourseDetailsPage />} />
        <Route exact path="/courses" element={<AllCouresPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
