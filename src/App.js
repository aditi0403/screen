import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthOverlay from './components/AuthOverlay';
import AuthModal from './components/AuthModal';
import Screens from './pages/Screens';
import Dashboard from './pages/Dashboard';
import Payment from './pages/Payment';

const Landing = ({ onOpenAuth }) => (
  <>
    <Navbar />
    <main>
      <Hero onOpenAuth={onOpenAuth} />
      <Features />
      <About />
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  const [isAuthOverlayOpen, setIsAuthOverlayOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsAuthOverlayOpen(false);
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setIsAuthOverlayOpen(false);
    setIsAuthModalOpen(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing onOpenAuth={() => setIsAuthOverlayOpen(true)} />}
        />
        <Route path="/screens" element={<Screens />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <AuthOverlay
        isOpen={isAuthOverlayOpen}
        onClose={() => setIsAuthOverlayOpen(false)}
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={() => {
          setIsAuthModalOpen(false);
        }}
      />
    </BrowserRouter>
  );
}

export default App;
