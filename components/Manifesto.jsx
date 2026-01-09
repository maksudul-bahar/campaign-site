// 'use client';
// import { motion } from 'framer-motion';

// const manifestoItems = [
//   {
//     title: 'Justice for Students',
//     icon: '⚖️',
//     desc: 'Ensure fair treatment and due process for every student.',
//   },
//   {
//     title: 'Legal Support Desk',
//     icon: '📜',
//     desc: 'Provide free legal guidance within campus.',
//   },
//   {
//     title: 'Human Rights Awareness',
//     icon: '🧑‍🎓',
//     desc: 'Workshops and campaigns on student rights.',
//   },
//   {
//     title: 'Transparent Governance',
//     icon: '🏛️',
//     desc: 'Accountability and open communication.',
//   },
// ];

// export default function Manifesto() {
//   return (
//     <section className="bg-[#F6F4EF] py-24 px-6">
//       <h2 className="text-4xl font-serif text-center mb-16">
//         What we believe in.
//       </h2>

//       <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//         {manifestoItems.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: i * 0.1 }}
//             viewport={{ once: true }}
//             className="bg-white rounded-[2rem] px-8 py-12 text-center shadow-sm hover:shadow-md transition"
//           >
//             {/* Icon bubble */}
//             <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#EFEAE2] flex items-center justify-center text-3xl">
//               {item.icon}
//             </div>

//             <h3 className="text-xl font-semibold mb-3">
//               {item.title}
//             </h3>

//             <p className="text-sm leading-relaxed text-gray-600">
//               {item.desc}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';
import { motion } from 'framer-motion';

const manifestoItems = [
  {
    title: 'আইনগত সচেতনতা',
    icon: '⚖️',
    desc: 'আমি শিক্ষার্থীদের জন্য সহজ বাংলায় “অধিকার হ্যান্ডবুক” প্রকাশ ও নিয়মিত কর্মশালার উদ্যোগ নেব, যাতে অজ্ঞতার কারণে কেউ হয়রানির শিকার না হয়।',
  },
  {
    title: 'ডিজিটাল লিগ্যাল সহায়তা',
    icon: '📜',
    desc: 'একটি ব্যবহারবান্ধব ডিজিটাল লিগ্যাল পোর্টাল চালু করব, যেখানে অভিযোগ প্রক্রিয়া, জরুরি নম্বর ও আইনগত নির্দেশনা পাওয়া যাবে।',
  },
  {
    title: 'মানবাধিকার সুরক্ষা',
    icon: '🧑‍🎓',
    desc: 'আমি একটি মানবাধিকার অভিযোগ সেল গঠনের প্রস্তাব দেব, যেখানে প্রতিটি অভিযোগের নিরপেক্ষ ও স্বচ্ছ তদন্ত নিশ্চিত হবে।',
  },
  {
    title: 'স্বচ্ছতা ও জবাবদিহিতা',
    icon: '🏛️',
    desc: 'শিক্ষার্থীদের ফি, তহবিল ও প্রশাসনিক সিদ্ধান্তে পূর্ণ স্বচ্ছতা ও জবাবদিহিতা নিশ্চিত করতে কাজ করব।',
  },
];

export default function Manifesto() {
  return (
    <section className="bg-[#F6F4EF] py-24 px-6">
      <h2 className="text-4xl font-serif text-center mb-6">
        আমার লক্ষ্য ও পরিকল্পনা
      </h2>

      {/* ✅ COLORFUL PDF BUTTON (HERE) */}
      <div className="flex justify-center mb-14">
        <a
          href="/manifesto.pdf"
          target="_blank"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full
                     font-semibold text-white text-lg
                     bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400
                     shadow-lg hover:scale-105 hover:shadow-xl transition"
        >
          📄 সম্পূর্ণ ইশতেহার পড়ুন (PDF)
        </a>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {manifestoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] px-8 py-12 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#EFEAE2] flex items-center justify-center text-3xl">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
