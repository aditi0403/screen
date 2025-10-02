import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BookingModal from '../components/BookingModal';
import Navbar from '../components/Navbar';

const images = [
  'https://i.pinimg.com/1200x/d3/94/5b/d3945b05924c9306b7935cc40429a2c2.jpg',
  'https://i.pinimg.com/1200x/83/f8/ca/83f8ca7b9de5a83ede9ddebd613cbd76.jpg',
  'https://i.pinimg.com/736x/e1/18/f5/e118f5f71deae656815c4628dbf564aa.jpg',
  'https://i.pinimg.com/1200x/f6/e5/33/f6e53310671f2692e301051cffbeaa09.jpg',
];

const screens = [
  { id: 1, name: 'Central Mall, Jabalpur', location: 'Wright Town', img: images[0] },
  { id: 2, name: 'Russel Square', location: 'Napier Town', img: images[1] },
  { id: 3, name: 'Vijay Nagar Junction', location: 'Vijay Nagar', img: images[2] },
  { id: 4, name: 'Madan Mahal Overbridge', location: 'Madan Mahal', img: images[3] },
  { id: 5, name: 'South Avenue Mall', location: 'Ranjhi', img: images[0] },
];

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <Navbar />
      <div className="min-h-screen theme-bg section-padding">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold theme-text">Available Screens</h1>
            <p className="theme-text-secondary">Pick a screen to start your booking</p>
          </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {screens.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-64 overflow-hidden">
                <img src={s.img} alt={`${s.name} billboard preview`} className="rounded-lg shadow-lg object-cover w-full h-64" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold theme-text mb-1">{s.name}</h3>
                <p className="text-sm theme-text-secondary mb-4">{s.location}</p>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 24px rgba(239,68,68,0.35)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { setSelected(s); setOpen(true); }}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 px-5 rounded-full"
                >
                  Book Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BookingModal isOpen={open} onClose={() => setOpen(false)} screen={selected} />
    </div>
    </>
  );
}

export default Dashboard;
