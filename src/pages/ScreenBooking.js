

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import BookingModal from '../components/BookingModal';

const screens = [
  { id: 1, name: 'Central Mall, Jabalpur', location: 'Central Mall, Civil Lines', img: 'https://i.pinimg.com/1200x/d3/94/5b/d3945b05924c9306b7935cc40429a2c2.jpg' },
  { id: 2, name: 'City Center, Jabalpur', location: 'City Center, Russell Chowk', img: 'https://i.pinimg.com/1200x/83/f8/ca/83f8ca7b9de5a83ede9ddebd613cbd76.jpg' },
  { id: 3, name: 'Sarafa Bazaar, Jabalpur', location: 'Sarafa Bazaar, Main Road', img: 'https://i.pinimg.com/736x/e1/18/f5/e118f5f71deae656815c4628dbf564aa.jpg' },
  { id: 4, name: 'Railway Station, Jabalpur', location: 'Jabalpur Junction', img: 'https://i.pinimg.com/1200x/f6/e5/33/f6e53310671f2692e301051cffbeaa09.jpg' },
  { id: 5, name: 'Medical College, Jabalpur', location: 'Netaji Subhash Chandra Bose Medical College', img: 'https://i.pinimg.com/1200x/d3/94/5b/d3945b05924c9306b7935cc40429a2c2.jpg' },
];

const sampleVideos = [
  'https://www.w3schools.com/html/mov_bbb.mp4',
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
];

export default function ScreenBooking() {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const videoIdx = Number(id) % sampleVideos.length;
  const screen = screens.find(s => String(s.id) === id);
  const videoUrl = sampleVideos[videoIdx];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen flex flex-col items-center justify-start bg-black"
    >
      {/* Minimal Navbar */}
      <nav className="w-full flex items-center justify-between px-6 py-4 bg-black/70 backdrop-blur-md z-20">
        <div className="flex items-center gap-4">
          <span className="text-xl font-bold text-red-600">ScreenD</span>
          <a href="/" className="text-white hover:text-red-500 font-medium transition-colors">Hero</a>
          <a href="/dashboard" className="text-white hover:text-red-500 font-medium transition-colors">Dashboard</a>
        </div>
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-full shadow transition-all duration-300"
          onClick={() => window.location.href = '/auth'}
        >
          Get Started
        </button>
      </nav>
      {/* Video Background (not fullscreen, no controls, no scroll) */}
      <div className="relative w-full max-w-3xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
        {videoUrl.endsWith('.mp4') ? (
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
        ) : (
          <img
            src={videoUrl}
            alt="Screen Preview"
            className="w-full h-full object-cover"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {/* Overlay Content: Book Now button always clickable and centered */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg"
          >
            {screen?.name || 'ADScape'}
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: '#ef4444' }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpen(true)}
            className="bg-red-600 text-white font-bold py-4 px-10 rounded-full shadow-lg text-xl transition-all duration-300"
            style={{ pointerEvents: 'auto' }}
          >
            Book Now
          </motion.button>
        </div>
      </div>
      {/* BookingModal for time slot, duration, repetition */}
      <BookingModal isOpen={open} onClose={() => setOpen(false)} screen={screen} />
    </motion.div>
  );
}
