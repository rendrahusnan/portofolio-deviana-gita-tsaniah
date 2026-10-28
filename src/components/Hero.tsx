import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="about" className="py-16 border-b border-[#6B1D2F]/20">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#6B1D2F] uppercase">
          TENTANG SAYA
        </h2>
        <span className="text-[#6B1D2F] text-xl">✦ ✦ ✦</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Foto Profil (Kiri) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 relative rounded-2xl overflow-hidden border-2 border-[#6B1D2F]/30 shadow-lg bg-[#DFD5C6] aspect-[4/5]"
        >
          <img 
            src="/src/assets/hero.png" 
            alt="Profile Deviana Gita Tsaniah" 
            className="w-full h-full object-cover filter contrast-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </motion.div>

        {/* Ringkasan Profil (Kanan) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-7 space-y-4 bg-[#DFD5C6]/30 p-8 rounded-2xl border border-[#6B1D2F]/20"
        >
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#6B1D2F] leading-tight">
            HALO, SAYA DEVIANA GITA TSANIAH.
          </h1>
          
          <p className="text-sm md:text-base text-[#2A1810]/90 leading-relaxed font-sans">
            Lulusan S1 Sastra Inggris Universitas Ahmad Dahlan (IPK 3,85/4,00) dengan pengalaman magang di Kantor Imigrasi Kelas I Non-TPI Pemalang. Memiliki kompetensi dalam administrasi perkantoran, entri & pengolahan data, pengarsipan dokumen, serta pelayanan publik bilingual (Indonesia & Inggris).
          </p>

          <p className="text-sm md:text-base text-[#2A1810]/80 leading-relaxed font-sans">
            Berpengalaman dalam riset, penulisan karya ilmiah, publikasi jurnal bereputasi SINTA, serta memiliki wawasan lintas budaya melalui proyek internasional di Jepang (2025) dan Singapura (2023). Siap berkontribusi maksimal melalui program MagangHub.
          </p>
        </motion.div>
      </div>
    </section>
  );
};