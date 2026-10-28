import { Navbar } from './components/Navbar';
import { Skills } from './components/Skills'; // Menggantikan Hero lama yang terpisah
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#EAE3D9] text-[#2A1810] selection:bg-[#6B1D2F] selection:text-white">
      <Navbar />
      <main className="pt-28 px-6 md:px-12 max-w-7xl mx-auto space-y-8">
        <Skills /> {/* Menampilkan layout 3 kolom sejajar (Soft/Hard Skill, Foto di tengah, Software/Bahasa) */}
        <Education />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}