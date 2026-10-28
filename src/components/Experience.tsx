import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    period: "Magang",
    role: "Staf Intern Administrasi & Pelayanan Publik",
    institution: "Kantor Imigrasi Kelas I Non-TPI Pemalang",
    desc: [
      "Mengelola administrasi perkantoran, pengarsipan berkas dokumen keimigrasian, serta entri data pemohon secara rapi dan teliti.",
      "Melayani alur komunikasi publik dan penyediaan informasi keimigrasian dalam Bahasa Indonesia dan Bahasa Inggris."
    ]
  },
  {
    period: "2025",
    role: "Peserta Proyek Pertukaran Budaya & Wisata Halal",
    institution: "Program Kebudayaan - Jepang",
    desc: [
      "Mengikuti riset lapangan, analisis data budaya, serta studi perbandingan pariwisata halal dan adaptasi multikultural di Jepang."
    ]
  },
  {
    period: "2023",
    role: "Peserta International Academic Visit",
    institution: "KBRI Singapura & Institusi Mitra",
    desc: [
      "Menjalankan kunjungan akademik internasional, diplomasi budaya, dan penyusunan laporan laporan studi lintas negara bersama KBRI Singapura."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-[#6B1D2F]/20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-[#6B1D2F] uppercase">
          PENGALAMAN
        </h2>
        <span className="text-[#6B1D2F] text-xl">✦ ✦ ✦</span>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-6 md:p-8 rounded-2xl bg-[#DFD5C6]/40 border border-[#6B1D2F]/20 grid grid-cols-1 md:grid-cols-12 gap-4 items-start shadow-sm"
          >
            <div className="md:col-span-3 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#6B1D2F]">
              <Briefcase size={14} /> {exp.period}
            </div>

            <div className="md:col-span-9 space-y-2">
              <h3 className="text-xl font-serif font-bold text-[#2A1810]">{exp.role}</h3>
              <p className="text-sm font-semibold text-[#6B1D2F]">{exp.institution}</p>
              <ul className="list-disc list-inside text-sm text-[#2A1810]/80 space-y-1 pt-2 font-sans">
                {exp.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};