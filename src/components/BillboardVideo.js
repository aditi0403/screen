import React from "react";

const VIDEO_URL = "https://player.vimeo.com/external/449973187.sd.mp4?s=6e2e6b2e6e2e6b2e6e2e6b2e6e2e6b2e&profile_id=164&oauth2_token_id=57447761"; // Example Pexels video

const BillboardVideo = ({ onProcess }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-2xl aspect-video rounded-lg shadow-lg overflow-hidden">
        <video
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          controls={false}
        />
        <button
          onClick={onProcess}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none"
        >
          Process Now
        </button>
      </div>
    </div>
  );
};

export default BillboardVideo;
