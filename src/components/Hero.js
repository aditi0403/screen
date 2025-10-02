import React from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const RotatingCube = () => {
  const meshRef = useRef();
  const { size } = useThree();

  // Responsive scale: doubled overall
  const scale = size.width < 640 ? 2.2 : size.width < 1024 ? 2.8 : 3.4;

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    // Slow auto rotation
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      {/* Alternate red and black materials per face */}
      <meshStandardMaterial attach="material-0" color="#000000" roughness={0.4} metalness={0.3} />
      <meshStandardMaterial attach="material-1" color="#ef4444" roughness={0.3} metalness={0.6} />
      <meshStandardMaterial attach="material-2" color="#000000" roughness={0.4} metalness={0.3} />
      <meshStandardMaterial attach="material-3" color="#ef4444" roughness={0.3} metalness={0.6} />
      <meshStandardMaterial attach="material-4" color="#000000" roughness={0.4} metalness={0.3} />
      <meshStandardMaterial attach="material-5" color="#ef4444" roughness={0.3} metalness={0.6} />
    </mesh>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/3d/62/e4/3d62e4de30135604fec8b1b911a8ff13.jpg"
          alt="City billboards at night"
          className="w-full h-screen object-cover absolute inset-0 -z-10 opacity-70"
        />
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/10 dark:bg-red-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400/10 dark:bg-red-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-300/10 dark:bg-red-300/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Book Your Ads Across
              <span className="block bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent">
                Jabalpur's Prime Screens
              </span>
            </motion.h1>
            
            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Seamlessly register, pick your location, choose your slots, and get your ads live.
            </motion.p>
            
            {/* Call-to-Action Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 10, 
                delay: 0.6 
              }}
              className="flex justify-center lg:justify-start"
            >
              <motion.button
                onClick={() => navigate('/auth')}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.3)",
                    "0 0 40px rgba(239, 68, 68, 0.6)",
                    "0 0 20px rgba(239, 68, 68, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xl px-12 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-red-500/50"
                type="button"
              >
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Cube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-64 lg:h-80 flex items-center justify-center">
              <Canvas camera={{ position: [0, 0, 7.5] }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[-2, 5, 2]} intensity={1} />
                <RotatingCube />
              </Canvas>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 dark:from-red-500/30 to-red-400/20 dark:to-red-400/30 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-200 dark:border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-300 dark:bg-white/70 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;