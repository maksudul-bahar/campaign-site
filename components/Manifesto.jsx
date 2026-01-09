

'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
  const [proofOpen, setProofOpen] = useState(false);
  const [openPlan, setOpenPlan] = useState(null);

  return (
    <section className="bg-gradient-to-br from-purple-50 via-amber-50 to-white py-28 px-6">

      {/* =======================
        YOUR VOICE PROOF
      ======================= */}
      <div className="max-w-4xl mx-auto mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur rounded-2xl shadow-md overflow-hidden"
        >
          <div className="px-6 py-6 bg-gradient-to-r from-purple-100 to-purple-50 border-l-4 border-purple-500">
            <h2 className="text-2xl font-semibold text-gray-900">
              আপনার কণ্ঠস্বর হওয়ার প্রমাণ
            </h2>
          </div>

          <div className="relative px-6 pb-6">
            <div
              className={`whitespace-pre-line leading-relaxed text-gray-700 transition-all duration-500 ${
                proofOpen
                  ? 'max-h-[3000px]'
                  : 'max-h-[260px] overflow-hidden'
              }`}
            >
{`
১. দলীয় প্রভাবমুক্ত ক্যাম্পাসের প্রশ্নে আপসহীন অবস্থান  
সাস্ট ক্যাম্পাসকে দলীয় রাজনীতির প্রভাব থেকে মুক্ত রেখে, শুধুমাত্র সাস্টিয়ান পরিচয়ে
ঐক্যবদ্ধ রাখার লড়াই আমি আজ শুরু করিনি—বাকস্বাধীনতা পাওয়ার আগ থেকেই করে আসছি।

২. অন্যায় আইনি সিদ্ধান্তের বিরুদ্ধে লড়াই  
বিশেষ করে বহিষ্কার ইস্যুতে, ঝুঁকি জেনেও অন্যায়ের বিরুদ্ধে অবস্থান নিয়েছি।

৩. রাজনৈতিক ট্যাগিংয়ের ঊর্ধ্বে উঠে ন্যায়বিচারের পক্ষে অবস্থান  
ন্যায়ের প্রশ্নে কারো পরিচয় নয়—সত্যটাই আমার অবস্থান।

৪. প্রশাসনিক অব্যবস্থাপনা ও শিক্ষার্থীবিরোধী সিদ্ধান্তের বিরুদ্ধে প্রতিবাদ  
হল, খাবার ও অন্যান্য প্রশাসনিক অনিয়মের বিরুদ্ধে ধারাবাহিকভাবে কথা বলেছি।

৫. আর্থিক স্বচ্ছতা ও জবাবদিহিতার দাবি  
শিক্ষার্থীর টাকার হিসাব জানার অধিকার রয়েছে।

৬. ক্ষমতার নয়, দায়িত্বের রাজনীতি  
নিজের কাজের ক্ষেত্রেও পূর্ণ জবাবদিহিতা নিশ্চিত করাই আমার অঙ্গীকার।
`}
            </div>

            {!proofOpen && (
              <div className="absolute bottom-12 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}

            <button
              onClick={() => setProofOpen(!proofOpen)}
              className="mt-4 text-purple-600 font-semibold hover:underline"
            >
              {proofOpen ? 'কম দেখান' : 'আরও পড়ুন'}
            </button>
          </div>
        </motion.div>
      </div>

      {/* =======================
        MAIN TITLE
      ======================= */}
      <h2 className="text-4xl font-serif text-center mb-16 text-gray-900">
        আমার লক্ষ্য ও কর্মপরিকল্পনা
      </h2>

      {/* =======================
        ACTION PLAN
      ======================= */}
      <div className="max-w-4xl mx-auto space-y-8">

        {[
          {
            title: 'আইনি নিরাপত্তা ও সচেতনতা',
            text: `• বিশ্ববিদ্যালয়ের ডিসিপ্লিনারি কোড সম্পর্কে শিক্ষার্থীদের সচেতন করা
• “অধিকার হ্যান্ডবুক” প্রকাশ
• ডিজিটাল লিগ্যাল রিসোর্স পোর্টাল
• প্রাথমিক আইনি পরামর্শের সুযোগ`,
          },
          {
            title: 'মানবাধিকার ও ন্যায়বিচার',
            text: `• মানবাধিকার অভিযোগ সেল
• Zero Tolerance + স্পষ্ট সংজ্ঞা
• নির্বিচার বহিষ্কার বন্ধ
• সমঅধিকার ও নিরাপত্তা নিশ্চিতকরণ`,
          },
          {
            title: 'প্রশাসনিক স্বচ্ছতা ও আইনের ন্যায়সংগত প্রয়োগ',
            text: `• শিক্ষার্থী মতামতভিত্তিক সিদ্ধান্ত
• বাজেট ট্র্যাকিং ব্যবস্থা
• আইন সংস্কারে ওপেন ফোরাম`,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur rounded-2xl shadow-md overflow-hidden"
          >
            {/* HEADER (NO CLICK) */}
            <div
              className="px-6 py-6 flex justify-between items-center
                         bg-gradient-to-r from-amber-50 to-white
                         border-l-4 border-purple-400"
            >
              <h3 className="font-semibold text-lg text-gray-900">
                {item.title}
              </h3>
            </div>

            {/* CONTENT */}
            <div className="relative px-6 pb-6">
              <div
                className={`whitespace-pre-line leading-relaxed text-gray-700 transition-all duration-500 ${
                  openPlan === i
                    ? 'max-h-[2000px]'
                    : 'max-h-[160px] overflow-hidden'
                }`}
              >
                {item.text}
              </div>

              {openPlan !== i && (
                <div className="absolute bottom-14 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
              )}

              {/* READ MORE BUTTON */}
              <button
                onClick={() => setOpenPlan(openPlan === i ? null : i)}
                className="mt-4 text-purple-600 font-semibold hover:underline"
              >
                {openPlan === i ? 'কম দেখান' : 'আরও পড়ুন'}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
