
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ArrowUpRight,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

import certificate1 from '../assets/certificate/Certificate1.jpeg';
import certificate2 from '../assets/certificate/Certificate2.jpeg';

const certificates = [
  {
    id: '01',
    title: 'Sertifikat 1',
    image: certificate1,
    description: 'Dokumentasi sertifikat.',
  },
  {
    id: '02',
    title: 'Sertifikat 2',
    image: certificate2,
    description: 'Dokumentasi sertifikat.',
  },
];

export const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<(typeof certificates)[number] | null>(null);

  const selectedIndex = selectedCertificate
    ? certificates.findIndex(
        (certificate) => certificate.id === selectedCertificate.id,
      )
    : -1;

  const showCertificate = (index: number) => {
    const nextIndex =
      (index + certificates.length) % certificates.length;

    setSelectedCertificate(certificates[nextIndex]);
  };

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null);
      }

      if (event.key === 'ArrowRight') {
        showCertificate(selectedIndex + 1);
      }

      if (event.key === 'ArrowLeft') {
        showCertificate(selectedIndex - 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCertificate, selectedIndex]);

  return (
    <section
      id="certificates"
      className="relative isolate overflow-hidden border-b border-[#b08a50]/30 bg-[#21150f] py-24 text-[#e8d6b9] sm:py-28 md:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#51202a] via-[#352317] to-[#170f0b]" />

        <div className="absolute -left-48 top-0 size-[32rem] rounded-full bg-[#8c3543]/20 blur-[130px]" />

        <div className="absolute -right-40 top-1/4 size-[30rem] rounded-full bg-[#b08a50]/10 blur-[130px]" />

        <div className="absolute -bottom-48 left-1/3 size-[35rem] rounded-full bg-[#6b1d2f]/25 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(15,9,6,0.48)_100%)]" />

        <div className="absolute inset-0 opacity-[0.055] [background-image:radial-gradient(#e8d6b9_0.65px,transparent_0.65px)] [background-size:7px_7px]" />

        {/* Fine ornamental border */}
        <div className="absolute inset-3 border border-[#b08a50]/15 sm:inset-5 md:inset-7" />
        <div className="absolute inset-[18px] border border-[#b08a50]/10 sm:inset-[26px] md:inset-9" />

        {/* Floral ornaments */}
        <span className="absolute left-5 top-20 font-serif text-5xl text-[#c5a574]/15 sm:left-10 sm:text-7xl">
          ❦
        </span>

        <span className="absolute right-5 top-24 rotate-12 font-serif text-5xl text-[#c5a574]/15 sm:right-10 sm:text-7xl">
          ❧
        </span>

        <span className="absolute bottom-14 left-8 rotate-12 font-serif text-5xl text-[#c5a574]/10 sm:left-16 sm:text-7xl">
          ❧
        </span>

        <span className="absolute bottom-12 right-8 -rotate-12 font-serif text-5xl text-[#c5a574]/10 sm:right-16 sm:text-7xl">
          ❦
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
        >
          {/* Section heading */}
          <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b08a50]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#c5a574] sm:text-xs sm:tracking-[0.35em]">
                  Achievements &amp; Credentials
                </p>

                <Sparkles
                  size={13}
                  className="text-[#c5a574]/70"
                  strokeWidth={1.3}
                />
              </div>

              <h2 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[#f2e6d1] sm:text-6xl md:text-8xl">
                A Mark of
                <br />
                <span className="italic text-[#c5a574]">
                  Excellence.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-[#d0bda4]/75 md:text-base">
                Setiap pencapaian adalah bagian dari perjalanan
                untuk terus belajar, berkembang, dan memberikan
                hasil yang lebih baik.
              </p>
            </div>

            <div className="flex items-center justify-between border-y border-[#b08a50]/25 py-4 md:block md:border-y-0 md:border-l md:py-2 md:pl-6">
              <div>
                <p className="font-serif text-5xl text-[#c5a574]">
                  {String(certificates.length).padStart(2, '0')}
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#d0bda4]/70">
                  Credentials
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-[#d0bda4]/70">
                  &amp; Milestones
                </p>
              </div>

              <div className="text-right md:hidden">
                <span className="font-serif text-3xl italic text-[#b08a50]/70">
                  ❦
                </span>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#d0bda4]/50">
                  Personal Archive
                </p>
              </div>
            </div>
          </div>

          {/* Certificate gallery */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
            {certificates.map((certificate, index) => (
              <motion.button
                key={certificate.id}
                type="button"
                onClick={() => setSelectedCertificate(certificate)}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -7,
                  rotateX: 1.2,
                  rotateY: index === 0 ? -1 : 1,
                }}
                whileTap={{ scale: 0.99 }}
                style={{ transformPerspective: 1200 }}
                className="group relative min-w-0 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a574]"
                aria-label={`Lihat ${certificate.title}`}
              >
                {/* Card shadow */}
                <div className="absolute inset-x-4 bottom-[-10px] top-4 bg-black/30 blur-xl transition-all duration-500 group-hover:inset-x-2 group-hover:bg-black/45" />

                {/* Outer frame */}
                <div className="relative border border-[#b08a50]/60 bg-[#21150f] p-2 shadow-[0_15px_40px_rgba(0,0,0,0.22)] transition-all duration-500 group-hover:border-[#d6b77e] sm:p-3">
                  {/* Inner gold line */}
                  <div className="pointer-events-none absolute inset-[5px] border border-[#b08a50]/30 sm:inset-[7px]" />

                  {/* Corner ornaments */}
                  <span className="pointer-events-none absolute left-1 top-1 z-20 h-8 w-8 border-l border-t border-[#d6b77e] sm:left-2 sm:top-2 sm:h-10 sm:w-10" />

                  <span className="pointer-events-none absolute right-1 top-1 z-20 h-8 w-8 border-r border-t border-[#d6b77e] sm:right-2 sm:top-2 sm:h-10 sm:w-10" />

                  <span className="pointer-events-none absolute bottom-1 left-1 z-20 h-8 w-8 border-b border-l border-[#d6b77e] sm:bottom-2 sm:left-2 sm:h-10 sm:w-10" />

                  <span className="pointer-events-none absolute bottom-1 right-1 z-20 h-8 w-8 border-b border-r border-[#d6b77e] sm:bottom-2 sm:right-2 sm:h-10 sm:w-10" />

                  {/* Certificate image mat */}
                  <div className="relative flex h-[260px] items-center justify-center overflow-hidden border border-[#b08a50]/25 bg-[#e8dcc6] p-5 sm:h-[340px] sm:p-7 lg:h-[380px]">
                    {/* Paper-like background */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-[#8c6a43]/15" />

                    <div className="pointer-events-none absolute inset-3 border border-[#b08a50]/15 sm:inset-4" />

                    {/* Soft vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(65,40,25,0.09)_100%)]" />

                    <motion.img
                      src={certificate.image}
                      alt={certificate.title}
                      loading="lazy"
                      draggable={false}
                      className="relative z-10 block max-h-full max-w-full object-contain drop-shadow-[0_10px_14px_rgba(41,27,20,0.24)] transition-[filter] duration-500 group-hover:drop-shadow-[0_14px_20px_rgba(41,27,20,0.35)]"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#21150f]/0 transition-colors duration-500 group-hover:bg-[#21150f]/40">
                      <span className="flex translate-y-3 items-center gap-3 border border-[#d6b77e] bg-[#352317]/95 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#f2e6d1] opacity-0 shadow-xl transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-[10px]">
                        View Certificate
                        <ArrowUpRight size={15} />
                      </span>
                    </div>

                    {/* Archive label */}
                    <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 text-[#6b1d2f]/70">
                      <Sparkles size={12} />
                      <span className="text-[8px] font-semibold uppercase tracking-[0.17em] sm:text-[9px]">
                        Personal Archive
                      </span>
                    </div>

                    <span className="absolute right-5 top-5 z-20 font-serif text-sm italic text-[#6b1d2f]/60">
                      No. {certificate.id}
                    </span>
                  </div>
                </div>

                {/* Certificate caption */}
                <div className="relative flex items-start justify-between gap-4 border-b border-[#b08a50]/35 py-6 sm:py-7">
                  <div className="flex min-w-0 items-start gap-4 sm:gap-5">
                    <span className="font-serif text-3xl italic leading-none text-[#c5a574]/65 sm:text-4xl">
                      {certificate.id}
                    </span>

                    <div className="min-w-0">
                      <div className="mb-2 flex items-center gap-2">
                        <Award
                          size={13}
                          strokeWidth={1.5}
                          className="shrink-0 text-[#c5a574]"
                        />

                        <span className="text-[9px] uppercase tracking-[0.24em] text-[#c5a574] sm:text-[10px]">
                          Certificate
                        </span>
                      </div>

                      <h3 className="font-serif text-xl text-[#f2e6d1] transition-colors duration-300 group-hover:text-[#d6b77e] sm:text-2xl">
                        {certificate.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-[#d0bda4]/65 sm:text-sm">
                        {certificate.description}
                      </p>
                    </div>
                  </div>

                  <span className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-[#b08a50]/45 text-[#c5a574] transition-all duration-300 group-hover:border-[#d6b77e] group-hover:bg-[#b08a50]/15 group-hover:text-[#f2e6d1]">
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-14 flex flex-col gap-3 border-t border-[#b08a50]/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[9px] uppercase tracking-[0.18em] text-[#d0bda4]/60 sm:text-[10px] sm:tracking-[0.22em]">
              Learning is a lifelong achievement.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#b08a50]/60" />

              <span className="font-serif text-sm italic text-[#c5a574]">
                Growth, documented.
              </span>

              <span className="font-serif text-lg text-[#b08a50]/70">
                ❦
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Certificate preview modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            key="certificate-modal"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#100906]/95 p-3 backdrop-blur-lg sm:p-6"
            onClick={() => setSelectedCertificate(null)}
            role="presentation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selectedCertificate.title}
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, scale: 0.94, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative flex max-h-[94dvh] w-full max-w-6xl flex-col border border-[#b08a50]/70 bg-[#352317] p-3 shadow-[0_25px_100px_rgba(0,0,0,0.55)] sm:p-6 md:p-8"
            >
              <div className="pointer-events-none absolute inset-2 border border-[#b08a50]/25 sm:inset-3" />

              {/* Modal header */}
              <div className="relative z-10 mb-4 flex items-center justify-between gap-4 border-b border-[#b08a50]/30 pb-4 sm:mb-6 sm:pb-5">
                <div className="flex min-w-0 items-center gap-3">
                  <Award
                    size={20}
                    className="shrink-0 text-[#c5a574]"
                    strokeWidth={1.5}
                  />

                  <div className="min-w-0">
                    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-[#c5a574] sm:tracking-[0.25em]">
                      Personal Archive / {selectedCertificate.id}
                    </p>

                    <h3 className="truncate font-serif text-lg text-[#f2e6d1] sm:text-2xl">
                      {selectedCertificate.title}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Tutup pratinjau sertifikat"
                  className="flex size-10 shrink-0 items-center justify-center border border-[#b08a50]/50 text-[#e8d6b9] transition-colors hover:border-[#d6b77e] hover:bg-[#6b1d2f] hover:text-white focus-visible:outline-2 focus-visible:outline-[#d6b77e]"
                >
                  <X size={19} />
                </button>
              </div>

              {/* Large image */}
              <div className="relative z-10 flex min-h-0 flex-1 items-center justify-center overflow-auto border border-[#b08a50]/25 bg-[#21150f] p-3 sm:p-6">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  draggable={false}
                  className="block max-h-[65dvh] max-w-full object-contain"
                />
              </div>

              {/* Modal footer */}
              <div className="relative z-10 mt-4 flex items-center justify-between gap-3 pt-1">
                <p className="text-xs leading-5 text-[#d0bda4]/70">
                  {selectedCertificate.description}
                </p>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    onClick={() => showCertificate(selectedIndex - 1)}
                    aria-label="Sertifikat sebelumnya"
                    className="flex size-9 items-center justify-center border border-[#b08a50]/40 text-[#e8d6b9] transition-colors hover:border-[#d6b77e] hover:bg-[#6b1d2f]"
                  >
                    <ChevronLeft size={17} />
                  </button>

                  <span className="min-w-12 text-center font-serif text-sm italic text-[#c5a574]">
                    {selectedCertificate.id} /{' '}
                    {String(certificates.length).padStart(2, '0')}
                  </span>

                  <button
                    type="button"
                    onClick={() => showCertificate(selectedIndex + 1)}
                    aria-label="Sertifikat berikutnya"
                    className="flex size-9 items-center justify-center border border-[#b08a50]/40 text-[#e8d6b9] transition-colors hover:border-[#d6b77e] hover:bg-[#6b1d2f]"
                  >
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
