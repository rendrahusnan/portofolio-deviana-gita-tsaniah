
import { useState } from 'react';
import type { ElementType, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Globe2,
  Sparkles,
} from 'lucide-react';

import japan01 from '../assets/japan/Jepang1.jpeg';
import japan02 from '../assets/japan/Jepang2.jpeg';
import japan03 from '../assets/japan/Jepang3.jpeg';
import japan04 from '../assets/japan/Jepang4.jpeg';

import journalScreenshot from '../assets/documents/jurnal.jpeg';

const japanPhotos = [
  {
    src: japan01,
    alt: 'Dokumentasi proyek pertukaran budaya di Jepang',
    label: 'Cultural Exchange',
  },
  {
    src: japan02,
    alt: 'Dokumentasi kegiatan wisata halal di Jepang',
    label: 'Halal Tourism',
  },
  {
    src: japan03,
    alt: 'Kegiatan pengenalan budaya Indonesia',
    label: 'Indonesian Culture',
  },
  {
    src: japan04,
    alt: 'Dokumentasi kegiatan akademik di Jepang',
    label: 'Project Moments',
  },
];

const projectDetails = [
  'Cultural Exchange',
  'Indonesian Culture',
  'Halal Tourism',
];

type ProjectCardProps = {
  title: string;
  subtitle: string;
  icon: ElementType;
  children: ReactNode;
  index: number;
};

function ProjectCard({
  title,
  subtitle,
  icon: Icon,
  children,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.65, delay: index * 0.12 }}
      className="relative flex min-w-0 flex-col"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="mb-2 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-[#b08a50]">
            <span className="h-px w-5 bg-[#b08a50]/70" />
            Project No. {String(index + 1).padStart(2, '0')}
          </p>

          <h3 className="font-serif text-2xl leading-tight text-[#ead9b9] sm:text-3xl">
            {title}
          </h3>

          <p className="mt-3 text-[10px] leading-relaxed tracking-wide text-[#c6b59b]/65 sm:text-xs">
            {subtitle}
          </p>
        </div>

        <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[#b08a50]/40 bg-[#6b1d2f]/25 text-[#c6a875]">
          <Icon size={21} strokeWidth={1.2} />
        </div>
      </div>

      {children}
    </motion.article>
  );
}

function OrnamentalDivider() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center justify-center gap-4"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b08a50]/40" />
      <span className="font-serif text-xl text-[#b08a50]/70">❦</span>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b08a50]/40" />
    </div>
  );
}

