import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const youtubeVideos = [
  "https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1&loop=1&playlist=ScMzIvxBSi4",
  "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1&playlist=tgbNymZ7vqY",
  "https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&mute=1&loop=1&playlist=ysz5S6PUM-U",
];

const VideoModal = ({ isOpen, onClose, screenIndex, onComplete }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/80 flex items-center justify-center z-50 overflow-hidden"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-[90vw] max-w-4xl max-h-[80vh] bg-black rounded-xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "16 / 9" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* YouTube Video Embed */}
            <iframe
              key={screenIndex}
              src={youtubeVideos[screenIndex]}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`Billboard Video ${screenIndex + 1}`}
            ></iframe>

            {/* Proceed Button */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={onComplete}
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full shadow-lg text-base sm:text-lg"
              >
                Proceed Now
              </motion.button>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-2 right-2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white z-10"
              aria-label="Close"
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;