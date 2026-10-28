
import { useEffect, useState } from 'react';
import './App.css';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Home,
  GraduationCap,
  BriefcaseBusiness,
  FolderOpen,
  Sparkles,
  Award,
  Mail,
} from 'lucide-react';

import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import { AcademicProjects } from './components/AcademicProjects';
import  Skills  from './components/Skills';
import Certificates from './components/Certificates';
import { Contact } from './components/Contact';

const slides = [
  { title: 'Introduction', icon: Home, component: Hero },
  { title: 'Education', icon: GraduationCap, component: Education },
  { title: 'Experience', icon: BriefcaseBusiness, component: Experience },
  { title: 'Projects', icon: FolderOpen, component: AcademicProjects },
  { title: 'Skills', icon: Sparkles, component: Skills },
  { title: 'Certificates', icon: Award, component: Certificates },
  { title: 'Contact', icon: Mail, component: Contact },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ActiveComponent = slides[currentSlide].component;

  const goToSlide = (index: number) => {
    if (index < 0 || index >= slides.length) return;
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleNavigation = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      goToSlide(customEvent.detail);
    };

    window.addEventListener('portfolio:navigate', handleNavigation);

    return () => {
      window.removeEventListener('portfolio:navigate', handleNavigation);
    };
  }, []);

  return (
    <main className="vintage-app relative h-dvh w-full overflow-hidden text-[#352317]">
      {/* Vintage Header */}
      <header className="vintage-bar absolute inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b px-5 md:px-10">
        <button
          onClick={() => goToSlide(0)}
          className="font-serif text-lg font-bold tracking-[0.2em] text-[#6B1D2F] transition-colors hover:text-[#4D1421]"
          aria-label="Kembali ke halaman awal"
        >
          DEVIANA<span className="text-[#A17B48]">.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => goToSlide(index)}
              aria-current={currentSlide === index ? 'page' : undefined}
              className={`rounded-full border px-3 py-2 text-xs transition-all duration-300 ${
                currentSlide === index
                  ? 'border-[#6B1D2F] bg-[#6B1D2F] text-[#FFF3DF] shadow-sm'
                  : 'border-transparent text-[#78634F] hover:border-[#A17B48]/40 hover:bg-[#A17B48]/10 hover:text-[#6B1D2F]'
              }`}
            >
              {slide.title}
            </button>
          ))}
        </nav>

        <span className="font-serif text-sm italic text-[#6B1D2F]">
          {String(currentSlide + 1).padStart(2, '0')} /{' '}
          {String(slides.length).padStart(2, '0')}
        </span>
      </header>

      {/* Vintage Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-20 z-0 hidden font-serif text-5xl text-[#A17B48]/20 lg:block"
      >
        ❧
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-6 z-0 hidden rotate-180 font-serif text-6xl text-[#A17B48]/20 lg:block"
      >
        ❧
      </div>

      {/* Horizontal Slide Stage */}
      <div className="portfolio-perspective absolute inset-0 overflow-hidden pb-16 pt-16">
        <AnimatePresence mode="wait" initial={false}>
          <motion.section
            key={currentSlide}
            initial={{
              opacity: 0,
              rotateY: 12,
              rotateX: 2,
              scale: 0.97,
              x: 60,
              transformPerspective: 1400,
            }}
            animate={{
              opacity: 1,
              rotateY: 0,
              rotateX: 0,
              scale: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
              rotateY: -12,
              rotateX: -2,
              scale: 0.97,
              x: -60,
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 h-full w-full overflow-x-hidden overflow-y-auto px-5 md:px-10"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="mx-auto min-h-full max-w-7xl">
              <ActiveComponent />
            </div>
          </motion.section>
        </AnimatePresence>
      </div>

      {/* Vintage Footer and Slide Controls */}
      <footer className="vintage-bar absolute inset-x-0 bottom-0 z-50 flex h-16 items-center justify-between border-t px-5 md:px-10">
        <span className="hidden font-serif text-xs italic tracking-wide text-[#78634F] sm:block">
          Portfolio · Deviana Gita Tsaniah
        </span>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              onClick={() => goToSlide(index)}
              aria-label={`Buka slide ${slide.title}`}
              aria-current={currentSlide === index ? 'step' : undefined}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'w-8 bg-[#6B1D2F]'
                  : 'w-2 bg-[#A17B48]/40 hover:bg-[#6B1D2F]/70'
              }`}
            />
          ))}
        </div>

        {/* Previous and Next Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => goToSlide(currentSlide - 1)}
            disabled={currentSlide === 0}
            aria-label="Slide sebelumnya"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A17B48]/50 text-[#6B1D2F] transition hover:border-[#6B1D2F] hover:bg-[#6B1D2F] hover:text-[#FFF3DF] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowLeft size={16} />
          </button>

          <button
            onClick={() => goToSlide(currentSlide + 1)}
            disabled={currentSlide === slides.length - 1}
            aria-label="Slide berikutnya"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#6B1D2F] bg-[#6B1D2F] text-[#FFF3DF] transition hover:bg-[#4D1421] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </footer>
    </main>
  );
}
