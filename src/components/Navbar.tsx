import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#F5F0EB]/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="font-serif text-xl tracking-wider text-[#4A2E2B] font-bold">
          PORTFOLIO.<span className="text-[#8C5645] font-sans text-sm font-normal">2026</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-[#4A2E2B] hover:text-[#8C5645] transition-colors tracking-wide">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-5 py-2.5 rounded-full border border-[#4A2E2B] text-[#4A2E2B] hover:bg-[#4A2E2B] hover:text-[#F5F0EB] transition-all duration-300">
            Let's Talk <ArrowUpRight size={14} />
          </a>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#4A2E2B] focus:outline-none">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F5F0EB] border-b border-[#E8DFD8] py-6 px-6 shadow-lg md:hidden flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif text-[#4A2E2B]">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};