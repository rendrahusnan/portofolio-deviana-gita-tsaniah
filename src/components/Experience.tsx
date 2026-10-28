import { motion } from 'framer-motion';
import magang01 from '../assets/experience/magang1.jpeg';
import magang02 from '../assets/experience/magang2.jpeg';
import { Briefcase, Globe2, MapPin, Feather } from 'lucide-react';

const experiences = [
  {
    period: 'MAGANG',
    year: 'Professional Experience',
    role: 'Staf Intern Administrasi & Pelayanan Publik',
    institution: 'Kantor Imigrasi Kelas I Non-TPI Pemalang',
    location: 'Indonesia',
    icon: Briefcase,
    desc: [
      'Mengelola administrasi perkantoran, pengarsipan berkas dokumen keimigrasian, serta entri data pemohon secara rapi dan teliti.',
      'Melayani komunikasi publik dan menyediakan informasi keimigrasian dalam Bahasa Indonesia dan Bahasa Inggris.',
    ],
  },
  {
    period: '2025',
    year: 'Cultural Exchange',
    role: 'Peserta Proyek Pertukaran Budaya & Wisata Halal',
    institution: 'Program Kebudayaan — Jepang',
    location: 'Jepang',
    icon: Globe2,
    desc: [
      'Mengikuti riset lapangan, analisis data budaya, serta studi perbandingan pariwisata halal dan adaptasi multikultural di Jepang.',
    ],
  },
  {
    period: '2023',
    year: 'International Academic Visit',
    role: 'Peserta International Academic Visit',
    institution: 'KBRI Singapura & Institusi Mitra',
    location: 'Singapura',
    icon: Globe2,
    desc: [
      'Mengikuti kunjungan akademik internasional, diplomasi budaya, dan penyusunan laporan studi lintas negara bersama KBRI Singapura.',
    ],
  },
];

