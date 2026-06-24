import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin, Compass, Code2, Lightbulb } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function Hero() {
  const getPhilosophyIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6 text-zinc-700" />;
      case 'Code2':
        return <Code2 className="w-6 h-6 text-zinc-700" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-zinc-700" />;
      default:
        return <Code2 className="w-6 h-6 text-zinc-700" />;
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_24rem_at_top,_var(--color-zinc-100),_transparent)] opacity-70" />
      
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
          {/* Text bio */}
          <div className="flex-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200/60 rounded-full text-xs font-medium text-zinc-600"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for New Projects
            </motion.div>

            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-zinc-900"
              >
                안녕하세요, <br className="md:hidden" />
                <span className="text-zinc-600 font-semibold">{profileData.name}</span>입니다.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-zinc-500 font-sans font-light"
              >
                {profileData.subRole}
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-zinc-600 leading-relaxed max-w-xl font-sans"
            >
              {profileData.introduction}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 pt-2"
            >
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{profileData.location}</span>
              </div>
              <span className="hidden sm:inline text-zinc-300">|</span>
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-600 transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-600 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 hover:bg-zinc-100 rounded-lg text-zinc-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Card / Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-80 flex-shrink-0"
          >
            <div className="relative group">
              {/* Decorative outline border */}
              <div className="absolute -inset-1.5 rounded-2xl bg-zinc-200/50 group-hover:bg-zinc-200/70 transition-colors -z-10" />
              <div className="bg-white rounded-xl border border-zinc-200/80 p-6 shadow-sm flex flex-col items-center text-center space-y-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-50 border border-zinc-200 flex items-center justify-center text-3xl font-sans font-bold text-zinc-700 shadow-inner">
                  {profileData.name[0]}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-lg text-zinc-900">{profileData.name}</h3>
                  <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mt-1">{profileData.englishName}</p>
                </div>
                <div className="w-full h-px bg-zinc-100" />
                <p className="text-xs text-zinc-500 leading-relaxed font-sans px-2">
                  "사용자와 비즈니스를 잇는 매끄러운 다리를 설계합니다."
                </p>
                <div className="flex gap-1.5">
                  <span className="px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[10px] font-mono text-zinc-500">Fast Learner</span>
                  <span className="px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[10px] font-mono text-zinc-500">Team Player</span>
                  <span className="px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[10px] font-mono text-zinc-500">Optimizer</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Long Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 border-t border-zinc-200/60 pt-16"
        >
          <div className="max-w-2xl">
            <h2 className="font-sans font-bold text-xl text-zinc-900 mb-6">About Me</h2>
            <p className="text-zinc-600 leading-relaxed font-sans space-y-4 text-justify whitespace-pre-line">
              {profileData.longBio}
            </p>
          </div>
        </motion.div>

        {/* Core Values / Philosophies */}
        <div className="mt-24">
          <h2 className="font-sans font-bold text-xl text-zinc-900 mb-10 text-center md:text-left">Core Philosophies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profileData.philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white border border-zinc-200/80 rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:shadow-md hover:border-zinc-300 transition-all duration-300 flex flex-col h-full"
              >
                <div className="p-2.5 bg-zinc-50 border border-zinc-200/60 rounded-lg w-fit mb-5">
                  {getPhilosophyIcon(item.iconName)}
                </div>
                <h3 className="font-sans font-semibold text-base text-zinc-900 mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-zinc-500 leading-relaxed flex-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
