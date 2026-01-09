'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-white px-6 md:px-20 py-16">

      {/* =======================
        TOP BAR
      ======================= */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10"
      >
        {/* LEFT */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm md:text-base text-gray-600 font-medium">
            শাকসু নির্বাচন ২০২৫
          </p>
          <p className="text-base md:text-lg font-semibold text-gray-800">
            কেন্দ্রীয় ছাত্র সংসদ
          </p>
        </div>

        {/* CENTER */}
        <div className="text-center space-y-3">
          <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white px-8 py-3 text-lg md:text-xl font-bold tracking-wide shadow-lg rounded-lg">
            প্যানেল–সাধারণের ঐক্যস্বর
          </div>

          {/* SLOGAN */}
          <p className="text-purple-700 text-sm md:text-base font-semibold">
            সাধারণের কাফেলার জয় হোক
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-3 rounded-xl shadow">
          <Image
            src="/photos/panel-logo.png"
            alt="Panel Logo"
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* =======================
        MAIN CONTENT
      ======================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* PHOTO + NAME */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center md:items-start"
        >
          <Image
            src="/photos/profile.jpg"
            alt="তাছমিমা মাহফুজ (জেরিন)"
            width={280}
            height={380}
            className="rounded-2xl shadow-xl object-cover"
          />

          {/* NAME & POST */}
          <div className="mt-6 text-center md:text-left space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              তাছমিমা মাহফুজ <span className="text-purple-600">(জেরিন)</span>
            </h2>
            <p className="text-lg font-semibold text-gray-700">
              আইন ও মানবাধিকার সম্পাদক পদপ্রার্থী
            </p>
            <p className="text-sm text-gray-600">
              কেন্দ্রীয় ছাত্র সংসদ
            </p>
          </div>

          {/* MOBILE BALLOT (UNDER NAME) */}
          <div className="flex justify-center md:hidden mt-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">
                ব্যালট নং
              </span>
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-white flex items-center justify-center text-2xl font-extrabold shadow">
                ৩
              </div>
            </div>
          </div>
        </motion.div>

        {/* TEXT + BALLOT (DESKTOP) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* DESCRIPTION */}
          <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
            <span className="font-bold text-purple-700">
              “নৈতিকতার পথে চাই দৃঢ় কণ্ঠস্বর!”
            </span>{' '}
            — <span className="font-semibold text-gray-900">
              এই কথাটিই আমার সংগ্রামের মূলমন্ত্র।
            </span>
            <br />
            {/* <span className="font-semibold bg-yellow-100 px-1 rounded">
              আমি শুধু নির্বাচিত হওয়ার জন্য নয়, সকল ধরনের দলীয় রাজনৈতিক এজেন্ডাকে
            </span>{' '} */}
            আমি শুধু নির্বাচিত হওয়ার জন্য নয়, সকল ধরনের দলীয় রাজনৈতিক এজেন্ডাকে বৃদ্ধাঙ্গুলি দেখিয়ে, সাধারণ শিক্ষার্থীর অধিকার ও ন্যায়ের পক্ষে একটি
            অবিচল, সাহসী এবং জবাবদিহিতামূলক কণ্ঠস্বর হিসেবে কাজ করতে এসেছি।
          </p>

          {/* DESKTOP BALLOT */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-lg font-semibold text-gray-800">
              ব্যালট নং
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-white flex items-center justify-center text-4xl font-extrabold shadow-lg">
              ৩
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
