import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-[#E8DFD8]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Kolom Kiri: Informasi & Ajakan */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8DFD8]/60 border border-[#4A2E2B]/10 text-xs font-semibold uppercase tracking-widest text-[#8C5645]">
            <Mail size={13} /> Let's Connect
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#4A2E2B] leading-tight">
            Have a project in <span className="italic font-normal text-[#8C5645]">mind?</span> Let's talk.
          </h2>

          <p className="text-base text-[#4A2E2B]/80 max-w-md leading-relaxed">
            Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau peluang kolaborasi dalam pengembangan frontend.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3 text-sm text-[#4A2E2B]">
              <span className="p-2 rounded-lg bg-[#E8DFD8]/50 border border-[#E8DFD8] text-[#8C5645]">
                <Mail size={16} />
              </span>
              <span>parendra@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#4A2E2B]">
              <span className="p-2 rounded-lg bg-[#E8DFD8]/50 border border-[#E8DFD8] text-[#8C5645]">
                <MapPin size={16} />
              </span>
              <span>Indonesia</span>
            </div>
          </div>
        </motion.div>

        {/* Kolom Kanan: Formulir Kontak Sederhana */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-6 p-8 rounded-2xl bg-[#E8DFD8]/30 border border-[#E8DFD8]"
        >
          <form onSubmit={(e) => { e.preventDefault(); alert('Pesan berhasil disimulasikan terkirim!'); }} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E2B] mb-2">Your Name</label>
              <input 
                type="text" 
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F0EB] border border-[#E8DFD8] text-[#4A2E2B] focus:outline-none focus:border-[#8C5645] transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E2B] mb-2">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-[#F5F0EB] border border-[#E8DFD8] text-[#4A2E2B] focus:outline-none focus:border-[#8C5645] transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-[#4A2E2B] mb-2">Message</label>
              <textarea 
                rows={4}
                required
                placeholder="Ceritakan tentang proyek Anda..."
                className="w-full px-4 py-3 rounded-xl bg-[#F5F0EB] border border-[#E8DFD8] text-[#4A2E2B] focus:outline-none focus:border-[#8C5645] transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-3.5 rounded-xl bg-[#4A2E2B] text-[#F5F0EB] text-sm font-semibold tracking-wide hover:bg-[#8C5645] transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
            >
              Send Message <Send size={15} />
            </button>
          </form>
        </motion.div>

      </div>

      {/* Copyright Bawah */}
      <div className="mt-12 text-center text-xs text-[#2A1810]/60">
        © 2026 Deviana Gita Tsaniah. Portfolio MagangHub Edition.
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#8C5645] transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};