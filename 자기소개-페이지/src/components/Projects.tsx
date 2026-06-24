import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { profileData } from '../data/profileData';
import { Github, ExternalLink, Calendar, User, Code, Layers } from 'lucide-react';

export default function Projects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const selectedProject = profileData.projects.find(p => p.id === selectedProjectId);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center md:text-left space-y-3 mb-16">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-zinc-900 tracking-tight">Featured Projects</h2>
          <p className="font-sans text-sm text-zinc-500 max-w-xl">
            개발 역량의 성장과 가치를 보여주는 주요 프로젝트 셀렉션입니다. 각 카드를 클릭하여 상세 구현 내용과 특징을 확인하실 수 있습니다.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profileData.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedProjectId(project.id)}
              className="group cursor-pointer bg-white border border-zinc-200 hover:border-zinc-300 rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-md transition-all duration-300 flex flex-col justify-between h-80 relative overflow-hidden"
            >
              {/* Category indicator background decorative */}
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-24 h-24 bg-zinc-50 border border-zinc-100 rounded-full group-hover:scale-110 transition-transform -z-0 pointer-events-none" />

              <div className="space-y-4 z-10 relative">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-[10px] font-mono uppercase tracking-wider text-zinc-600 rounded">
                    {project.category}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {project.period.split(' ~ ')[0]}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-lg text-zinc-900 group-hover:text-zinc-650 transition-colors">
                    {project.title.split(' - ')[0]}
                  </h3>
                  <p className="text-xs font-sans text-zinc-400">
                    {project.title.split(' - ')[1] || ''}
                  </p>
                </div>

                <p className="font-sans text-sm text-zinc-500 leading-relaxed line-clamp-3">
                  {project.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-zinc-100/80 z-10 relative flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-zinc-50 border border-zinc-150 rounded text-[10px] font-mono text-zinc-500"
                  >
                    #{tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-[10px] font-mono text-zinc-400">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {selectedProjectId && selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProjectId(null)}
                className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative bg-white rounded-xl border border-zinc-200 shadow-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto z-10 flex flex-col"
              >
                {/* Header */}
                <div className="sticky top-0 bg-white/90 backdrop-blur-md px-6 py-4 border-b border-zinc-150 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 bg-zinc-100 border border-zinc-200 text-[10px] font-mono uppercase tracking-wider text-zinc-600 rounded">
                    {selectedProject.category}
                  </span>
                  <button
                    onClick={() => setSelectedProjectId(null)}
                    className="p-1.5 hover:bg-zinc-100 rounded-lg text-zinc-500 hover:text-zinc-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="p-6 md:p-8 space-y-6 flex-1 overflow-y-auto">
                  <div className="space-y-2">
                    <h3 className="font-sans font-bold text-2xl text-zinc-900 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-xs text-zinc-500 font-mono">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{selectedProject.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{selectedProject.role}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-sans font-semibold text-sm text-zinc-800 flex items-center gap-1.5">
                      <Layers className="w-4 h-4 text-zinc-500" />
                      Project Overview
                    </h4>
                    <p className="font-sans text-sm text-zinc-600 leading-relaxed text-justify">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-sans font-semibold text-sm text-zinc-800 flex items-center gap-1.5">
                      <Code className="w-4 h-4 text-zinc-500" />
                      Key Implementation Details
                    </h4>
                    <ul className="space-y-2.5 pl-1">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-zinc-600 leading-relaxed">
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-zinc-50 border border-zinc-150 rounded text-xs font-mono text-zinc-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-150 flex items-center justify-end gap-3 rounded-b-xl">
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-zinc-200 hover:border-zinc-300 rounded-lg text-xs font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub Repository
                    </a>
                  )}
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 hover:bg-zinc-850 text-white rounded-lg text-xs font-medium transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
