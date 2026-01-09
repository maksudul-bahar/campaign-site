'use client';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-yellow-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Her Commitment to <span className="text-primary">Law & Human Rights</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            Her interest in the position of <strong>Secretary of Law and Human Rights</strong>
            is driven by a strong belief that justice should be accessible to every
            student. Rules and regulations must serve as protection—not as barriers.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            She stands for <strong>equality, fairness, and transparency</strong>, advocating
            for legal awareness, ethical leadership, and a campus where every voice
            is respected regardless of background or belief.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Her ideology is rooted in human dignity and accountability. Through
            dialogue, education, and action, she aims to build a student community
            where rights are protected and responsibilities are honored.
          </p>
        </motion.div>

        {/* Symbol Side */}
        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-[220px] md:text-[280px] opacity-10 select-none">
            🏛️
          </div>

          {/* Decorative Symbols */}
          <span className="absolute top-10 left-10 text-6xl opacity-20">🤝</span>
          <span className="absolute bottom-10 right-12 text-5xl opacity-20">📢</span>
        </motion.div>
      </div>
    </section>
  );
}
