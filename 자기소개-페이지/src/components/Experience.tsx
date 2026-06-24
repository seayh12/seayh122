import { motion } from 'motion/react';
import { profileData } from '../data/profileData';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-zinc-50/50 border-y border-zinc-200/60">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center md:text-left space-y-3 mb-16">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-zinc-900 tracking-tight">Work Experience</h2>
          <p className="font-sans text-sm text-zinc-500 max-w-xl">
            다양한 비즈니스 요건을 해결하며 신뢰받는 동료로서 기여한 성과와 커리어 연혁입니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-8 border-l border-zinc-200/80 space-y-16 max-w-3xl ml-2">
          {profileData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative"
            >
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[35px] md:-left-[43px] top-1.5 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-600">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card content */}
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1.5">
                  <div className="space-y-1">
                    <h3 className="font-sans font-bold text-lg text-zinc-900">
                      {exp.company}
                    </h3>
                    <p className="text-sm font-sans font-medium text-zinc-500">
                      {exp.role}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 bg-zinc-100 border border-zinc-200 rounded-full text-zinc-600 w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="font-sans text-sm text-zinc-600 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>

                {/* Achievements list */}
                <div className="space-y-2 pt-2">
                  <h4 className="font-sans font-semibold text-xs text-zinc-800 uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5 max-w-2xl">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-zinc-500 leading-relaxed bg-white border border-zinc-150 rounded-lg p-3 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-zinc-250 hover:text-zinc-750 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
