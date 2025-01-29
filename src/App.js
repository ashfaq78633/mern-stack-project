import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home"; 
import Skills from "./Skills";
import Certificates from "./Certificates";
import Projects from "./Project";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <nav className="app-nav">
          <ul className="app-nav-list">
            <li className="app-nav-item">
              <Link to="/" className="app-nav-link">Home</Link>
            </li>
            <li className="app-nav-item">
              <Link to="/skills" className="app-nav-link">Skills</Link>
            </li>
            <li className="app-nav-item">
              <Link to="/certificates" className="app-nav-link">Certificates</Link>
            </li>
           
            <li className="app-nav-item">
              <Link to="/projects" className="app-nav-link">Projects</Link>
            </li>
            <li className="app-nav-item">
              <Link to="/contact" className="app-nav-link">Contact</Link>
            </li>
          </ul>
        </nav>

    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
          
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
