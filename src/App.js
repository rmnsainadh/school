import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Admissions from './components/Admissions';
import Courses from './components/Courses';
import myImage from './components/Images/Banner.jpg';
import Home from './components/Home'
import LoginForm from './components/LoginForm';
import Sports from './components/sports';
// import ForgotPassword from './ForgotPassword';
// import Signup from './Signup';
import './App.css'; // Import the CSS file for custom styles



const App = () => {
  return (
    <Router>
      <div className="background-container">
        <div className="container">
          <Header />

          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/courses" className="nav-link">Courses</Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link">Sports</Link>
              </li>
              <li className="nav-item">
                <Link to="/achievements" className="nav-link">Achievements</Link>
              </li>
              <li className="nav-item">
                <Link to="/admissions" className="nav-link">Admissions</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/admissions/login" element={<LoginForm />}/>
              <Route path="/sports" element={<Sports />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
