
import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  MapPin,
  ArrowUpRight,
  Phone,
  Sparkles,
  Copy,
  Check,
} from 'lucide-react';

const contactEmail = 'devianag123@gmail.com';
const contactPhone = '+62 877-6105-3332';
const whatsappNumber = '6287761053332';

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailCopied, setEmailCopied] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Pesan dari ${name}`);
    const body = encodeURIComponent(
      `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
    );

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(contactEmail)}` +
      `&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail);
      setEmailCopied(true);

      window.setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch {
      window.location.href = `mailto:${contactEmail}`;
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden border-t border-[#b08a50]/40 bg-[#21150f] px-5 py-24 text-[#e8d6b9] sm:px-8 sm:py-28 md:px-12 md:py-32 lg:px-20"
    >
      {/* Vintage background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#51202a] via-[#352317] to-[#170f0b]" />

        <div className="absolute -right-40 -top-40 size-[32rem] rounded-full bg-[#b08a50]/10 blur-[130px]" />

        <div className="absolute -bottom-48 -left-40 size-[34rem] rounded-full bg-[#6b1d2f]/30 blur-[140px]" />

        <div className="absolute left-1/3 top-1/3 size-[24rem] rounded-full bg-[#8c3543]/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(15,9,6,0.48)_100%)]" />

        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#e8d6b9_0.7px,transparent_0.7px)] [background-size:8px_8px]" />

        {/* Decorative frame */}
        <div className="absolute inset-3 border border-[#b08a50]/15 sm:inset-5 md:inset-7" />
        <div className="absolute inset-[18px] border border-[#b08a50]/10 sm:inset-[26px] md:inset-9" />

        {/* Floral ornaments */}
        <span className="absolute left-5 top-24 font-serif text-6xl text-[#c5a574]/15 sm:left-12 sm:text-8xl">
          ❦
        </span>

        <span className="absolute right-5 top-28 rotate-12 font-serif text-6xl text-[#c5a574]/15 sm:right-12 sm:text-8xl">
          ❧
        </span>

        <span className="absolute bottom-20 left-8 rotate-12 font-serif text-5xl text-[#c5a574]/10 sm:left-16 sm:text-7xl">
          ❧
        </span>

        <span className="absolute bottom-16 right-8 -rotate-12 font-serif text-5xl text-[#c5a574]/10 sm:right-16 sm:text-7xl">
          ❦
        </span>

        {/* Fine gold line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c5a574]/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mb-14 md:mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#c5a574]" />

            <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#c5a574] sm:text-xs sm:tracking-[0.35em]">
              <Sparkles size={13} />
              Get In Touch
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="font-serif text-5xl font-normal leading-[1.05] tracking-tight text-[#f2e6d1] sm:text-6xl md:text-8xl">
                Let&apos;s
                <br />
                <span className="italic text-[#c5a574]">
                  Connect.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#d0bda4]/80 md:text-base">
                Punya pertanyaan, ingin bekerja sama, atau sekadar
                ingin menyapa? Saya terbuka untuk kesempatan baru
                dan percakapan menarik. Mari mulai dari sini.
              </p>
            </div>

            <div className="flex items-center justify-between border-y border-[#b08a50]/25 py-4 md:block md:border-y-0 md:border-l md:py-2 md:pl-6">
              <div>
                <p className="font-serif text-3xl italic text-[#c5a574] sm:text-4xl">
                  Say Hello
                </p>

                <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#d0bda4]/65 sm:text-[10px] sm:tracking-[0.25em]">
                  Open to opportunities
                </p>
              </div>

              <span className="font-serif text-4xl text-[#c5a574]/50 md:hidden">
                ❦
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-8 bg-[#b08a50]" />

              <h3 className="font-serif text-2xl text-[#f2e6d1] md:text-3xl">
                Contact Information
              </h3>
            </div>

            <div className="space-y-4">
              {/* Email card */}
              <div className="group flex min-w-0 items-center gap-4 border border-[#b08a50]/30 bg-[#21150f]/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a574]/70 hover:bg-[#6b1d2f]/30 hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:p-5">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kirim email melalui Gmail"
                  className="flex min-w-0 flex-1 items-center gap-4"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center border border-[#b08a50]/40 bg-[#b08a50]/10 text-[#c5a574] transition-all duration-300 group-hover:bg-[#b08a50] group-hover:text-[#291b14]">
                    <Mail size={20} strokeWidth={1.5} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-[#c5a574] sm:text-[10px] sm:tracking-[0.25em]">
                      Email Address
                    </span>

                    <span className="break-all text-sm text-[#f2e6d1] sm:text-base">
                      {contactEmail}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-[#c5a574]/70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2e6d1]"
                  />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Salin alamat email"
                  title="Salin email"
                  className="flex size-9 shrink-0 items-center justify-center border border-[#b08a50]/30 text-[#c5a574] transition-colors hover:border-[#c5a574] hover:bg-[#b08a50]/10"
                >
                  {emailCopied ? <Check size={15} /> : <Copy size={15} />}
                </button>
              </div>

              {/* WhatsApp card */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-4 border border-[#b08a50]/30 bg-[#21150f]/65 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a574]/70 hover:bg-[#6b1d2f]/30 hover:shadow-[0_12px_35px_rgba(0,0,0,0.18)] sm:p-5"
              >
                <span className="flex size-12 shrink-0 items-center justify-center border border-[#b08a50]/40 bg-[#b08a50]/10 text-[#c5a574] transition-all duration-300 group-hover:bg-[#b08a50] group-hover:text-[#291b14]">
                  <Phone size={20} strokeWidth={1.5} />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-[#c5a574] sm:text-[10px] sm:tracking-[0.25em]">
                    WhatsApp
                  </span>

                  <span className="text-sm text-[#f2e6d1] sm:text-base">
                    {contactPhone}
                  </span>
                </span>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-[#c5a574]/70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#f2e6d1]"
                />
              </a>

              {/* Location card */}
              <div className="flex items-center gap-4 border border-[#b08a50]/30 bg-[#21150f]/65 p-4 sm:p-5">
                <span className="flex size-12 shrink-0 items-center justify-center border border-[#b08a50]/40 bg-[#b08a50]/10 text-[#c5a574]">
                  <MapPin size={20} strokeWidth={1.5} />
                </span>

                <span>
                  <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-[#c5a574] sm:text-[10px] sm:tracking-[0.25em]">
                    Location
                  </span>

                  <span className="text-sm text-[#f2e6d1] sm:text-base">
                    Indonesia
                  </span>
                </span>
              </div>
            </div>

            {/* Collaboration panel */}
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.3 }}
              className="relative mt-8 overflow-hidden border border-[#b08a50]/45 bg-gradient-to-br from-[#6b1d2f]/45 to-[#291b14]/70 p-6 sm:p-8"
            >
              <div className="pointer-events-none absolute inset-2 border border-[#b08a50]/15" />

              <span className="absolute right-5 top-1 font-serif text-7xl leading-none text-[#c5a574]/15">
                &ldquo;
              </span>

              <div className="relative">
                <div className="mb-4 flex items-center gap-2">
                  <Sparkles size={13} className="text-[#c5a574]" />

                  <span className="text-[9px] uppercase tracking-[0.23em] text-[#c5a574]">
                    Let&apos;s Collaborate
                  </span>
                </div>

                <p className="font-serif text-2xl italic text-[#e8d6b9] sm:text-3xl">
                  Let&apos;s work together.
                </p>

                <p className="mt-4 max-w-md text-sm leading-7 text-[#d0bda4]/80">
                  Saya terbuka untuk kesempatan kerja, kolaborasi,
                  dan pengalaman baru yang dapat membantu saya
                  terus belajar dan berkembang.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-[#c5a574]" />

                  <span className="text-[9px] uppercase tracking-[0.18em] text-[#c5a574] sm:tracking-[0.25em]">
                    Every connection starts somewhere
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative border border-[#b08a50]/60 bg-[#f2e6d1] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.24)] sm:p-3"
          >
            {/* Layered frame */}
            <div className="pointer-events-none absolute inset-3 border border-[#b08a50]/35 sm:inset-4" />

            <div className="pointer-events-none absolute left-3 top-3 size-6 border-l border-t border-[#a17b48] sm:left-4 sm:top-4" />

            <div className="pointer-events-none absolute right-3 top-3 size-6 border-r border-t border-[#a17b48] sm:right-4 sm:top-4" />

            <div className="pointer-events-none absolute bottom-3 left-3 size-6 border-b border-l border-[#a17b48] sm:bottom-4 sm:left-4" />

            <div className="pointer-events-none absolute bottom-3 right-3 size-6 border-b border-r border-[#a17b48] sm:bottom-4 sm:right-4" />

            <div className="relative z-10 p-5 sm:p-8 md:p-10">
              {/* Form heading */}
              <div className="mb-8 border-b border-[#a17b48]/35 pb-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center border border-[#a17b48]/50 bg-[#a17b48]/10 text-[#6b1d2f]">
                    <Send size={17} strokeWidth={1.5} />
                  </span>

                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6b1d2f] sm:text-[10px] sm:tracking-[0.25em]">
                    A Personal Message
                  </span>
                </div>

                <h3 className="font-serif text-3xl text-[#352317] sm:text-4xl">
                  Send Me a Message
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#78634f]">
                  Punya sesuatu untuk dibicarakan? Tuliskan pesanmu
                  di bawah.
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <span className="h-px w-6 bg-[#b08a50]" />
                  <span className="font-serif text-sm italic text-[#a17b48]">
                    I&apos;d love to hear from you.
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6b1d2f]"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-[#a17b48]/35 bg-white/35 px-4 py-3.5 text-sm text-[#352317] outline-none transition-all placeholder:text-[#78634f]/65 focus:border-[#6b1d2f] focus:bg-white/65 focus:ring-2 focus:ring-[#6b1d2f]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6b1d2f]"
                  >
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full border border-[#a17b48]/35 bg-white/35 px-4 py-3.5 text-sm text-[#352317] outline-none transition-all placeholder:text-[#78634f]/65 focus:border-[#6b1d2f] focus:bg-white/65 focus:ring-2 focus:ring-[#6b1d2f]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6b1d2f]"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                    required
                    rows={5}
                    className="w-full resize-y border border-[#a17b48]/35 bg-white/35 px-4 py-3.5 text-sm leading-6 text-[#352317] outline-none transition-all placeholder:text-[#78634f]/65 focus:border-[#6b1d2f] focus:bg-white/65 focus:ring-2 focus:ring-[#6b1d2f]/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex min-h-14 w-full items-center justify-center gap-3 border border-[#6b1d2f] bg-[#6b1d2f] px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2e6d1] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#352317] hover:bg-[#352317] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b1d2f] sm:text-xs"
                >
                  Prepare Email

                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </button>

                <p className="text-xs leading-6 text-[#78634f]">
                  Gmail akan terbuka dengan alamat tujuan dan isi
                  pesan yang sudah disiapkan. Periksa kembali pesanmu,
                  lalu kirim melalui Gmail.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 border-t border-[#b08a50]/35 pt-7 sm:mt-20"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-serif text-xl text-[#f2e6d1]">
                Deviana Gita Tsaniah
                <span className="text-[#c5a574]">.</span>
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#d0bda4]/55">
                Literature · Language · Creativity
              </p>
            </div>

            <p className="text-xs leading-6 text-[#d0bda4]/65">
              © {new Date().getFullYear()} All rights reserved.
            </p>

            <a
              href="#about"
              className="group flex w-fit items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#c5a574] transition-colors hover:text-[#f2e6d1]"
            >
              Back to top

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <div className="mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#b08a50]/35" />
            <span className="font-serif text-lg text-[#c5a574]/70">
              ❦
            </span>
            <span className="h-px w-12 bg-[#b08a50]/35" />
          </div>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
