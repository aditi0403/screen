import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BillboardVideo from './components/BillboardVideo';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PageTransition from './components/PageTransition';
import AuthPage from './pages/AuthPage';
import Screens from './pages/Screens';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';
import LocationDetailsPage from './pages/LocationDetailsPage';

const Landing = () => (
  <PageTransition>
    <Navbar />
    <main>
      {/* Billboard Video replaces Hero for demo */}
      {/* Removed BillboardVideo for location details */}
      <Features />
      <About />
      <Contact />
    </main>
    <Footer />
  </PageTransition>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={
          <PageTransition>
            <AuthPage />
          </PageTransition>
        } />
        <Route path="/screens" element={
          <PageTransition>
            <Screens />
          </PageTransition>
        } />
        {/* Removed /screens/:id route and ScreenBooking page */}
        <Route path="/dashboard" element={
          <PageTransition>
            <Dashboard />
          </PageTransition>
        } />
        <Route path="/payment" element={
          <PageTransition>
            <Payment />
          </PageTransition>
        } />
        <Route path="/location-details" element={
          <PageTransition>
            <LocationDetailsPage />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
