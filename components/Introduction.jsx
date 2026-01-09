// 

'use client';
import { motion } from 'framer-motion';

export default function Introduction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-yellow-50 to-white py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            আইন ও মানবাধিকার বিষয়ে <span className="text-primary">আমার অঙ্গীকার</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-5">
            আমি বিশ্বাস করি, আইন শিক্ষার্থীদের রক্ষা করার জন্য—ধ্বংস করার জন্য নয়।
            যখনই দেখেছি আইনের অপপ্রয়োগে নিরপরাধ শিক্ষার্থীরা ক্ষতিগ্রস্ত হচ্ছে,
            তখনই আমি প্রতিবাদ করেছি, লড়েছি এবং পাশে দাঁড়িয়েছি।
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            আমার রাজনীতি কোনো দলীয় পরিচয়ে সীমাবদ্ধ নয়। আমার অবস্থান সবসময়
            সাধারণ শিক্ষার্থীর অধিকার, ন্যায়বিচার ও স্বচ্ছতার পক্ষে।
          </p>

          <p className="text-gray-700 leading-relaxed">
            আমি এমন একটি ক্যাম্পাস চাই যেখানে ভয় নয়, ন্যায়ই হবে শেষ কথা—
            যেখানে রাজনৈতিক প্রভাব নয়, যুক্তি ও মানবাধিকারই হবে চূড়ান্ত সিদ্ধান্ত।
          </p>

          {/* ✅ PDF BUTTON — EXACTLY BELOW INTRODUCTION */}
          {/* <div className="mt-8">
            <a
              href="/manifesto.pdf"
              target="_blank"
              className="inline-block px-8 py-4 bg-primary text-white rounded-full font-semibold hover:opacity-90 transition"
            >
              📄 সম্পূর্ণ ইশতেহার পড়ুন (PDF)
            </a>
          </div> */}
        </motion.div>

        <motion.div
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-[260px] opacity-10 select-none">🏛️</div>
        </motion.div>
      </div>
    </section>
  );
}
