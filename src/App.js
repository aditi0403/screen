import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
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
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Landing onOpenAuth={() => setIsAuthOpen(true)} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLoginSuccess={() => {
          setIsAuthOpen(false);
          window.location.href = '/dashboard';
        }}
      />
    </BrowserRouter>
  );
}

export default App;
