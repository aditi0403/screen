import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AuthModal from '../components/AuthModal';

const AuthPage = () => {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState('login'); // 'login' or 'signup'

  const handleLoginClick = () => {
    setAuthType('login');
    setIsAuthModalOpen(true);
  };

  const handleSignupClick = () => {
    setAuthType('signup');
    setIsAuthModalOpen(true);
  };

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/3d/62/e4/3d62e4de30135604fec8b1b911a8ff13.jpg"
          alt="Billboard background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>

      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleGoBack}
        className="absolute top-8 left-8 z-20 flex items-center space-x-2 text-white hover:text-red-400 transition-colors duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-medium">Back to Home</span>
      </motion.button>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6"
        >
          Welcome to
          <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            ScreenD Booking
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-200 mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Choose your path to start advertising on Jabalpur's prime digital screens. 
          Join hundreds of brands already maximizing their visibility.
        </motion.p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <motion.button
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 0.5,
              type: 'spring', 
              stiffness: 200, 
              damping: 15 
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(239, 68, 68, 0.6)',
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoginClick}
            className="group relative w-72 bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-5 px-10 rounded-full transition-all duration-300 shadow-2xl border-2 border-red-500 hover:border-red-400 overflow-hidden"
          >
            <span className="relative z-10">Login to Your Account</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-white text-lg font-medium"
          >
            OR
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 0.7,
              type: 'spring', 
              stiffness: 200, 
              damping: 15 
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignupClick}
            className="group relative w-72 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold text-xl py-5 px-10 rounded-full transition-all duration-300 shadow-2xl overflow-hidden"
          >
            <span className="relative z-10">Create New Account</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.button>
        </div>

        {/* Features Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="text-white">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Prime Locations</h3>
            <p className="text-gray-300 text-sm">5 strategic billboard locations across Jabalpur</p>
          </div>
          <div className="text-white">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Instant Booking</h3>
            <p className="text-gray-300 text-sm">Book and deploy your ads in minutes</p>
          </div>
          <div className="text-white">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="text-lg font-semibold mb-2">Real-time Analytics</h3>
            <p className="text-gray-300 text-sm">Track your campaign performance live</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-red-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Auth Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        initialTab={authType}
        onLoginSuccess={() => {
          setIsAuthModalOpen(false);
        }}
      />
    </motion.div>
  );
};

export default AuthPage;
