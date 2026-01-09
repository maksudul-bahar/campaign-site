'use client';
import { motion } from 'framer-motion';

const manifestoItems = [
  {
    title: 'Justice for Students',
    icon: '⚖️',
    desc: 'Ensure fair treatment and due process for every student.',
  },
  {
    title: 'Legal Support Desk',
    icon: '📜',
    desc: 'Provide free legal guidance within campus.',
  },
  {
    title: 'Human Rights Awareness',
    icon: '🧑‍🎓',
    desc: 'Workshops and campaigns on student rights.',
  },
  {
    title: 'Transparent Governance',
    icon: '🏛️',
    desc: 'Accountability and open communication.',
  },
];

export default function Manifesto() {
  return (
    <section className="bg-[#F6F4EF] py-24 px-6">
      <h2 className="text-4xl font-serif text-center mb-16">
        What we believe in.
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {manifestoItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[2rem] px-8 py-12 text-center shadow-sm hover:shadow-md transition"
          >
            {/* Icon bubble */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#EFEAE2] flex items-center justify-center text-3xl">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-sm leading-relaxed text-gray-600">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
