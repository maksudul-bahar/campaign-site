'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/photos/1.jpg',
  '/photos/2.jpg',
  '/photos/3.jpg',
  '/photos/4.jpg',
  '/photos/5.jpg',
  '/photos/6.jpg',
];

export default function Gallery() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-purple-50 via-yellow-50 to-white">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10 text-gray-900">
          Moments & Activities
        </h2>

        <div className="relative h-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl bg-white">

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt="Gallery image"
              className="absolute w-full h-full object-cover"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                i === index ? 'bg-primary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
