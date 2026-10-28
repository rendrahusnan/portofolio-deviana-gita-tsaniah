import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen} from 'lucide-react';

const works = [
  {
    id: "01",
    title: "Publikasi Jurnal Ilmiah Bereputasi SINTA",
    category: "RESEARCH & ACADEMIC WRITING",
    description: "Melakukan riset mendalam, penyusunan naskah akademik, penyuntingan bahasa (proofreading), dan publikasi artikel ilmiah pada jurnal nasional terakreditasi SINTA.",
    tags: ["Academic Research", "SINTA Journal", "Scientific Writing", "Proofreading"]
  },
  {
    id: "02",
    title: "Studi Lintas Budaya & Wisata Halal Jepang",
    category: "INTERNATIONAL PROJECT",
    description: "Menyusun laporan komprehensif dan riset terkait perkembangan sektor wisata halal serta komunikasi lintas budaya selama program di Jepang.",
    tags: ["Cross-Cultural Study", "Halal Tourism", "Bilingual Report"]
  },
  {
    id: "03",
    title: "International Academic Visit Report",
    category: "DIPLOMACY & FIELD STUDY",
    description: "Dokumentasi dan penyusunan laporan kunjungan kerja sama internasional bersama Kedutaan Besar Republik Indonesia (KBRI) di Singapura.",
    tags: ["International Relations", "Documentation", "Public Communication"]
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 border-b border-[#6B1D2F]/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6B1D2F] mb-2">
            <BookOpen size={15} /> Academic & Professional Works
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[#6B1D2F] uppercase">
            RISET & KARYA
          </h2>
        </div>
        <p className="text-sm text-[#2A1810]/70 mt-4 md:mt-0 max-w-sm font-sans">
          Rekam jejak penulisan karya ilmiah, publikasi jurnal, dan proyek riset internasional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {works.map((work, index) => (
          <motion.article 
            key={work.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="p-8 rounded-2xl bg-[#DFD5C6]/40 border border-[#6B1D2F]/20 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest bg-[#6B1D2F]/10 text-[#6B1D2F] px-3 py-1 rounded-full">
                  {work.category}
                </span>
                <span className="text-xs font-serif font-bold text-[#6B1D2F]">{work.id}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-[#2A1810]">
                {work.title}
              </h3>

              <p className="text-sm text-[#2A1810]/80 leading-relaxed font-sans">
                {work.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#6B1D2F]/10">
              <div className="flex flex-wrap gap-1.5">
                {work.tags.map((tag, i) => (
                  <span key={i} className="text-[11px] px-2.5 py-1 rounded-md bg-[#EAE3D9] text-[#6B1D2F] border border-[#6B1D2F]/20 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};