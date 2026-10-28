import React from 'react';
import { motion } from 'framer-motion';

export const Skills: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 border-b border-[#6B1D2F]/20">
      
      {/* Judul Seksi Atas */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#6B1D2F] uppercase">
          TENTANG SAYA
        </h2>
        <div className="text-[#6B1D2F] text-xl mt-2">✦ ✦ ✦</div>
      </div>

      {/* Grid Utama 3 Kolom yang Sejajar (Kiri: Skill, Tengah: Foto, Kanan: Software & Bahasa) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ================= KOLOM KIRI: SOFT SKILL & HARD SKILL ================= */}
        <div className="lg:col-span-4 space-y-6">
          {/* Soft Skill */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#DFD5C6]/40 p-6 rounded-2xl border border-[#6B1D2F]/20 shadow-sm"
          >
            <h3 className="text-2xl font-serif font-black text-[#6B1D2F] tracking-wide uppercase mb-3 flex items-baseline gap-2">
              SOFT <span className="text-xs font-sans font-normal text-[#2A1810]/70">Skill</span>
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-[#2A1810]/90 font-sans">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Komunikasi interpersonal</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Public speaking</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Teamwork dan kolaborasi</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Problem Solving</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Kepemimpinan</li>
            </ul>
          </motion.div>

          {/* Hard Skill */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#DFD5C6]/40 p-6 rounded-2xl border border-[#6B1D2F]/20 shadow-sm"
          >
            <h3 className="text-2xl font-serif font-black text-[#6B1D2F] tracking-wide uppercase mb-3 flex items-baseline gap-2">
              HARD <span className="text-xs font-sans font-normal text-[#2A1810]/70">Skill</span>
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-[#2A1810]/90 font-sans">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Administrasi & pengarsipan</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Entri dan pengolahan data</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Pelayanan publik (ID / EN)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6B1D2F]"></span> Riset & publikasi SINTA</li>
            </ul>
          </motion.div>
        </div>


        {/* ================= KOLOM TENGAH: FOTO UTAMA ================= */}
        <div className="lg:col-span-4 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-xs md:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#DFD5C6] bg-[#DFD5C6]"
          >
            <img 
              src="/src/assets/hero.png" 
              alt="Deviana Gita Tsaniah" 
              className="w-full h-full object-cover filter contrast-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
              }}
            />
          </motion.div>
        </div>


        {/* ================= KOLOM KANAN: SOFTWARE & BAHASA ================= */}
        <div className="lg:col-span-4 space-y-6">
          {/* Software Skill */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#DFD5C6]/40 p-6 rounded-2xl border border-[#6B1D2F]/20 shadow-sm"
          >
            <h3 className="text-2xl font-serif font-black text-[#6B1D2F] tracking-wide uppercase mb-3 flex items-baseline gap-2">
              SOFTWARE <span className="text-xs font-sans font-normal text-[#2A1810]/70">Skill</span>
            </h3>
            
            <div className="flex flex-wrap gap-2">
              {['Microsoft Word', 'Microsoft Excel', 'PowerPoint', 'Canva', 'CapCut', 'Google Docs', 'SINTA'].map((sw, i) => (
                <span key={i} className="px-3 py-1.5 rounded-xl bg-[#EAE3D9] border border-[#6B1D2F]/20 text-xs font-semibold text-[#6B1D2F] shadow-sm">
                  {sw}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bahasa */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#DFD5C6]/40 p-6 rounded-2xl border border-[#6B1D2F]/20 shadow-sm"
          >
            <h3 className="text-2xl font-serif font-black text-[#6B1D2F] tracking-wide uppercase mb-3">
              BAHASA
            </h3>
            <ul className="space-y-2 text-xs md:text-sm text-[#2A1810]/90 font-sans">
              <li className="flex items-center justify-between border-b border-[#6B1D2F]/10 pb-1.5">
                <span className="font-medium">Indonesia</span>
                <span className="text-xs font-bold text-[#6B1D2F] uppercase bg-[#6B1D2F]/10 px-2 py-0.5 rounded">Native</span>
              </li>
              <li className="flex items-center justify-between border-b border-[#6B1D2F]/10 pb-1.5">
                <span className="font-medium">Inggris</span>
                <span className="text-xs font-bold text-[#6B1D2F] uppercase bg-[#6B1D2F]/10 px-2 py-0.5 rounded">Advanced</span>
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};