export const AcademicProjects = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  const changePhoto = (direction: number) => {
    setActivePhoto(
      (current) =>
        (current + direction + japanPhotos.length) %
        japanPhotos.length,
    );
  };

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden bg-[#211713] px-4 py-20 text-[#ead9b9] sm:px-6 sm:py-24 lg:px-12"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(107,29,47,0.36),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(176,138,80,0.14),transparent_45%)]" />

        <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#6b1d2f]/20 blur-[100px]" />

        <div className="absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-[#b08a50]/10 blur-[100px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#160f0b]/10 via-transparent to-[#160f0b]/35" />
      </div>

      {/* Vintage border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 z-0 border border-[#b08a50]/20 sm:inset-5 md:inset-8"
      />

      {/* Floral ornaments */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <span className="absolute left-4 top-4 font-serif text-3xl text-[#b08a50]/60 sm:left-7 sm:top-7 sm:text-4xl">
          ❦
        </span>

        <span className="absolute right-4 top-4 rotate-90 font-serif text-3xl text-[#b08a50]/60 sm:right-7 sm:top-7 sm:text-4xl">
          ❦
        </span>

        <span className="absolute -left-6 top-[35%] rotate-[-18deg] font-serif text-7xl text-[#b08a50]/10 sm:left-1 sm:text-8xl">
          ❧
        </span>

        <span className="absolute -right-6 top-[65%] rotate-[18deg] font-serif text-7xl text-[#b08a50]/10 sm:right-1 sm:text-8xl">
          ❦
        </span>

        <div className="absolute left-8 right-8 top-12 h-px bg-gradient-to-r from-transparent via-[#b08a50]/30 to-transparent sm:left-16 sm:right-16" />

        <div className="absolute bottom-10 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#b08a50]/30 to-transparent sm:left-16 sm:right-16" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#b08a50]" />

          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#c6a875] sm:text-[10px]">
            Academic &amp; International Projects
          </p>

          <Sparkles size={13} className="text-[#b08a50]" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 flex flex-col justify-between gap-5 border-b border-[#b08a50]/30 pb-8 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 font-serif text-xs italic tracking-[0.15em] text-[#b08a50] sm:text-sm">
              Research, Culture &amp; Communication
            </p>

            <h2 className="font-serif text-[clamp(2.8rem,8vw,6.5rem)] font-medium uppercase leading-[0.88] tracking-[-0.055em] text-[#ead9b9]">
              Selected
              <br />
              <span className="font-normal italic text-[#a98265]">
                Work.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-xs leading-6 text-[#c6b59b]/70 sm:text-sm">
              A collection of academic research, cultural encounters,
              and experiences that shaped a broader perspective.
            </p>
          </div>

          <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2">
            <span className="font-serif text-5xl font-light text-[#b08a50]/80 md:text-6xl">
              2025
            </span>

            <span className="text-[9px] uppercase tracking-[0.28em] text-[#c6b59b]/60">
              Selected Edition
            </span>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 items-stretch gap-14 lg:grid-cols-2 lg:gap-12">
          {/* PROJECT 01: JAPAN */}
          <ProjectCard
            title="Pertukaran Budaya"
            subtitle="Universitas Ahmad Dahlan · Jepang · 2025"
            icon={Globe2}
            index={0}
          >
            <h4 className="mb-5 font-serif text-xl italic text-[#b08a50] sm:text-2xl">
              &amp; Wisata Halal
            </h4>

            {/* Main photo frame */}
            <div className="relative border border-[#b08a50]/70 bg-[#b08a50]/10 p-1.5 shadow-[0_25px_70px_rgba(0,0,0,0.38)] sm:p-2">
              <div className="border border-[#b08a50]/30 bg-[#120d0a] p-1">
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-[#160f0b] sm:min-h-[360px] lg:min-h-[420px]">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={japanPhotos[activePhoto].src}
                      src={japanPhotos[activePhoto].src}
                      alt={japanPhotos[activePhoto].alt}
                      loading="lazy"
                      initial={{
                        opacity: 0,
                        scale: 1.04,
                        rotateY: -3,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotateY: 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                        rotateY: 3,
                      }}
                      transition={{ duration: 0.4 }}
                      className="block h-auto max-h-[560px] w-full object-contain"
                    />
                  </AnimatePresence>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#160c09]/95 via-transparent to-[#160c09]/10" />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-6">
                    <div>
                      <p className="mb-2 text-[8px] uppercase tracking-[0.3em] text-[#c6a875] sm:text-[9px]">
                        Japan · 2025
                      </p>

                      <p className="font-serif text-xl italic text-[#fff0d4] sm:text-2xl">
                        {japanPhotos[activePhoto].label}
                      </p>
                    </div>

                    <span className="font-serif text-4xl font-light text-[#ead9b9]/80">
                      {String(activePhoto + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <span className="pointer-events-none absolute left-3 top-3 font-serif text-2xl text-[#d2ae70]/80">
                    ❧
                  </span>

                  <span className="pointer-events-none absolute right-3 top-3 rotate-180 font-serif text-2xl text-[#d2ae70]/80">
                    ❧
                  </span>
                </div>
              </div>
            </div>

            {/* Photo controls */}
            <div className="mt-4 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.16em] text-[#c6b59b]/60">
                Archive No. {String(activePhoto + 1).padStart(2, '0')}
                <span className="mx-2 text-[#b08a50]/60">/</span>
                {String(japanPhotos.length).padStart(2, '0')}
              </p>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => changePhoto(-1)}
                  aria-label="Foto Jepang sebelumnya"
                  className="flex size-10 items-center justify-center border border-[#b08a50]/40 text-[#ead9b9] transition duration-300 hover:border-[#b08a50] hover:bg-[#6b1d2f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08a50]"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={() => changePhoto(1)}
                  aria-label="Foto Jepang berikutnya"
                  className="flex size-10 items-center justify-center border border-[#b08a50]/40 bg-[#6b1d2f] text-[#ead9b9] transition duration-300 hover:bg-[#8a2b40] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08a50]"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 grid grid-cols-4 gap-2">
              {japanPhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Pilih foto Jepang ${index + 1}`}
                  aria-pressed={activePhoto === index}
                  className={`group min-w-0 border p-1 transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08a50] ${
                    activePhoto === index
                      ? 'border-[#b08a50] bg-[#b08a50]/15'
                      : 'border-[#b08a50]/20 opacity-65 hover:border-[#b08a50]/60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-14 w-full object-cover grayscale-[25%] transition duration-300 group-hover:grayscale-0 sm:h-20"
                  />

                  <span className="mt-1 block truncate text-[7px] uppercase tracking-wider text-[#ead9b9]/70 sm:text-[8px]">
                    {String(index + 1).padStart(2, '0')} — {photo.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Project description */}
            <div className="mt-6 border-l border-[#b08a50]/60 pl-4 sm:pl-5">
              <p className="text-xs leading-7 text-[#d0bea3]/80 sm:text-sm">
                Memperkenalkan budaya Indonesia melalui batik dan
                mainan tradisional, sekaligus mempelajari budaya lintas
                negara dan pengalaman wisata halal di Jepang.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {projectDetails.map((detail) => (
                  <span
                    key={detail}
                    className="border border-[#b08a50]/25 bg-[#160f0b]/40 px-3 py-2 text-[9px] text-[#c6b59b]/80"
                  >
                    {detail}
                  </span>
                ))}
              </div>
            </div>
          </ProjectCard>

          {/* PROJECT 02: JOURNAL */}
          <ProjectCard
            title="Publikasi"
            subtitle="Program Studi Sastra Inggris · 2025"
            icon={BookOpen}
            index={1}
          >
            <h4 className="mb-5 font-serif text-xl italic text-[#b08a50] sm:text-2xl">
              Jurnal Ilmiah
            </h4>

            {/* Journal paper container */}
            <div className="flex h-full flex-col border border-[#b08a50]/60 bg-[#e8d7b9] p-2 text-[#241611] shadow-[0_25px_70px_rgba(0,0,0,0.3)] sm:p-3">
              {/* Journal header */}
              <div className="flex shrink-0 items-center justify-between gap-3 border-b border-[#8d6b42]/40 px-2 py-3">
                <div>
                  <p className="font-serif text-[10px] font-bold uppercase tracking-[0.2em] text-[#6b1d2f]">
                    Academic Archive
                  </p>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.12em] text-[#715a40]">
                    Research Collection · 2025
                  </p>
                </div>

                <BookOpen
                  size={21}
                  strokeWidth={1.2}
                  className="shrink-0 text-[#6b1d2f]"
                />
              </div>

              {/* FIXED IMAGE FRAME
                  The frame has a consistent height.
                  The journal image keeps its original aspect ratio. */}
              <div className="relative mt-3 flex h-[320px] shrink-0 items-center justify-center overflow-hidden border border-[#a17b48]/50 bg-[#f7edda] p-3 sm:h-[390px] sm:p-5 lg:h-[420px]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-2 border border-[#b08a50]/25"
                />

                <motion.img
                  src={journalScreenshot}
                  alt="Dokumentasi publikasi jurnal ilmiah"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 block h-full w-full object-contain object-center"
                />

                <span className="absolute bottom-3 left-3 z-20 border border-[#b08a50]/50 bg-[#241611]/95 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#ead9b9] sm:bottom-4 sm:left-4 sm:text-[9px]">
                  Publication Evidence
                </span>
              </div>

              {/* Journal details */}
              <div className="mt-4 flex flex-1 flex-col border-t border-[#8d6b42]/40 pt-4 sm:mt-5 sm:pt-5">
                <p className="mb-3 text-[8px] font-bold uppercase tracking-[0.24em] text-[#6b1d2f]">
                  Academic Research · 2025
                </p>

                <h5 className="font-serif text-base font-semibold leading-7 text-[#352317] sm:text-lg">
                  Social Class Inequality Depicted in Children Picture
                  Book The Rich Man and The Monkey by Idries Shah:
                  Genetic Structuralism Lucien Goldmann&apos;s Perspective
                </h5>

                <div className="my-4">
                  <OrnamentalDivider />
                </div>

                <p className="text-xs leading-7 text-[#715a40]">
                  Artikel ilmiah berbahasa Inggris yang membahas
                  ketimpangan kelas sosial dalam buku cerita anak melalui
                  perspektif strukturalisme genetik Lucien Goldmann.
                </p>

                <div className="mt-auto flex items-center gap-3 border-t border-[#8d6b42]/35 pt-4">
                  <div className="flex size-9 shrink-0 items-center justify-center bg-[#6b1d2f] text-[#ead9b9]">
                    <BookOpen size={17} strokeWidth={1.4} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#6b1d2f]">
                      Journal Documentation
                    </p>

                    <p className="mt-1 font-serif text-xs italic text-[#715a40]">
                      A record of academic work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ProjectCard>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 border-t border-[#b08a50]/30 pt-5 md:mt-20"
        >
          <div className="mb-5">
            <OrnamentalDivider />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[8px] uppercase tracking-[0.2em] text-[#c6b59b]/55 sm:text-[9px]">
              Research · Culture · Communication
            </p>

            <p className="font-serif text-sm italic text-[#b08a50]">
              Enduring knowledge, lasting impressions.
            </p>

            <p className="font-serif text-xs text-[#c6b59b]/50">
              Selected Projects — 2025
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicProjects;
