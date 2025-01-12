import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Navbar/navbar";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/services" element={<ServicePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
