
import { useState, type MouseEvent } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ArrowDownRight,
  Mail,
  Sparkles,
} from "lucide-react";

import introductionPhoto from "../assets/introduction/Introduction.png";

/* =========================================
   ROSE ORNAMENT
========================================= */

function RoseOrnament({
  className = "",
  flipX = false,
  flipY = false,
}: {
  className?: string;
  flipX?: boolean;
  flipY?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 240"
      className={`pointer-events-none absolute w-32 sm:w-44 lg:w-56 ${className}`}
      style={{
        transform: `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`,
      }}
      fill="none"
    >
      <defs>
        <linearGradient id="rosePetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0D7C8" />
          <stop offset="35%" stopColor="#B77A80" />
          <stop offset="75%" stopColor="#713340" />
          <stop offset="100%" stopColor="#3B1723" />
        </linearGradient>

        <linearGradient id="roseLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C9270" />
          <stop offset="100%" stopColor="#26382D" />
        </linearGradient>

        <linearGradient id="roseGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F0D8A0" />
          <stop offset="45%" stopColor="#A47B40" />
          <stop offset="75%" stopColor="#D7B77B" />
          <stop offset="100%" stopColor="#72502D" />
        </linearGradient>
      </defs>

      {/* Antique corner frame */}
      <path
        d="M8 125 V39 Q8 8 39 8 H125"
        stroke="url(#roseGold)"
        strokeWidth="2"
      />

      <path
        d="M17 125 V40 Q17 17 40 17 H125"
        stroke="#D4B477"
        strokeOpacity=".48"
        strokeWidth=".7"
      />

      <path
        d="M24 83 C25 49 49 25 83 24
           C64 35 45 50 36 73
           C55 57 69 51 86 51
           C69 64 56 78 48 94
           C43 105 43 114 44 125"
        stroke="url(#roseGold)"
        strokeWidth="1.2"
      />

      {/* Decorative scrollwork */}
      <path
        d="M19 63 C31 62 35 48 28 39
           C21 30 32 22 41 29
           C49 35 43 45 38 45
           M46 18 C49 31 59 36 72 35
           C61 43 58 52 59 62
           M18 86 C32 82 39 89 39 100
           C39 111 30 115 25 108
           C21 102 27 96 32 100"
        stroke="url(#roseGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Rose stems */}
      <path
        d="M27 150 C51 123 72 105 94 82
           C113 63 129 47 154 37"
        stroke="#687454"
        strokeWidth="2.2"
        strokeLinecap="round"
      />

      {/* Leaves */}
      <path
        d="M53 127 C31 126 23 108 25 95
           C43 98 59 110 53 127Z"
        fill="url(#roseLeaf)"
        stroke="#B6A375"
        strokeWidth=".8"
      />

      <path d="M51 123 L30 101" stroke="#C9B98C" strokeWidth=".8" />

      <path
        d="M77 103 C70 82 83 68 99 66
           C103 82 94 99 77 103Z"
        fill="url(#roseLeaf)"
        stroke="#B6A375"
        strokeWidth=".8"
      />

      <path d="M79 98 L94 72" stroke="#C9B98C" strokeWidth=".8" />

      <path
        d="M111 69 C102 52 115 39 130 39
           C135 54 128 66 111 69Z"
        fill="url(#roseLeaf)"
        stroke="#B6A375"
        strokeWidth=".8"
      />

      <path
        d="M30 145 C16 135 16 121 22 114
           C35 124 39 136 30 145Z"
        fill="url(#roseLeaf)"
        stroke="#B6A375"
        strokeWidth=".8"
      />

      {/* Main rose */}
      <g transform="translate(116 91)">
        <path
          d="M0 -30 C-13 -43 -34 -32 -29 -15
             C-45 -8 -42 14 -25 19
             C-20 37 2 39 10 24
             C29 32 44 12 30 0
             C39 -19 18 -37 5 -27Z"
          fill="url(#rosePetal)"
          stroke="#D7AF8A"
          strokeWidth="1"
        />

        <path
          d="M-16 -18 C-7 -32 13 -24 14 -10
             C31 -2 22 18 7 14
             C-5 30 -23 15 -14 1
             C-27 -6 -26 -14 -16 -18Z"
          fill="#A55F6B"
          stroke="#E3BDA5"
          strokeWidth="1"
        />

        <path
          d="M-8 -9 C-1 -19 13 -12 8 -2
             C17 8 5 18 -4 10
             C-16 9 -17 -3 -8 -9Z"
          fill="#6C2C3A"
          stroke="#D6A48D"
          strokeWidth="1"
        />

        <path
          d="M-3 -5 C5 -10 9 0 2 4
             C-3 8 -9 1 -3 -5Z"
          fill="#3C1523"
          stroke="#C7A06D"
          strokeWidth=".8"
        />
      </g>

      {/* Small rosebud */}
      <g transform="translate(69 128)">
        <path
          d="M0 0 C-15 -6 -12 -21 -3 -25
             C2 -38 17 -29 15 -18
             C25 -8 14 4 0 0Z"
          fill="url(#rosePetal)"
          stroke="#D8B18C"
          strokeWidth=".9"
        />

        <path
          d="M-3 -3 C-2 -13 8 -22 12 -20"
          stroke="#F0D7C8"
          strokeWidth=".9"
        />
      </g>

      {/* Small antique flowers */}
      <g transform="translate(158 43)">
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse
            key={i}
            cy="-6"
            rx="3.8"
            ry="6"
            transform={`rotate(${i * 60})`}
            fill="#D8BD8B"
            stroke="#98713F"
            strokeWidth=".7"
          />
        ))}
        <circle r="2.6" fill="#8E6336" />
      </g>

      <g transform="translate(35 76)">
        {Array.from({ length: 5 }).map((_, i) => (
          <ellipse
            key={i}
            cy="-3.5"
            rx="2.5"
            ry="4"
            transform={`rotate(${i * 72})`}
            fill="#E6CFAC"
            stroke="#A47B40"
            strokeWidth=".6"
          />
        ))}
        <circle r="1.6" fill="#A47B40" />
      </g>

      {/* Gold details */}
      <circle cx="174" cy="65" r="1.8" fill="#D8BD8B" />
      <circle cx="184" cy="54" r="1" fill="#D8BD8B" />
      <circle cx="164" cy="77" r="1.2" fill="#D8BD8B" />

      <path
        d="M144 116 C156 105 169 107 176 116
           C165 124 154 124 144 116Z"
        stroke="url(#roseGold)"
        strokeWidth="1"
      />
    </svg>
  );
}

