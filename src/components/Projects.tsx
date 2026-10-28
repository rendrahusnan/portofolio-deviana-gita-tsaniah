
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight } from 'lucide-react';

const works = [
  {
    id: '01',
    title: 'Publikasi Jurnal Ilmiah Bereputasi SINTA',
    category: 'Research & Academic Writing',
    description:
      'Melakukan riset, menyusun naskah akademik, menyunting bahasa (proofreading), dan memublikasikan artikel ilmiah pada jurnal nasional terakreditasi SINTA.',
    tags: [
      'Academic Research',
      'SINTA Journal',
      'Scientific Writing',
      'Proofreading',
    ],
  },
  {
    id: '02',
    title: 'Studi Lintas Budaya & Wisata Halal Jepang',
    category: 'International Project',
    description:
      'Menyusun laporan dan melakukan riset terkait perkembangan sektor wisata halal serta komunikasi lintas budaya selama program di Jepang.',
    tags: ['Cross-Cultural Study', 'Halal Tourism', 'Bilingual Report'],
  },
  {
    id: '03',
    title: 'International Academic Visit Report',
    category: 'Diplomacy & Field Study',
    description:
      'Mendokumentasikan kegiatan dan menyusun laporan kunjungan akademik internasional bersama Kedutaan Besar Republik Indonesia (KBRI) di Singapura.',
    tags: [
      'International Relations',
      'Documentation',
      'Public Communication',
    ],
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="border-b border-[#6B1D2F]/20 py-20 md:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end md:mb-12">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#6B1D2F]">
              <BookOpen size={15} />
              Academic & Professional Works
            </p>

            <h2 className="font-serif text-4xl font-medium tracking-tight text-[#2A1810] sm:text-5xl md:text-6xl">
              Riset & Karya<span className="text-[#6B1D2F]">.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[#786B62]">
            Rekam jejak penulisan ilmiah, publikasi jurnal, dan proyek riset
            internasional.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {works.map((work, index) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group flex min-w-0 flex-col justify-between rounded-3xl border border-[#6B1D2F]/15 bg-[#F5F0E8] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#6B1D2F]/35 hover:shadow-lg sm:p-6 lg:p-7"
            >
              <div>
                <div className="mb-6 flex items-start justify-between gap-3">
                  <span className="max-w-[85%] rounded-full bg-[#6B1D2F]/10 px-3 py-1.5 text-[10px] font-semibold uppercase leading-5 tracking-wider text-[#6B1D2F]">
                    {work.category}
                  </span>

                  <span className="shrink-0 font-serif text-sm font-semibold text-[#6B1D2F]/60">
                    {work.id}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-semibold leading-snug text-[#2A1810] transition-colors group-hover:text-[#6B1D2F] sm:text-2xl">
                  {work.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#786B62]">
                  {work.description}
                </p>
              </div>

              <div className="mt-7 border-t border-[#6B1D2F]/15 pt-5">
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="max-w-full rounded-lg border border-[#6B1D2F]/15 bg-[#EAE3D9] px-2.5 py-1.5 text-[11px] font-medium leading-4 text-[#6B1D2F]"
                      style={{ overflowWrap: 'anywhere' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-[#786B62]">
                    Selected work
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-[#6B1D2F] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
