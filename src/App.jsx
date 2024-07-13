import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Hero from './Component/Hero/Hero';
import Program from './Component/Program/Program';
import Title from './Component/Title/Title';
import About from './Component/About/About';
import Campus from './Component/Campus/Campus';
import Testimonial from './Component/Testimonial/Testimonial';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import './index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/program" element={
          <>
            <Title subTitle='Our Program' title='What We Offer' />
            <Program />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/campus" element={
          <>
            <Title subTitle='GALLERY' title='Campus Photos' />
            <Campus />
          </>
        } />
        <Route path="/testimonials" element={
          <>
            <Title subTitle='TESTIMONIALS' title='What Student Says' />
            <Testimonial />
          </>
        } />
        <Route path="/contact" element={
          <>
            <Title subTitle='CONTACT US' title='Get in Touch' />
            <Contact />
          </>
        } />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
