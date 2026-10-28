import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 border-b border-[#6B1D2F]/20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#6B1D2F] uppercase">
          PENDIDIKAN
        </h2>
        <span className="text-[#6B1D2F] text-xl">✦ ✦ ✦</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-[#DFD5C6]/40 border border-[#6B1D2F]/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
      >
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6B1D2F]/10 text-[#6B1D2F] text-xs font-bold uppercase tracking-wider">
            <GraduationCap size={14} /> 2022 - 2026
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#2A1810]">
            Universitas Ahmad Dahlan
          </h3>
          <p className="text-base font-semibold text-[#6B1D2F]">
            S1 Sastra Inggris
          </p>
        </div>

        <div className="bg-[#6B1D2F] text-[#EAE3D9] px-6 py-4 rounded-xl flex items-center gap-4 shadow-md border border-[#6B1D2F]">
          <Award size={32} className="text-[#EAE3D9]" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-[#EAE3D9]/70">Indeks Prestasi Kumulatif</p>
            <p className="text-2xl font-serif font-bold">IPK: 3.85 <span className="text-sm font-normal text-[#EAE3D9]/80">/ 4.00</span></p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};