/* =========================================
   ANTIQUE FRAME
========================================= */

function AntiqueFrame() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-3 z-0 sm:inset-5 lg:inset-7"
    >
      <div className="absolute inset-0 border border-[#B89559]/80" />
      <div className="absolute inset-[5px] border border-[#D6B878]/40" />
      <div className="absolute inset-[11px] border border-[#D6B878]/20" />

      <RoseOrnament className="-left-1 -top-1" />
      <RoseOrnament className="-right-1 -top-1" flipX />
      <RoseOrnament className="-bottom-1 -left-1" flipY />
      <RoseOrnament className="-bottom-1 -right-1" flipX flipY />

      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#2B1019] px-5 py-1">
        <span className="font-serif text-sm tracking-[.5em] text-[#D6B878]">
          ❦
        </span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#2B1019] px-5 py-1">
        <span className="font-serif text-sm tracking-[.5em] text-[#D6B878]">
          ❧
        </span>
      </div>
    </div>
  );
}

/* =========================================
   HERO SECTION
========================================= */

export default function Hero() {
  const [isPortraitHovered, setIsPortraitHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 140,
    damping: 22,
    mass: 0.7,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 140,
    damping: 22,
    mass: 0.7,
  });

  const handlePortraitMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    rotateX.set((0.5 - y) * 12);
    rotateY.set((x - 0.5) * 16);
  };

  const resetPortraitPosition = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsPortraitHovered(false);
  };

  return (
    <section
      id="introduction"
      className="relative isolate min-h-screen overflow-hidden bg-[#2B1019] text-[#F1E4D0]"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute -left-40 -top-32 h-[500px] w-[500px] rounded-full bg-[#783644]/25 blur-[100px]" />

        <div className="absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-[#A17B48]/10 blur-[110px]" />

        <div className="absolute inset-0 bg-gradient-to-br from-[#4A202B]/70 via-transparent to-[#160910]/80" />

        {/* Paper grain */}
        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "radial-gradient(#E9D6B6 0.6px, transparent 0.7px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Warm central atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_48%_42%,rgba(150,91,72,0.17)_0%,transparent_48%,rgba(8,2,7,0.48)_100%)]" />

        {/* Animated golden light */}
        <motion.div
          animate={{
            opacity: [0.1, 0.23, 0.1],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-32 top-[12%] h-[420px] w-[280px] rounded-full bg-[#BD8A55]/15 blur-[110px]"
        />

        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#D6B878]/50 to-transparent" />

        {/* Cinematic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(8,2,7,0.32)_100%)]" />
      </div>

      <AntiqueFrame />

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1440px] items-center px-8 py-28 sm:px-14 lg:px-24 xl:px-28">
        <div className="grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative z-20 order-2 min-w-0 lg:order-1"
          >
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#B89559]" />

              <p className="text-[10px] uppercase tracking-[0.3em] text-[#D6B878] sm:text-xs sm:tracking-[0.38em]">
                An introduction · 2026
              </p>
            </div>

            <h1 className="font-serif text-5xl leading-[1.04] tracking-[-0.05em] text-[#F3E8D7] sm:text-6xl md:text-7xl xl:text-[5.7rem]">
              Deviana
              <span className="mt-2 block italic text-[#D4B277]">
                Gita Tsaniah
              </span>
            </h1>

            <div className="my-8 flex items-center gap-3">
              <span className="h-px w-12 bg-[#B89559]" />
              <span className="font-serif text-xl text-[#D6B878]">❦</span>
              <span className="h-px w-20 bg-[#B89559]/40" />
            </div>

            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-[#D6B878] sm:text-xs sm:tracking-[0.28em]">
              English Literature · 2022—2026
            </p>

            <p className="max-w-xl text-sm leading-8 text-[#E5D6C5]/90 sm:text-base sm:leading-9">
              Lulusan S1 Sastra Inggris Universitas Ahmad Dahlan (IPK 3,85/4,00). 
              Terampil dalam administrasi, entri dan pengolahan data, 
              serta pelayanan publik dalam bahasa Indonesia dan Inggris. 
              Berpengalaman dalam riset dan publikasi jurnal SINTA, 
              serta siap berkontribusi melalui program MagangHub.
            </p>

            {/* Action buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#experience"
                className="group inline-flex min-h-12 items-center gap-3 border border-[#B89559] bg-[#B89559] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.14em] text-[#2B1019] transition-all duration-300 hover:bg-transparent hover:text-[#F1E4D0] sm:text-xs sm:tracking-[0.18em]"
              >
                Lihat Pengalaman

                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </a>

              <a
                href="mailto:devianag123@gmail.com"
                className="group inline-flex min-h-12 items-center gap-3 border border-[#B89559]/50 px-5 py-3 text-[10px] uppercase tracking-[0.14em] text-[#F1E4D0] transition-colors hover:border-[#D6B878] hover:text-[#D6B878] sm:text-xs sm:tracking-[0.18em]"
              >
                <Mail size={15} />
                Hubungi Saya
              </a>
            </div>
          </motion.div>

          {/* 3D portrait */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              rotateY: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
              rotateY: 0,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            onMouseMove={handlePortraitMove}
            onMouseEnter={() => setIsPortraitHovered(true)}
            onMouseLeave={resetPortraitPosition}
            style={{
              perspective: 1400,
              rotateX: smoothRotateX,
              rotateY: smoothRotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative z-20 order-1 mx-auto w-full max-w-[320px] sm:max-w-[390px] lg:order-2 lg:max-w-[440px] xl:max-w-[460px]"
          >
            <div
              className="relative px-3 pb-8 pt-3 sm:px-5 sm:pb-10 sm:pt-5"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Layered frame */}
              <div
                className="pointer-events-none absolute inset-0 border border-[#C6A267]/80 shadow-[0_30px_65px_rgba(0,0,0,0.35)]"
                style={{ transform: "translateZ(-24px)" }}
              />

              <div
                className="pointer-events-none absolute inset-[5px] border border-[#D6B878]/40"
                style={{ transform: "translateZ(-16px)" }}
              />

              <div
                className="pointer-events-none absolute inset-[11px] border border-[#D6B878]/20"
                style={{ transform: "translateZ(-8px)" }}
              />

              {/* Gold corner details */}
              <div
                className="pointer-events-none absolute -left-1 -top-1 z-20 h-10 w-10 border-l-2 border-t-2 border-[#D6B878]"
                style={{ transform: "translateZ(12px)" }}
              />

              <div
                className="pointer-events-none absolute -right-1 -top-1 z-20 h-10 w-10 border-r-2 border-t-2 border-[#D6B878]"
                style={{ transform: "translateZ(12px)" }}
              />

              <div
                className="pointer-events-none absolute -bottom-1 -left-1 z-20 h-10 w-10 border-b-2 border-l-2 border-[#D6B878]"
                style={{ transform: "translateZ(12px)" }}
              />

              <div
                className="pointer-events-none absolute -bottom-1 -right-1 z-20 h-10 w-10 border-b-2 border-r-2 border-[#D6B878]"
                style={{ transform: "translateZ(12px)" }}
              />

              {/* Portrait */}
              <motion.div
                animate={{
                  z: isPortraitHovered ? 42 : 28,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                className="group relative z-10 overflow-hidden bg-[#D9C6A8] shadow-[0_35px_65px_rgba(0,0,0,0.6),0_0_35px_rgba(184,149,89,0.12)]"
              >
                <img
                  src={introductionPhoto}
                  alt="Portrait of Deviana Gita Tsaniah"
                  draggable={false}
                  className="aspect-[4/5] w-full object-cover object-center brightness-[0.98] contrast-[1.06] saturate-[0.92] sepia-[0.08] transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                />

                {/* Antique color grade */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[#A56D45]/[0.06] mix-blend-color"
                />

                {/* Cinematic lighting */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,224,175,0.12)_0%,transparent_38%,rgba(31,8,17,0.08)_65%,rgba(20,5,12,0.42)_100%)]"
                />

                {/* Vignette */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_52%,rgba(20,5,12,0.16)_78%,rgba(15,4,10,0.48)_100%)]"
                />

                {/* Film grain */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.88%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.65%22/%3E%3C/svg%3E")',
                  }}
                />

                {/* Inner photo frame */}
                <div
                  className="pointer-events-none absolute inset-3 border border-[#E0C28B]/50"
                  style={{ transform: "translateZ(8px)" }}
                />

                {/* Light reflection */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-[#F7E5C7]/10 to-transparent opacity-0 transition-all duration-1000 group-hover:left-[130%] group-hover:opacity-100"
                />

                {/* Lower photo shadow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#180810]/35 to-transparent"
                />
              </motion.div>

              {/* Portrait caption */}
              <div
                className="relative z-10 mt-5 flex items-center justify-between gap-3 px-1"
                style={{ transform: "translateZ(20px)" }}
              >
                <div>
                  <p className="font-serif text-lg italic text-[#F1E4D0]">
                    Portrait No. I
                  </p>

                  <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#D6B878] sm:tracking-[0.28em]">
                    The beginning
                  </p>
                </div>

                <motion.div
                  animate={{
                    rotate: [0, 12, -8, 0],
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={18} className="text-[#D6B878]" />
                </motion.div>
              </div>

              {/* Academic plaque */}
              <motion.div
                animate={{
                  z: isPortraitHovered ? 68 : 48,
                  y: isPortraitHovered ? -4 : 0,
                }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                }}
                className="absolute -bottom-1 -left-3 z-30 border border-[#B89559] bg-[#E9D9BE] px-4 py-3 text-[#35101C] shadow-[0_15px_40px_rgba(0,0,0,0.4)] sm:-left-5 sm:px-6 sm:py-4"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-px w-5 bg-[#A17B48]" />

                  <p className="text-[8px] uppercase tracking-[0.16em] text-[#88643C] sm:tracking-[0.2em]">
                    Academic record
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-3xl sm:text-4xl">
                    3.85
                  </span>

                  <span className="text-xs text-[#88643C]">/ 4.00</span>
                </div>

                <div className="mt-2 h-px bg-[#B89559]/60" />

                <p className="mt-2 text-[8px] uppercase tracking-[0.12em] text-[#88643C] sm:tracking-[0.17em]">
                  Grade point average
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="pointer-events-none absolute bottom-7 left-8 right-8 z-20 flex items-center justify-between sm:left-16 sm:right-16 lg:left-28 lg:right-28">
        <p className="text-[9px] uppercase tracking-[0.2em] text-[#D6B878]/80 sm:tracking-[0.3em]">
          01 — Introduction
        </p>

        <p className="hidden text-[9px] uppercase tracking-[0.3em] text-[#D6B878]/60 sm:block">
          Est. 2026
        </p>
      </div>
    </section>
  );
}
