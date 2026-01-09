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
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-purple-50 via-yellow-50 to-white px-6 md:px-20 py-12 gap-12">

      <div className="flex-1 text-center md:text-left space-y-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          আমি দাঁড়াই <span className="text-primary">ন্যায়</span> ও{' '}
          <span className="text-secondary">মানবাধিকারের</span> পক্ষে
        </motion.h1>

        <motion.p
          className="text-gray-700 text-lg md:text-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          “ন্যায়ের পথে চাই দৃঢ় কণ্ঠস্বর”—এই বিশ্বাস থেকেই আমার লড়াই।
          আমি নির্বাচনে দাঁড়িয়েছি কোনো দলীয় স্বার্থে নয়, বরং সাধারণ শিক্ষার্থীদের
          অধিকার, ন্যায় ও মানবিক মর্যাদার পক্ষে নির্ভীক কণ্ঠস্বর হতে।
        </motion.p>

        <motion.div
          className="mt-4 flex justify-center md:justify-start gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="bg-primary text-white px-6 py-3 rounded-full font-semibold">
            ব্যালট নং: ৩
          </div>
        </motion.div>
      </div>

      <motion.div
        className="flex-1 relative w-full max-w-sm md:max-w-md"
        initial={{ opacity: 0, x: 50, scale: 0.8 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/photos/profile.jpg"
          alt="Candidate"
          width={400}
          height={400}
          className="rounded-2xl shadow-xl object-cover"
        />
      </motion.div>
    </section>
  );
}

