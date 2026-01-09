// 

'use client';
import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-yellow-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 mb-8 leading-relaxed">
            আমি সবসময় ন্যায়, মানবাধিকার ও শিক্ষার্থীদের পক্ষে দাঁড়িয়েছি।
            প্রশাসনিক অন্যায়, আইনের অপপ্রয়োগ কিংবা কণ্ঠরোধের বিরুদ্ধে
            আমি কখনো আপস করিনি।
          </p>

          <ul className="space-y-4 text-gray-800">
            <li><b>নাম:</b> তাসমিমা মাহফুজ জেরিন</li>
            <li><b>বিভাগ:</b> অর্থনীতি</li>
            <li><b>সেশন:</b> ২০২১–২০২২</li>
            <li><b>পদ:</b> আইন ও মানবাধিকার সম্পাদক (প্রার্থী)</li>
            <li><b>ব্যালট নং:</b> ৩</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/photos/profile.jpg"
            alt="Candidate Profile"
            className="rounded-3xl shadow-xl h-[420px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
