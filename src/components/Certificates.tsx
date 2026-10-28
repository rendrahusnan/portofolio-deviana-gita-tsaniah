import React from 'react';
import { motion } from 'framer-motion';

const certs = [
  { id: 1, title: "React Developer Certification", issuer: "Frontend Institute", year: "2025" },
  { id: 2, title: "TypeScript Professional", issuer: "Tech Academy", year: "2025" },
  { id: 3, title: "Web Design & UI/UX Excellence", issuer: "Digital Campus", year: "2024" }
];

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-16 border-b border-[#6B1D2F]/20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#6B1D2F] uppercase">
          SERTIFIKAT
        </h2>
        <span className="text-[#6B1D2F] text-xl">✦ ✦ ✦</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certs.map((c, idx) => (
          <motion.div 
            key={c.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-[#6B1D2F] p-4 rounded-2xl text-[#EAE3D9] shadow-lg flex flex-col justify-between aspect-[4/3]"
          >
            <div className="border border-[#EAE3D9]/40 p-4 h-full rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-widest bg-[#EAE3D9]/20 px-2 py-0.5 rounded">
                  {c.year}
                </span>
                <h3 className="text-lg font-serif font-bold mt-3 leading-snug">{c.title}</h3>
              </div>
              <p className="text-xs text-[#EAE3D9]/70 font-sans">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};