import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ModalBackdrop = ({ onClose, children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.95, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      exit={{ scale: 0.95, y: 20, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
      className="w-full max-w-lg rounded-2xl bg-white dark:bg-dark-900 text-gray-900 dark:text-white shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </motion.div>
  </motion.div>
);

const BookingModal = ({ isOpen, onClose, screen }) => {
  const navigate = useNavigate();
  const [timeSlot, setTimeSlot] = useState('09:00 - 10:00');
  const [duration, setDuration] = useState('7 days');
  const [repetition, setRepetition] = useState(1);

  const price = useMemo(() => 500 * (Number(repetition) || 0), [repetition]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name: screen?.name,
      location: screen?.location,
      img: screen?.img,
      timeSlot,
      duration,
      repetition: Number(repetition) || 0,
      price
    };
    onClose?.();
    navigate('/payment', { state: { order } });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalBackdrop onClose={onClose}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">Book Screen</h3>
                {screen && (
                  <p className="text-sm text-gray-600 dark:text-gray-300">{screen.name} • {screen.location}</p>
                )}
              </div>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-800">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Time Slot</label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {['09:00 - 10:00', '12:00 - 13:00', '17:00 - 18:00', '19:00 - 20:00'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {['7 days', '14 days', '30 days'].map(d => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Repetition (per day)</label>
                <input
                  type="number"
                  min={1}
                  value={repetition}
                  onChange={(e) => setRepetition(e.target.value)}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-dark-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="e.g. 5"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-800 rounded-xl">
                <span className="text-sm text-gray-600 dark:text-gray-300">Price estimate (₹500 per slot)</span>
                <span className="text-lg font-bold">₹{price.toLocaleString('en-IN')}</span>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 28px rgba(239,68,68,0.45)' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-full transition-all shadow-lg"
              >
                Submit for Verification
              </motion.button>
            </form>
          </div>
        </ModalBackdrop>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
