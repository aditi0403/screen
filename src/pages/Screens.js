import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoModal from '../components/VideoModal';
import BookingModal from '../components/BookingModal';

const screens = [
  {
    id: 1,
    name: "Central Mall, Jabalpur",
    location: "Central Mall, Civil Lines",
    image: "https://i.pinimg.com/1200x/d3/94/5b/d3945b05924c9306b7935cc40429a2c2.jpg",
    description: "Prime location with high footfall"
  },
  {
    id: 2,
    name: "City Center, Jabalpur",
    location: "City Center, Russell Chowk",
    image: "https://i.pinimg.com/1200x/83/f8/ca/83f8ca7b9de5a83ede9ddebd613cbd76.jpg",
    description: "Premium shopping destination"
  },
  {
    id: 3,
    name: "Sarafa Bazaar, Jabalpur",
    location: "Sarafa Bazaar, Main Road",
    image: "https://i.pinimg.com/736x/e1/18/f5/e118f5f71deae656815c4628dbf564aa.jpg",
    description: "Traditional market area"
  },
  {
    id: 4,
    name: "Railway Station, Jabalpur",
    location: "Jabalpur Junction",
    image: "https://i.pinimg.com/1200x/f6/e5/33/f6e53310671f2692e301051cffbeaa09.jpg",
    description: "High transit visibility"
  },
  {
    id: 5,
    name: "Medical College, Jabalpur",
    location: "Netaji Subhash Chandra Bose Medical College",
    image: "https://i.pinimg.com/1200x/d3/94/5b/d3945b05924c9306b7935cc40429a2c2.jpg",
    description: "Educational hub location"
  }
];

const Screens = () => {
  const [selectedScreen, setSelectedScreen] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const handleBookNow = (screen) => {
    setSelectedScreen(screen);
    setShowVideo(true);
  };

  const handleVideoComplete = () => {
    setShowVideo(false);
    setShowBooking(true);
  };

  const handleBookingClose = () => {
    setShowBooking(false);
    setSelectedScreen(null);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900 pt-20">
      {/* Header */}
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
              Prime Screen
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Select from our premium digital billboard locations across Jabalpur for maximum brand visibility
          </p>
        </motion.div>

        {/* Screens Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-dark-700"
            >
              {/* Screen Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={screen.image}
                  alt={screen.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Screen Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {screen.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-1 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {screen.location}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                  {screen.description}
                </p>

                {/* Book Now Button */}
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 25px rgba(239, 68, 68, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleBookNow(screen)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">5</div>
            <div className="text-gray-600 dark:text-gray-300">Prime Locations</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-300">Visibility</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">1M+</div>
            <div className="text-gray-600 dark:text-gray-300">Daily Views</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Digital</div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
        onComplete={handleVideoComplete}
        screen={selectedScreen}
      />

      {/* Booking Modal */}
      <BookingModal
        isOpen={showBooking}
        onClose={handleBookingClose}
        screen={selectedScreen}
      />
    </div>
  );
};

export default Screens;
