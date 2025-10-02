import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AuthOverlay = ({ isOpen, onClose, onLoginClick, onSignupClick }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={onClose}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://i.pinimg.com/736x/3d/62/e4/3d62e4de30135604fec8b1b911a8ff13.jpg"
              alt="Billboard background"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ scale: 0.8, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.8, y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative z-10 text-center px-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute -top-4 -right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Welcome to
              <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                AdScreen Booking
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto"
            >
              Choose your path to start advertising on Jabalpur's prime digital screens
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 15, 
                  delay: 0.4 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(239, 68, 68, 0.6)',
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onLoginClick}
                className="w-64 bg-red-600 hover:bg-red-700 text-white font-bold text-xl py-4 px-8 rounded-full transition-all duration-300 shadow-2xl border-2 border-red-500 hover:border-red-400"
              >
                Login
              </motion.button>

              <motion.button
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 15, 
                  delay: 0.5 
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                onClick={onSignupClick}
                className="w-64 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-bold text-xl py-4 px-8 rounded-full transition-all duration-300 shadow-2xl"
              >
                Sign Up
              </motion.button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-32 h-32 bg-red-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthOverlay;
