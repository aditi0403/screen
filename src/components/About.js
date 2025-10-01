import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Team Members" },
    { number: "25+", label: "Countries Served" }
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible, embracing cutting-edge technologies and creative solutions."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "Our team works closely with clients to understand their vision and bring it to life through seamless collaboration."
    },
    {
      icon: "⚡",
      title: "Performance",
      description: "We prioritize speed, efficiency, and reliability in everything we build, ensuring optimal user experiences."
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "Quality is at the heart of everything we do, from initial concept to final delivery and beyond."
    }
  ];

  return (
    <section id="about" className="theme-bg section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-title"
          >
            About Our
            <span className="block gradient-text">
              Company
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="section-subtitle"
          >
            We are a team of passionate developers, designers, and innovators dedicated to creating 
            exceptional digital experiences that drive business growth and user satisfaction.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + (index * 0.1) }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="text-center p-6 bg-gray-50 dark:bg-dark-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-300 border border-primary-100 dark:border-primary-800"
            >
              <div className="text-4xl font-bold theme-text mb-2">{stat.number}</div>
              <div className="theme-text-secondary font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
        >
          {/* Left Column - Image with billboard background */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a"
                alt="Digital billboard in the city"
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-3xl lg:text-4xl font-bold theme-text mb-6"
            >
              Advertise Across Jabalpur
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg theme-text-secondary mb-6 leading-relaxed"
            >
              Our platform connects your brand with audiences across Jabalpur through 5 premium digital screens. Book easily, pay securely, and watch your ads go live.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg theme-text-secondary mb-8 leading-relaxed"
            >
              Whether you’re launching a new product or amplifying your brand presence,
              Ad-Screen Booking helps you reach audiences where it matters most.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold theme-text mb-6">Our Core Values</h3>
          <p className="text-lg theme-text-secondary max-w-3xl mx-auto">
            These principles guide everything we do and shape how we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3 + (index * 0.1) }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
              }}
              className="text-center p-6 bg-gray-50 dark:bg-dark-800 rounded-2xl hover:bg-gray-100 dark:hover:bg-dark-700 transition-all duration-300 hover:shadow-lg border border-primary-100 dark:border-primary-800"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold theme-text mb-3">{value.title}</h4>
              <p className="theme-text-secondary leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;