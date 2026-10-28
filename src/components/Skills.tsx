
import { useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  Brain,
  BriefcaseBusiness,
  Languages,
  Monitor,
  Sparkles,
} from 'lucide-react';

import skillPhoto from '../assets/skill/Hero.png';

const softSkills = [
  'Komunikasi interpersonal',
  'Kerja sama tim',
  'Ketelitian',
  'Adaptabilitas',
  'Manajemen waktu',
];

const hardSkills = [
  'Administrasi perkantoran',
  'Pengarsipan dokumen',
  'Entri dan pengolahan data',
  'Pelayanan publik',
  'Riset dan penulisan akademik',
];

const softwareSkills = [
  { name: 'Microsoft Word', type: 'word' },
  { name: 'Microsoft Excel', type: 'excel' },
  { name: 'Microsoft PowerPoint', type: 'powerpoint' },
  { name: 'Canva', type: 'canva' },
  { name: 'CapCut', type: 'capcut' },
];

const languages = [
  { name: 'Bahasa Indonesia', level: 'Native' },
  { name: 'Bahasa Inggris', level: 'Advanced' },
];

const skillGroups = [
  {
    title: 'Soft Skills',
    subtitle: 'Personal qualities',
    icon: Brain,
    skills: softSkills,
  },
  {
    title: 'Hard Skills',
    subtitle: 'Professional abilities',
    icon: BriefcaseBusiness,
    skills: hardSkills,
  },
];

type SkillCardProps = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: string[];
  index: number;
};

