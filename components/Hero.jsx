// 'use client';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-50 via-yellow-50 to-white px-6 md:px-20 py-12 gap-12">
      
//       {/* Left Text Section */}
//       <div className="flex-1 text-center md:text-left space-y-6">
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Vote for <span className="text-primary">Justice</span> & <span className="text-secondary">Human Rights</span>
//         </motion.h1>

//         <motion.p
//           className="text-gray-700 text-lg md:text-xl"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           Candidate for University Student Parliament. Working for fairness, transparency, and student rights.
//         </motion.p>

//         <motion.div
//           className="mt-4 flex justify-center md:justify-start gap-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//         >
//           <div className="bg-primary text-white px-6 py-3 rounded-full font-semibold cursor-pointer hover:bg-purple-700 transition">
//             Ballot No: 07
//           </div>
//         </motion.div>
//       </div>

//       {/* Right Image Section */}
//       <motion.div
//         className="flex-1 relative w-full max-w-sm md:max-w-md"
//         initial={{ opacity: 0, x: 50, scale: 0.8 }}
//         animate={{ opacity: 1, x: 0, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Image
//           src="/photos/profile.jpg"
//           alt="Candidate"
//           width={400}
//           height={400}
//           className="rounded-2xl shadow-xl object-cover"
//         />
//       </motion.div>

//     </section>
//   );
// }
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
        className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16"
      >
        {/* LEFT */}
        <div className="text-center md:text-left">
          <p className="text-sm md:text-base text-gray-600 font-medium">
            শাকসু নির্বাচন ২০২৫
          </p>
          <p className="text-base md:text-lg font-semibold text-gray-800">
            কেন্দ্রীয় ছাত্র সংসদ
          </p>
        </div>

        {/* CENTER */}
        <div className="bg-gray-900 text-white px-8 py-3 text-lg md:text-xl font-bold tracking-wide shadow-lg">
          প্যানেল–সাধারণের ঐক্যের কণ্ঠস্বর
        </div>

        {/* RIGHT */}
        <div className="bg-white p-3 rounded-xl shadow">
          <Image
            src="/photos/panel-logo.png" // replace if needed
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

        {/* PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center md:justify-start"
        >
          <Image
            src="/photos/profile.jpg"
            alt="তাছমিমা মাহফুজ (জেরিন)"
            width={320}
            height={420}
            className="rounded-2xl shadow-xl object-cover"
          />
        </motion.div>

        {/* TEXT + BALLOT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          {/* SLOGAN */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              আমি দাঁড়াই <span className="text-purple-600">ন্যায়</span> ও{' '}
              <span className="text-orange-500">মানবাধিকারের</span> পক্ষে
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
              "নৈতিকতার পথে চাই দৃঢ় কণ্ঠস্বর!" — এই কথাটিই আমার সংগ্রামের মূলমন্ত্র। আমি শুধু নির্বাচিত হওয়ার জন্য নয়, সকল ধরনের দলীয় রাজনৈতিক এজেন্ডাকে বৃদ্ধাঙ্গুলি দেখিয়ে, সাধারণ শিক্ষার্থীর অধিকার ও ন্যায়ের পক্ষে একটি অবিচল, সাহসী এবং জবাবদিহিতামূলক কণ্ঠস্বর হিসেবে কাজ করতে এসেছি।
            </p>
          </div>

          {/* BALLOT */}
          <div className="flex items-center gap-6">
            <div className="text-lg font-semibold text-gray-800">
              ব্যালট নং
            </div>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-white flex items-center justify-center text-4xl font-extrabold shadow-lg">
              ৩
            </div>
          </div>

          {/* NAME & POST */}
          <div className="pt-2">
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
        </motion.div>
      </div>
    </section>
  );
}


