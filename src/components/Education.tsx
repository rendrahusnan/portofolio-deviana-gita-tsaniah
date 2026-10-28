
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  Sparkles,
  CalendarDays,
} from "lucide-react";

const education = [
  {
    period: "2022 — 2026",
    degree: "Bachelor of English Literature",
    institution: "Universitas Ahmad Dahlan",
    description:
      "Mempelajari bahasa Inggris, sastra, komunikasi, serta analisis teks dan penelitian. Perjalanan akademik ini membantu mengembangkan kemampuan berpikir kritis, menulis, dan menyampaikan ide dengan jelas.",
    result: "GPA 3.85 / 4.00",
    status: "Undergraduate Program",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative isolate overflow-hidden bg-[#2B1019] px-6 py-24 text-[#F1E4D0] sm:px-12 lg:px-24 lg:py-32"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#783644]/20 blur-[120px]" />
        <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-[#A17B48]/15 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A2635]/20 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(#E9D6B6 0.6px, transparent 0.7px)",
            backgroundSize: "6px 6px",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 49.9%, #D6B878 50%, transparent 50.1%)",
            backgroundSize: "100px 100%",
          }}
        />
      </div>

      {/* Vintage outer frame */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 border border-[#B89559]/50 sm:inset-5 lg:inset-7"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-[9px] border border-[#D6B878]/20 sm:inset-[11px]"
      />

      {/* Decorative corners */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-5 font-serif text-4xl text-[#B89559]/60 sm:left-8 sm:top-8"
      >
        ❦
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-5 top-5 font-serif text-4xl text-[#B89559]/60 sm:right-8 sm:top-8"
      >
        ❦
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 font-serif text-4xl text-[#B89559]/60 sm:bottom-8 sm:left-8"
      >
        ❧
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 right-5 font-serif text-4xl text-[#B89559]/60 sm:bottom-8 sm:right-8"
      >
        ❧
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 text-center sm:mb-20"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#B89559]" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#D6B878] sm:text-xs">
              The Academic Journey
            </span>
            <span className="h-px w-10 bg-[#B89559]" />
          </div>

          <h2 className="font-serif text-5xl tracking-tight text-[#F1E4D0] sm:text-6xl md:text-7xl">
            Edu
            <span className="italic text-[#D4B277]">cation.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-[#DCCAB6]/75 sm:text-base">
            Every chapter of learning shapes a new perspective, builds
            character, and opens the door to new possibilities.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#B89559]/60" />
            <Sparkles size={16} strokeWidth={1.2} className="text-[#D6B878]" />
            <span className="h-px w-12 bg-[#B89559]/60" />
          </div>
        </motion.div>

        {/* Timeline and education card */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-[27px] top-12 hidden w-px bg-gradient-to-b from-transparent via-[#B89559]/70 to-transparent md:block"
          />

          {education.map((item, index) => (
            <motion.article
              key={`${item.period}-${item.degree}`}
              initial={{ opacity: 0, y: 40, rotateX: 3 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative md:pl-20"
            >
              {/* Timeline marker */}
              <div
                aria-hidden="true"
                className="absolute left-[18px] top-12 z-20 hidden h-5 w-5 items-center justify-center rounded-full border border-[#D6B878] bg-[#2B1019] md:flex"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#D6B878]" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -5, rotateX: 0.5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative"
              >
                {/* Shadow layer */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 translate-x-2 translate-y-2 border border-[#B89559]/20 bg-[#160910]/40"
                />

                <div className="relative border border-[#B89559]/70 bg-gradient-to-br from-[#45202B] via-[#351620] to-[#281019] p-6 shadow-[0_25px_80px_rgba(0,0,0,0.28)] sm:p-10 lg:p-12">
                  {/* Inner frame */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-2 border border-[#D6B878]/20 transition-colors duration-500 group-hover:border-[#D6B878]/40 sm:inset-3"
                  />

                  {/* Card corner ornaments */}
                  <span
                    aria-hidden="true"
                    className="absolute left-3 top-3 font-serif text-lg text-[#D6B878]/70"
                  >
                    ✦
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-3 top-3 font-serif text-lg text-[#D6B878]/70"
                  >
                    ✦
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 left-3 font-serif text-lg text-[#D6B878]/70"
                  >
                    ✦
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-3 right-3 font-serif text-lg text-[#D6B878]/70"
                  >
                    ✦
                  </span>

                  <div className="relative z-10 grid gap-8 md:grid-cols-[120px_minmax(0,1fr)] md:gap-10">
                    {/* Graduation icon */}
                    <div className="flex items-start md:justify-center">
                      <motion.div
                        whileHover={{ rotate: -5, scale: 1.05 }}
                        transition={{ duration: 0.25 }}
                        className="relative flex h-24 w-24 items-center justify-center border border-[#B89559]/70 bg-[#2B1019] text-[#D6B878] shadow-[inset_0_0_25px_rgba(184,149,89,0.06)] sm:h-28 sm:w-28"
                      >
                        <div
                          aria-hidden="true"
                          className="absolute inset-1.5 border border-[#B89559]/25"
                        />
                        <GraduationCap
                          size={43}
                          strokeWidth={1.1}
                          className="relative"
                        />
                        <span className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center border border-[#D6B878]/70 bg-[#351620]">
                          <BookOpen size={14} strokeWidth={1.4} />
                        </span>
                      </motion.div>
                    </div>

                    {/* Education details */}
                    <div className="min-w-0">
                      <div className="mb-5 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 border border-[#B89559]/50 bg-[#2B1019]/50 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#D6B878]">
                          <CalendarDays size={12} />
                          {item.period}
                        </span>

                        <span className="border border-[#DCCAB6]/20 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#DCCAB6]/65">
                          {item.status}
                        </span>
                      </div>

                      <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#C9A778]">
                        Field of Study
                      </p>

                      <h3 className="font-serif text-2xl leading-snug text-[#F1E4D0] sm:text-3xl lg:text-4xl">
                        {item.degree}
                      </h3>

                      <p className="mt-4 text-sm leading-7 tracking-wide text-[#D4B277] sm:text-base">
                        {item.institution}
                      </p>

                      <div className="my-7 flex items-center gap-3">
                        <span className="h-px w-10 bg-[#B89559]" />
                        <BookOpen
                          size={15}
                          strokeWidth={1.3}
                          className="text-[#B89559]"
                        />
                        <span className="h-px flex-1 bg-[#B89559]/25" />
                      </div>

                      <p className="max-w-2xl text-sm leading-8 text-[#DCCAB6]/80 sm:text-base">
                        {item.description}
                      </p>

                      {/* Academic achievement */}
                      <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-[#B89559]/30 pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center border border-[#B89559]/50 bg-[#2B1019]/70 text-[#D6B878]">
                            <Award size={21} strokeWidth={1.3} />
                          </div>

                          <div>
                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#C9A778]">
                              Academic Achievement
                            </p>
                            <p className="mt-1 font-serif text-xl text-[#F1E4D0]">
                              {item.result}
                            </p>
                          </div>
                        </div>

                        <span className="font-serif text-sm italic text-[#DCCAB6]/50">
                          A chapter of growth
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="mt-8 flex items-center justify-center gap-3 md:justify-end">
                <span className="h-px w-8 bg-[#B89559]/40" />
                <p className="text-center text-[9px] uppercase tracking-[0.25em] text-[#B89559]/75">
                  Knowledge is a lifelong pursuit
                </p>
                <span className="h-px w-8 bg-[#B89559]/40" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-20 max-w-2xl text-center sm:mt-24"
        >
          <span className="font-serif text-5xl leading-none text-[#B89559]/70">
            “
          </span>

          <p className="-mt-1 font-serif text-xl italic leading-relaxed text-[#F1E4D0]/90 sm:text-2xl">
            The beautiful thing about learning is that no one can take it away
            from you.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#B89559]/50" />
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#C9A778]">
              Keep learning, keep growing
            </span>
            <span className="h-px w-8 bg-[#B89559]/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
