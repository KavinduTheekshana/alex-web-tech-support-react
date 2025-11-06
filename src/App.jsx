import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Solutions from './pages/Solutions';
import CostCalculator from './pages/CostCalculator';
import Microsoft365 from './pages/Microsoft365';
import OutsourcedIT from './pages/OutsourcedIT';
import OurApproach from './pages/OurApproach';
import AreasWeCover from './pages/AreasWeCover';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/outsourced-it-support" element={<OutsourcedIT />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/microsoft-365" element={<Microsoft365 />} />
          <Route path="/cost-calculator" element={<CostCalculator />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/areas-we-cover" element={<AreasWeCover />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