const internshipPhotos = [
  {
    src: magang01,
    alt: 'Dokumentasi kegiatan magang pertama',
    caption: 'Memory No. 01',
  },
  {
    src: magang02,
    alt: 'Dokumentasi kegiatan magang kedua',
    caption: 'Memory No. 02',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#241017] px-5 py-20 text-[#ead9bc] sm:px-8 md:py-28"
    >
      {/* Cahaya dramatis di latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#6b1d2f]/20 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#a17b48]/10 blur-[110px]"
      />

      {/* Bingkai dekoratif */}
      <div className="pointer-events-none absolute inset-3 border border-[#b89559]/30 sm:inset-5 md:inset-8">
        <span className="absolute -left-1 -top-1 font-serif text-3xl text-[#b89559]">
          ❦
        </span>
        <span className="absolute -right-1 -top-1 font-serif text-3xl text-[#b89559]">
          ❦
        </span>
        <span className="absolute -bottom-1 -left-1 font-serif text-3xl text-[#b89559]">
          ❦
        </span>
        <span className="absolute -bottom-1 -right-1 font-serif text-3xl text-[#b89559]">
          ❦
        </span>
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3 sm:gap-4">
            <span className="h-px w-8 bg-[#b89559]/70 sm:w-16" />
            <Feather size={17} className="shrink-0 text-[#b89559]" />

            <p className="text-[9px] uppercase tracking-[0.25em] text-[#c7a66d] sm:text-xs sm:tracking-[0.38em]">
              A Chronicle of Experiences
            </p>

            <Feather
              size={17}
              className="shrink-0 scale-x-[-1] text-[#b89559]"
            />
            <span className="h-px w-8 bg-[#b89559]/70 sm:w-16" />
          </div>

          <h2 className="font-serif text-5xl font-normal tracking-tight text-[#f1e4ce] sm:text-6xl md:text-8xl">
            Pengalaman
            <span className="italic text-[#b89559]">.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl font-serif text-base italic leading-8 text-[#bba991] sm:text-lg">
            Setiap perjalanan menyimpan cerita, setiap pengalaman meninggalkan
            makna.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b89559]/50" />
            <span className="font-serif text-2xl text-[#b89559]">❦</span>
            <span className="h-px w-12 bg-[#b89559]/50" />
          </div>
        </motion.header>

        {/* Timeline pengalaman */}
        <div className="relative space-y-10 before:absolute before:bottom-8 before:left-[19px] before:top-8 before:w-px before:bg-linear-to-b before:from-[#b89559]/70 before:via-[#b89559]/30 before:to-transparent md:space-y-12 md:before:left-1/2">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.article
                key={`${exp.period}-${exp.role}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="relative pl-12 md:pl-0"
              >
                {/* Titik timeline */}
                <div className="absolute left-[8px] top-7 z-10 flex size-6 items-center justify-center rounded-full border border-[#b89559] bg-[#241017] md:left-1/2 md:-translate-x-1/2">
                  <span className="size-2 rounded-full bg-[#b89559] shadow-[0_0_12px_#b89559]" />
                </div>

                <div
                  className={`relative md:grid md:grid-cols-2 md:gap-14 ${
                    !isEven ? 'md:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  {/* Panel periode dan lokasi */}
                  <div className="mb-4 flex items-center justify-center md:mb-0">
                    <div className="relative flex min-h-64 w-full flex-col items-center justify-center overflow-hidden border border-[#b89559]/40 bg-[#321720] px-5 py-8 text-center sm:min-h-72 sm:px-8">
                      <div className="pointer-events-none absolute inset-2 border border-[#b89559]/15" />

                      <span className="absolute left-3 top-2 font-serif text-2xl text-[#b89559]/70">
                        ❧
                      </span>
                      <span className="absolute right-3 top-2 font-serif text-2xl text-[#b89559]/70">
                        ❧
                      </span>

                      <p className="text-[10px] uppercase tracking-[0.3em] text-[#b89559]">
                        {exp.year}
                      </p>

                      <div className="my-5 flex size-16 items-center justify-center rounded-full border border-[#b89559]/50 bg-[#241017]">
                        <Icon
                          size={27}
                          strokeWidth={1.2}
                          className="text-[#d6b77c]"
                        />
                      </div>

                      <h3 className="font-serif text-2xl italic text-[#f1e4ce] sm:text-3xl">
                        {exp.period}
                      </h3>

                      <div className="mx-auto my-4 h-px w-16 bg-[#b89559]/60" />

                      <p className="flex items-center justify-center gap-2 text-xs tracking-wider text-[#bba991]">
                        <MapPin size={13} className="shrink-0 text-[#b89559]" />
                        {exp.location}
                      </p>

                      <span className="absolute bottom-2 left-3 rotate-180 font-serif text-2xl text-[#b89559]/70">
                        ❧
                      </span>
                      <span className="absolute bottom-2 right-3 rotate-180 font-serif text-2xl text-[#b89559]/70">
                        ❧
                      </span>
                    </div>
                  </div>

                  {/* Detail pengalaman */}
                  <div className="relative min-w-0 border border-[#b89559]/35 bg-[#f0e3cd] p-5 text-[#38241d] shadow-[0_15px_45px_rgba(0,0,0,0.22)] transition-all duration-500 hover:border-[#b89559]/80 sm:p-7 md:p-8">
                    <div className="pointer-events-none absolute inset-2 border border-[#a17b48]/20" />

                    <div className="relative min-w-0">
                      <p className="mb-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8d683a]">
                        Chapter 0{idx + 1}
                      </p>

                      <h3 className="break-words font-serif text-2xl leading-snug text-[#351720] sm:text-3xl">
                        {exp.role}
                      </h3>

                      <p className="mt-3 text-sm font-semibold leading-6 text-[#7a293a]">
                        {exp.institution}
                      </p>

                      <div className="my-5 flex items-center gap-3">
                        <span className="font-serif text-xl text-[#a17b48]">
                          ❦
                        </span>
                        <span className="h-px flex-1 bg-[#a17b48]/35" />
                      </div>

                      <ul className="space-y-4">
                        {exp.desc.map((description, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm leading-7 text-[#6f5a49]"
                          >
                            <span className="mt-2.5 shrink-0 font-serif text-lg text-[#a17b48]">
                              ✦
                            </span>
                            <span>{description}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Galeri foto magang: atas-bawah */}
                      {idx === 0 && (
                        <div className="mt-8 border-t border-[#a17b48]/30 pt-6">
                          <div className="mb-6 text-center">
                            <p className="font-serif text-2xl italic text-[#512330]">
                              Fragments of Memory
                            </p>

                            <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#8d683a]">
                              Internship Documentation
                            </p>

                            <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                              <span className="h-px w-10 bg-[#a17b48]/50" />
                              <span className="font-serif text-lg text-[#a17b48]">
                                ❦
                              </span>
                              <span className="h-px w-10 bg-[#a17b48]/50" />
                            </div>
                          </div>

                          {/* Setiap foto menempati satu baris */}
                          <div className="mx-auto flex w-full max-w-2xl flex-col gap-7">
                            {internshipPhotos.map((photo) => (
                              <motion.figure
                                key={photo.caption}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.3 }}
                                className="w-full border border-[#a17b48]/50 bg-[#e5d2b3] p-2.5 shadow-[0_8px_24px_rgba(53,23,32,0.2)] sm:p-4"
                              >
                                {/* Bingkai foto */}
                                <div className="flex w-full items-center justify-center border border-[#a17b48]/25 bg-[#2b1a1d] p-1.5 sm:p-2">
                                  <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                    className="block h-auto max-h-[650px] w-full object-contain"
                                  />
                                </div>

                                {/* Keterangan foto */}
                                <figcaption className="pb-1 pt-4 text-center">
                                  <span className="block font-serif text-base italic text-[#71553e]">
                                    {photo.caption}
                                  </span>

                                  <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-[#8d683a]">
                                    Internship Documentation · Pemalang
                                  </span>
                                </figcaption>
                              </motion.figure>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Penutup */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#b89559]/50 sm:w-24" />
            <span className="font-serif text-3xl text-[#b89559]">❦</span>
            <span className="h-px w-12 bg-[#b89559]/50 sm:w-24" />
          </div>

          <p className="mt-5 font-serif text-sm italic tracking-wide text-[#bba991] sm:text-base">
            Experience · Service · Cultural Exchange
          </p>

          <p className="mt-3 text-[9px] uppercase tracking-[0.3em] text-[#b89559]/60">
            An Everlasting Chapter
          </p>
        </motion.footer>
      </div>
    </section>
  );
}
