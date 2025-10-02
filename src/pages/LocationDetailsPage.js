import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import BookingModal from "../components/BookingModal";

const screenData = {
  name: "Central Park Plaza",
  location: "123 Main Street, Downtown City, Country",
  img: "https://player.vimeo.com/external/449973187.sd.mp4?s=6e2e6b2e6e2e6b2e6e2e6b2e6e2e6b2e&profile_id=164&oauth2_token_id=57447761",
  hotspots: ["Coffee Shop A", "Museum B", "Park Entrance", "Famous Statue"],
  primeTimes: ["9:00 AM - 11:00 AM", "5:00 PM - 8:00 PM"],
};
const billboardVideo = screenData.img;

// ...existing imports...

const LocationDetailsPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        src={billboardVideo}
        autoPlay
        muted
        loop
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        style={{ filter: "brightness(0.6) blur(2px)" }}
      />

      {/* Overlay for readability - darker */}
      <div className="fixed inset-0 bg-black/50 z-10" />

      {/* Universal Navbar */}
      <Navbar />

      {/* Back Button below Navbar */}
      <div className="relative z-30 flex justify-start mt-24 ml-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate(-1)}
          className="bg-black/60 text-white px-5 py-2 rounded-full flex items-center gap-2 shadow-lg hover:bg-black/80 transition-all backdrop-blur-md"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </motion.button>
      </div>

      {/* Main Content - centrally aligned, no box */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 pt-12 pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg"
        >
          {screenData.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-gray-200 mb-8 text-center drop-shadow"
        >
          {screenData.location}
        </motion.p>

        {/* Hotspots */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8 w-full flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-3">Nearest Hotspots</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {screenData.hotspots.map((hotspot) => (
              <div
                key={hotspot}
                className="flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-lg shadow backdrop-blur-sm"
              >
                <span className="inline-block w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </span>
                {hotspot}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Prime Times */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10 w-full flex flex-col items-center"
        >
          <h2 className="text-2xl font-semibold text-white mb-3">Prime Visit Times</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {screenData.primeTimes.map((time) => (
              <div
                key={time}
                className="bg-white/20 text-white px-5 py-2 rounded-lg shadow backdrop-blur-sm"
              >
                {time}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Book Now Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(true)}
          className="w-full max-w-md bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-full shadow-lg text-lg transition-all mb-8"
        >
          Book Now
        </motion.button>
        {/* BookingModal directly on this page */}
        <BookingModal isOpen={open} onClose={() => setOpen(false)} screen={screenData} />
      </main>
    </div>
  );
};

export default LocationDetailsPage;
