'use client';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-yellow-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          

          <p className="text-gray-700 mb-8 leading-relaxed">
            Dedicated to ethical leadership and student advocacy, she brings academic
            excellence and hands-on experience to the role of Secretary of Law & Human Rights.
          </p>

          <ul className="space-y-4 text-gray-800">
            <li><span className="font-semibold">Name:</span> Tasmima Mahfuj Jerin</li>
            <li><span className="font-semibold">Department:</span> Economics</li>
            <li><span className="font-semibold">Session:</span> 2021–2022</li>
            <li><span className="font-semibold">Experience:</span> Legal Volunteer</li>
          </ul>
        </motion.div>

        {/* Image Side */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
            <img
              src="/photos/profile.jpg"
              alt="Candidate Profile"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Soft Decorative Shapes */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-emerald-200 rounded-full opacity-40" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-200 rounded-full opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