function SkillCard({
  title,
  subtitle,
  icon: Icon,
  skills,
  index,
}: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="group relative border border-[#b08a50]/30 bg-[#211713]/85 p-5 transition-colors duration-300 hover:border-[#b08a50]/60 sm:p-6"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[#b08a50]/50" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#b08a50]/50" />

      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#b08a50]/40 bg-[#160f0b] text-[#b08a50] transition-colors group-hover:bg-[#6b1d2f]/40">
          <Icon size={19} strokeWidth={1.5} />
        </div>

        <div>
          <h3 className="font-serif text-lg text-[#ead9b9] sm:text-xl">
            {title}
          </h3>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#b08a50]/70">
            {subtitle}
          </p>
        </div>
      </div>

      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start gap-3">
            <Sparkles
              size={12}
              className="mt-1 shrink-0 text-[#b08a50]/70"
            />
            <span className="text-sm leading-relaxed text-[#ead9b9]/75">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SoftwareLogo({ type }: { type: string }) {
  const officeStyles: Record<
    string,
    { letter: string; color: string }
  > = {
    word: { letter: 'W', color: '#2B579A' },
    excel: { letter: 'X', color: '#217346' },
    powerpoint: { letter: 'P', color: '#D24726' },
  };

  if (officeStyles[type]) {
    const { letter, color } = officeStyles[type];

    return (
      <div
        className="flex h-[34px] w-[34px] items-center justify-center rounded-md text-xl font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color }}
        aria-label={`${type} icon`}
      >
        {letter}
      </div>
    );
  }

  if (type === 'canva') {
    return (
      <div
        className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-gradient-to-br from-[#00C4CC] via-[#4776E6] to-[#8B3DFF] text-white shadow-md transition-transform duration-300 group-hover:scale-110"
        aria-label="Canva-style icon"
      >
        <span className="font-serif text-2xl font-bold italic">
          C
        </span>
      </div>
    );
  }

  return (
    <div
      className="flex h-[34px] w-[34px] items-center justify-center rounded-md bg-white transition-transform duration-300 group-hover:scale-110"
      aria-label="CapCut logo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-7 w-7"
        fill="#000000"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M24.189 6.442V2.671l-4.535 2.383V4.91c.002-1.505-1.078-2.411-2.638-2.411H2.64C.993 2.5 0 3.407 0 4.91V8.72L6.354 12 0 15.316v3.8C0 20.595 1 21.5 2.64 21.5h14.373c1.56 0 2.639-.907 2.639-2.382v-.197l4.536 2.409v-3.828L13.64 12 24.19 6.443zM9.982 13.873l7.797 4.083H2.157l7.825-4.083zm7.741-7.828l-7.742 4.057-7.825-4.057h15.567z"
        />
      </svg>
    </div>
  );
}

function SoftwareCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.24 }}
      className="relative border border-[#b08a50]/30 bg-[#211713]/85 p-5 sm:p-6"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[#b08a50]/50" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#b08a50]/50" />

      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#b08a50]/40 bg-[#160f0b] text-[#b08a50]">
          <Monitor size={19} strokeWidth={1.5} />
        </div>

        <div>
          <h3 className="font-serif text-lg text-[#ead9b9] sm:text-xl">
            Software
          </h3>
          <p className="text-[9px] uppercase tracking-[0.2em] text-[#b08a50]/70">
            Digital tools
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {softwareSkills.map((software, index) => (
          <motion.div
            key={software.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            className={`group flex min-h-24 flex-col items-center justify-center gap-3 border border-[#b08a50]/20 bg-[#160f0b]/70 px-2 py-4 text-center transition-all duration-300 hover:border-[#b08a50]/50 hover:bg-[#6b1d2f]/20 ${
              index === softwareSkills.length - 1
                ? 'col-span-2 sm:col-span-1'
                : ''
            }`}
          >
            <SoftwareLogo type={software.type} />

            <span className="text-xs leading-relaxed text-[#ead9b9]/80">
              {software.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function VintageProfile() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const smoothX = useSpring(pointerX, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 120,
    damping: 20,
  });

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);

  const handlePointerMove = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();

    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className="relative mx-auto w-full max-w-md lg:col-span-1"
    >
      <div className="relative px-4 pb-5 pt-8 sm:px-6 sm:pt-10">
        {/* Golden ambient light */}
        <div className="pointer-events-none absolute inset-x-8 top-12 h-3/4 bg-[#b08a50]/15 blur-3xl" />

        {/* Burgundy back plate */}
        <div className="pointer-events-none absolute inset-x-8 bottom-12 top-16 rotate-[-5deg] border border-[#b08a50]/50 bg-[#6b1d2f]/20 shadow-2xl" />

        {/* 3D portrait stage */}
        <div
          onMouseMove={handlePointerMove}
          onMouseLeave={resetPointer}
          className="relative mx-auto w-[90%]"
          style={{ perspective: '1200px' }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative"
          >
            {/* Golden frame */}
            <div
              className="pointer-events-none absolute -inset-2 z-0 border-[5px] border-[#b08a50] bg-[#160f0b] shadow-[0_25px_45px_rgba(0,0,0,0.65)] sm:-inset-3"
              style={{ transform: 'translateZ(-12px)' }}
            />

            {/* Portrait container */}
            <div className="relative z-10 border border-[#d2b477]/70 bg-[#211713] p-1.5 sm:p-2">
              <motion.img
                src={skillPhoto}
                alt="Portrait of Deviana Gita Tsaniah"
                whileHover={{ scale: 1.025 }}
                transition={{ duration: 0.4 }}
                className="relative z-20 block h-auto max-h-[65svh] w-full object-contain object-center drop-shadow-[0_12px_18px_rgba(0,0,0,0.4)]"
              />

              {/* Subtle vintage vignette */}
              <div
                className="pointer-events-none absolute inset-1.5 z-30 sm:inset-2"
                style={{
                  background:
                    'radial-gradient(ellipse at center, transparent 72%, rgba(20,5,12,0.16) 100%)',
                }}
              />

              {/* Compact portrait caption */}
              <div className="absolute inset-x-1.5 bottom-1.5 z-40 border-t border-[#b08a50]/70 bg-[#211713]/90 px-2 py-2 text-center sm:inset-x-2 sm:bottom-2 sm:px-3 sm:py-2.5">
                <p className="text-[7px] font-semibold uppercase tracking-[0.2em] text-[#d2b477] sm:text-[8px]">
                  English Literature
                </p>

                <h3 className="mt-0.5 font-serif text-sm leading-tight text-[#f0dfc0] sm:text-base">
                  Deviana Gita Tsaniah, S.S.
                </h3>

                <p className="mt-0.5 text-[9px] leading-tight text-[#c6b59b]/80 sm:text-[10px]">
                  Universitas Ahmad Dahlan
                </p>
              </div>

              {/* Gold corner details */}
              <div className="pointer-events-none absolute -left-1 -top-1 z-50 h-8 w-8 border-l-2 border-t-2 border-[#e1c58c] sm:h-10 sm:w-10" />
              <div className="pointer-events-none absolute -right-1 -top-1 z-50 h-8 w-8 border-r-2 border-t-2 border-[#e1c58c] sm:h-10 sm:w-10" />
              <div className="pointer-events-none absolute -bottom-1 -left-1 z-50 h-8 w-8 border-b-2 border-l-2 border-[#e1c58c] sm:h-10 sm:w-10" />
              <div className="pointer-events-none absolute -bottom-1 -right-1 z-50 h-8 w-8 border-b-2 border-r-2 border-[#e1c58c] sm:h-10 sm:w-10" />
            </div>
          </motion.div>

          {/* Floating ornament */}
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="pointer-events-none absolute -top-6 left-1/2 z-50 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-[#b08a50] bg-[#211713] font-serif text-2xl text-[#d2b477] shadow-lg"
          >
            ✦
          </motion.div>
        </div>

        {/* Quote */}
        <div className="relative z-10 mt-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b08a50]/40" />
            <span className="text-xs text-[#b08a50]">❧</span>
            <span className="h-px w-8 bg-[#b08a50]/40" />
          </div>

          <p className="font-serif text-sm italic text-[#c6a66b]/80">
            “Learning is a lifelong journey.”
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeLanguage, setActiveLanguage] = useState(
    'Bahasa Indonesia',
  );

  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden bg-[#160f0b] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Background: vintage burgundy, brown, and gold */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(107,29,47,0.42)_0%,rgba(65,30,25,0.24)_40%,transparent_75%)]" />

        <div className="absolute -left-24 top-[15%] h-80 w-80 rounded-full bg-[#b08a50]/10 blur-3xl" />

        <div className="absolute -right-24 bottom-[5%] h-96 w-96 rounded-full bg-[#6b1d2f]/20 blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#6b1d2f]/10 via-transparent to-[#b08a50]/[0.06]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b08a50]/40 to-transparent" />
      </div>

      {/* Vintage floral ornaments and decorative lines */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top ornamental line */}
        <div className="absolute left-8 right-8 top-8 h-px bg-gradient-to-r from-transparent via-[#b08a50]/40 to-transparent sm:left-16 sm:right-16" />

        <div className="absolute left-1/2 top-5 -translate-x-1/2 font-serif text-xl text-[#b08a50]/60">
          ❧
        </div>

        {/* Left floral ornament */}
        <div className="absolute -left-5 top-[22%] rotate-[-18deg] font-serif text-7xl text-[#b08a50]/20 sm:left-4 sm:text-8xl">
          ❦
        </div>

        <div className="absolute left-10 top-[27%] h-24 w-px rotate-[25deg] bg-gradient-to-b from-[#b08a50]/30 to-transparent" />

        <div className="absolute left-7 top-[33%] rotate-[-25deg] font-serif text-3xl text-[#b08a50]/20">
          ❧
        </div>

        {/* Right floral ornament */}
        <div className="absolute -right-5 top-[48%] rotate-[18deg] font-serif text-7xl text-[#b08a50]/20 sm:right-4 sm:text-8xl">
          ❧
        </div>

        <div className="absolute right-10 top-[55%] h-28 w-px rotate-[-25deg] bg-gradient-to-b from-[#b08a50]/30 to-transparent" />

        <div className="absolute right-7 top-[62%] rotate-[25deg] font-serif text-3xl text-[#b08a50]/20">
          ❦
        </div>

        {/* Bottom ornamental divider */}
        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-center gap-4 sm:left-16 sm:right-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#b08a50]/35" />

          <span className="whitespace-nowrap font-serif text-xl text-[#b08a50]/60">
            ✦ ❦ ✦
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#b08a50]/35" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#b08a50]/60 sm:w-16" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#b08a50] sm:text-xs">
              What I Bring
            </span>

            <span className="h-px w-10 bg-[#b08a50]/60 sm:w-16" />
          </div>

          <h2 className="font-serif text-4xl leading-tight text-[#ead9b9] sm:text-5xl md:text-6xl">
            Skills &{' '}
            <span className="italic text-[#b08a50]">
              Expertise
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#ead9b9]/70 sm:text-base">
            A combination of interpersonal abilities, professional
            knowledge, and digital skills that support my academic
            and professional journey.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b08a50]/40" />

            <span className="font-serif text-lg text-[#b08a50]">
              ✦
            </span>

            <span className="h-px w-8 bg-[#b08a50]/40" />
          </div>
        </motion.div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-8">
          {/* Left column */}
          <div className="space-y-6">
            {skillGroups.map((group, index) => (
              <SkillCard
                key={group.title}
                title={group.title}
                subtitle={group.subtitle}
                icon={group.icon}
                skills={group.skills}
                index={index}
              />
            ))}
          </div>

          {/* Center profile */}
          <VintageProfile />

          {/* Right column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="relative border border-[#b08a50]/30 bg-[#211713]/85 p-5 sm:p-6"
            >
              <div className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[#b08a50]/50" />

              <div className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#b08a50]/50" />

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#b08a50]/40 bg-[#160f0b] text-[#b08a50]">
                  <Languages size={19} strokeWidth={1.5} />
                </div>

                <div>
                  <h3 className="font-serif text-lg text-[#ead9b9] sm:text-xl">
                    Languages
                  </h3>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#b08a50]/70">
                    Communication
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {languages.map((language) => (
                  <button
                    key={language.name}
                    type="button"
                    onClick={() => setActiveLanguage(language.name)}
                    className={`flex w-full items-center justify-between border px-3 py-3 text-left transition-colors duration-300 ${
                      activeLanguage === language.name
                        ? 'border-[#b08a50]/50 bg-[#6b1d2f]/25'
                        : 'border-[#b08a50]/20 bg-[#160f0b]/50 hover:border-[#b08a50]/40'
                    }`}
                  >
                    <span className="text-sm text-[#ead9b9]/85">
                      {language.name}
                    </span>

                    <span className="text-[9px] uppercase tracking-wider text-[#b08a50]">
                      {language.level}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>

            <SoftwareCard />
          </div>
        </div>

        {/* Decorative closing divider */}
        <div className="mt-16 flex items-center justify-center gap-4 sm:mt-20">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#b08a50]/50 sm:w-24" />

          <span className="font-serif text-xl text-[#b08a50]/70">
            ❧
          </span>

          <span className="font-serif text-sm italic text-[#c6a66b]/70">
            Skills, knowledge & growth
          </span>

          <span className="font-serif text-xl text-[#b08a50]/70">
            ❧
          </span>

          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#b08a50]/50 sm:w-24" />
        </div>
      </div>
    </section>
  );
}
