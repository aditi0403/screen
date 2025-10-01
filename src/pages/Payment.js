import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [confirmed, setConfirmed] = useState(false);

  const order = state?.order;

  if (!order) {
    return (
      <div className="min-h-screen theme-bg section-padding">
        <div className="container-max">
          <h1 className="text-2xl font-bold theme-text mb-2">No Order Found</h1>
          <p className="theme-text-secondary mb-6">Please select a screen and submit booking details first.</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/dashboard')}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
          >
            Go to Dashboard
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-bg section-padding">
      <div className="container-max max-w-3xl">
        {!confirmed ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200 dark:border-dark-700">
              <h1 className="text-2xl font-bold theme-text">Order Summary</h1>
              <p className="text-sm theme-text-secondary">Review your booking details</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img src={order.img} alt={order.name} className="w-32 h-20 object-cover rounded-lg" />
                <div>
                  <div className="font-semibold theme-text">{order.name}</div>
                  <div className="text-sm theme-text-secondary">{order.location}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                  <div className="text-xs uppercase tracking-wide theme-text-secondary">Time Slot</div>
                  <div className="font-semibold theme-text">{order.timeSlot}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                  <div className="text-xs uppercase tracking-wide theme-text-secondary">Duration</div>
                  <div className="font-semibold theme-text">{order.duration}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                  <div className="text-xs uppercase tracking-wide theme-text-secondary">Repetition / day</div>
                  <div className="font-semibold theme-text">{order.repetition}</div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-dark-700 rounded-xl">
                  <div className="text-xs uppercase tracking-wide theme-text-secondary">Price Estimate</div>
                  <div className="font-semibold theme-text">₹{Number(order.price || 0).toLocaleString('en-IN')}</div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(239,68,68,0.45)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setConfirmed(true)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all shadow-lg"
              >
                Proceed to Pay
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-8 text-center">
              <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold theme-text mb-2">Your Ad Booking is Submitted for Verification!</h2>
              <p className="theme-text-secondary mb-6">We will notify you once the verification is complete.</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/dashboard')}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg"
              >
                Back to Dashboard
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Payment;
