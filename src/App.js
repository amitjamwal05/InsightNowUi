import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TodayNews from './pages/TodayNews';
import AllNews from './pages/AllNews';
import ContactUs from './pages/ContactUs';
import './App.css';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import SinglePost from './components/SingleCard';
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
    <Router>
      <div className={theme}>
        <Navbar setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/today-news" element={<TodayNews />} />
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/news/:newsId" element={<SinglePost />} />
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
          <Route path="/admin-login" element={<AdminLogin />} />
        </Routes>
      </div>
    </Router>
      <Footer/>
    </>
  );
}

export default App;
