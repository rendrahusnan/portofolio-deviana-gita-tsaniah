
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks
        .map((link) => document.querySelector(link.href))
        .filter((section): section is Element => section !== null);

      let currentSection = 'about';

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeMenuOnResize);
    window.addEventListener('keydown', closeMenuOnEscape);

    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
      window.removeEventListener('keydown', closeMenuOnEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'border-b border-[#B08A50]/30 bg-[#F5F0E8]/95 py-2 shadow-[0_8px_30px_rgba(42,24,16,0.08)] backdrop-blur-xl'
          : 'border-b border-[#B08A50]/20 bg-[#F5F0E8]/90 py-3 backdrop-blur-md'
      }`}
    >
      {/* Ornamental top line */}
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#B08A50] to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Brand */}
        <a
          href="#about"
          onClick={closeMenu}
          className="group relative z-10 flex shrink-0 items-center gap-3"
          aria-label="Deviana, kembali ke About"
        >
          <div className="flex size-10 items-center justify-center border border-[#B08A50]/60 bg-[#6B1D2F] font-serif text-lg italic text-[#F5F0E8] shadow-sm transition-transform duration-300 group-hover:rotate-[-5deg] sm:size-11">
            D
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-base font-bold tracking-[0.12em] text-[#2A1810] sm:text-lg">
              DEVIANA<span className="text-[#6B1D2F]">.</span>
            </span>

            <span className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.22em] text-[#8A725D] sm:text-[9px]">
              Literature & Language
            </span>
          </div>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-1 lg:flex xl:gap-2"
        >
          {navLinks.map((link, index) => {
            const isActive =
              activeSection === link.href.replace('#', '');

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.href.slice(1))}
                aria-current={isActive ? 'location' : undefined}
                className={`group relative whitespace-nowrap px-2.5 py-3 text-[11px] font-medium tracking-wide transition-colors duration-300 xl:px-3 xl:text-xs ${
                  isActive
                    ? 'text-[#6B1D2F]'
                    : 'text-[#6A5145] hover:text-[#6B1D2F]'
                }`}
              >
                <span className="mr-1.5 text-[9px] text-[#B08A50]/80">
                  0{index + 1}
                </span>
                {link.name}

                <motion.span
                  className="absolute inset-x-2 bottom-1 h-px origin-left bg-[#B08A50]"
                  initial={false}
                  animate={{
                    scaleX: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                />
              </a>
            );
          })}
        </nav>

        {/* Contact CTA */}
        <a
          href="#contact"
          onClick={() => {
            closeMenu();
            setActiveSection('contact');
          }}
          className="group hidden min-h-11 shrink-0 items-center gap-2 border border-[#6B1D2F] bg-[#6B1D2F] px-4 py-2.5 text-xs font-semibold tracking-wide text-[#F5F0E8] transition-all duration-300 hover:border-[#B08A50] hover:bg-[#4A1421] sm:inline-flex sm:px-5"
        >
          Let's Talk
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={
            mobileMenuOpen
              ? 'Tutup menu navigasi'
              : 'Buka menu navigasi'
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="relative z-10 flex size-10 shrink-0 items-center justify-center border border-[#B08A50]/50 text-[#6B1D2F] transition-colors hover:bg-[#6B1D2F]/5 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileMenuOpen ? 'close' : 'menu'}
              initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Navigasi mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-[#B08A50]/40 bg-[#F5F0E8] shadow-[0_18px_35px_rgba(42,24,16,0.12)] lg:hidden"
          >
            <div className="mx-auto max-h-[calc(100dvh-80px)] max-w-7xl overflow-y-auto px-5 pb-6 pt-4 sm:px-8">
              <div className="mb-4 flex items-center gap-2 border-b border-[#B08A50]/30 pb-3">
                <Sparkles size={13} className="text-[#B08A50]" />
                <p className="text-[9px] font-semibold uppercase tracking-[0.24em] text-[#8A725D]">
                  Explore the Portfolio
                </p>
                <span className="ml-auto font-serif text-sm italic text-[#B08A50]">
                  2026
                </span>
              </div>

              <div className="flex flex-col">
                {navLinks.map((link, index) => {
                  const isActive =
                    activeSection === link.href.replace('#', '');

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.href.slice(1));
                        closeMenu();
                      }}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: index * 0.045,
                      }}
                      aria-current={isActive ? 'location' : undefined}
                      className={`group flex items-center justify-between border-b border-[#6B1D2F]/10 py-3.5 transition-colors duration-200 ${
                        isActive
                          ? 'text-[#6B1D2F]'
                          : 'text-[#4A2E2B] hover:text-[#6B1D2F]'
                      }`}
                    >
                      <span className="flex items-center gap-4">
                        <span className="w-5 font-serif text-xs italic text-[#B08A50]">
                          0{index + 1}
                        </span>
                        <span className="font-serif text-lg">
                          {link.name}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        className={`transition-transform duration-300 ${
                          isActive
                            ? 'translate-x-0 text-[#B08A50]'
                            : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                        }`}
                      />
                    </motion.a>
                  );
                })}
              </div>

              <a
                href="#contact"
                onClick={() => {
                  setActiveSection('contact');
                  closeMenu();
                }}
                className="mt-5 flex min-h-12 w-full items-center justify-center gap-2 bg-[#6B1D2F] px-5 py-3 text-sm font-semibold text-[#F5F0E8] transition-colors hover:bg-[#4A1421]"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </a>

              <p className="mt-4 text-center font-serif text-xs italic text-[#8A725D]">
                Thank you for visiting my portfolio.
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
