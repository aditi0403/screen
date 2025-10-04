import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import AgencyRegistration from './AgencyRegistration';
import ClientRegistration from './ClientRegistration';

const TabButton = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-semibold rounded-full transition-colors duration-200 ${
      active
        ? 'bg-red-600 text-white shadow-md'
        : 'bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
    }`}
  >
    {children}
  </button>
);

const ModalBackdrop = ({ onClose, children, large = false }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4 py-8 overflow-y-auto"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.95, y: 20, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className={`w-full ${large ? 'max-w-4xl' : 'max-w-md'} rounded-2xl bg-white dark:bg-dark-900 text-gray-900 dark:text-white shadow-2xl my-8`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  </motion.div>
);

const AuthModal = ({ isOpen, onClose, onLoginSuccess, initialTab = 'login', userRole = null }) => {
  const navigate = useNavigate();
  const [tab, setTab] = useState(initialTab);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ brand: '', email: '', password: '', confirm: '' });
  const [loading, setLoading] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  useEffect(() => {
    setTab(initialTab);
    if (initialTab === 'signup' && userRole) {
      setShowRegistration(true);
    }
  }, [initialTab, userRole]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose?.();
      navigate('/screens');
    }, 800);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirm) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // After signup, auto-log in for demo
      onClose?.();
      navigate('/screens');
    }, 1000);
  };

  const handleRegistrationComplete = (data) => {
    console.log('Registration completed:', data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClose?.();
      navigate('/dashboard');
    }, 1000);
  };

  const handleBackToLogin = () => {
    setShowRegistration(false);
    setTab('login');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalBackdrop onClose={onClose} large={showRegistration && userRole}>
          <div className="p-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">
                {showRegistration && userRole 
                  ? userRole === 'agency' 
                    ? '🏢 Agency Registration' 
                    : '💼 Client Registration'
                  : 'Welcome'}
              </h3>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Tabs - Only show if not in registration flow */}
            {!showRegistration && (
              <div className="flex items-center gap-2 mb-6">
                <TabButton active={tab === 'login'} onClick={() => setTab('login')}>Login</TabButton>
                <TabButton active={tab === 'signup'} onClick={() => setTab('signup')}>Signup</TabButton>
              </div>
            )}

            {/* Forms */}
            <div>
              {showRegistration && userRole ? (
                // Registration Flow
                <>
                  {userRole === 'agency' ? (
                    <AgencyRegistration 
                      onComplete={handleRegistrationComplete}
                      onBack={handleBackToLogin}
                    />
                  ) : (
                    <ClientRegistration 
                      onComplete={handleRegistrationComplete}
                      onBack={handleBackToLogin}
                    />
                  )}
                </>
              ) : tab === 'login' ? (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="you@brand.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Password</label>
                    <input
                      type="password"
                      required
                      value={loginData.password}
                      onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="••••••••"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(239,68,68,0.45)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all shadow-lg"
                  >
                    {loading ? 'Signing in…' : 'Login'}
                  </motion.button>
                </form>
              ) : (
                <form onSubmit={handleSignupSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Brand Name</label>
                    <input
                      type="text"
                      required
                      value={signupData.brand}
                      onChange={(e) => setSignupData({ ...signupData, brand: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Your Brand"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="you@brand.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Password</label>
                      <input
                        type="password"
                        required
                        value={signupData.password}
                        onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="••••••••"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Confirm Password</label>
                      <input
                        type="password"
                        required
                        value={signupData.confirm}
                        onChange={(e) => setSignupData({ ...signupData, confirm: e.target.value })}
                        className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(239,68,68,0.45)' }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all shadow-lg"
                  >
                    {loading ? 'Creating account…' : 'Create Account'}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </ModalBackdrop>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
