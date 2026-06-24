import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] selection:bg-zinc-200 selection:text-zinc-900">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative">
        {/* Intro & Bio */}
        <Hero />

        {/* Skills Proficiencies */}
        <Skills />

        {/* Portfolio Projects Grid */}
        <Projects />

        {/* Milestones / Work History */}
        <Experience />

        {/* Contact Form Details */}
        <ContactForm />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
