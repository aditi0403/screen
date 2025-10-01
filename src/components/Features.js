import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeatureCard = ({ title, description, image, icon, delay = 0, reverse = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        rotateY: 5,
        rotateX: 5,
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
      className="section-padding"
    >
      <div className="container-max">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`${reverse ? 'lg:col-start-2' : ''}`}
          >
            <div className="relative group">
              <img
                src={image}
                alt={`${title} preview image`}
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              {/* Floating Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: delay + 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border-2 border-primary-500"
              >
                <div className="text-2xl">{icon}</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: delay + 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            <div className="max-w-2xl mx-auto lg:mx-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: delay + 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className="section-title"
              >
                {title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: delay + 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className="section-subtitle mb-8"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: delay + 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-4 mb-8"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="theme-text-secondary">Advanced performance optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="theme-text-secondary">Seamless user experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="theme-text-secondary">Enterprise-grade security</span>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: delay + 0.7 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Prime Locations",
      description: "Advertise on high-visibility billboards across the city.",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a",
      icon: "📍"
    },
    {
      title: "Flexible Scheduling",
      description: "Choose time slots, duration, and frequency of ads.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe",
      icon: "🗓️",
      reverse: true
    },
    {
      title: "Easy Payments",
      description: "Secure, fast, and hassle-free transactions.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437d2",
      icon: "💳"
    }
  ];

  return (
    <section id="features" className="theme-bg">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-padding text-center"
      >
        <div className="container-max">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Why Choose Our
            <span className="block gradient-text">
              Platform?
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="section-subtitle"
          >
            Discover the powerful features that make our platform the perfect choice for modern web development. 
            Built with cutting-edge technology and designed for the future.
          </motion.p>
        </div>
      </motion.div>

      {/* Feature Cards */}
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          image={feature.image}
          icon={feature.icon}
          reverse={feature.reverse}
          delay={index * 0.2}
        />
      ))}

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="section-padding bg-gradient-to-r from-primary-600 to-primary-700"
      >
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
              { number: "150+", label: "Countries" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-red-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;