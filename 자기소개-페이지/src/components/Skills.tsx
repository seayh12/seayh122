import { useState } from 'react';
import { motion } from 'motion/react';
import { profileData } from '../data/profileData';
import { Sparkles, Terminal, Code, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>('All');
  
  const categories = ['All', ...profileData.skills.map(s => s.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <Code className="w-5 h-5 text-zinc-700" />;
      case 'Backend':
        return <Terminal className="w-5 h-5 text-zinc-700" />;
      case 'DevOps & Tools':
        return <Cpu className="w-5 h-5 text-zinc-700" />;
      default:
        return <Sparkles className="w-5 h-5 text-zinc-700" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Advanced':
        return 'bg-zinc-900 text-white font-medium border border-zinc-950';
      case 'Intermediate':
        return 'bg-zinc-100 text-zinc-800 border border-zinc-200';
      case 'Basic':
        return 'bg-zinc-50 text-zinc-500 border border-zinc-150';
      default:
        return 'bg-zinc-100 text-zinc-600';
    }
  };

  return (
    <section id="skills" className="py-24 bg-zinc-50/50 border-y border-zinc-200/60">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center md:text-left space-y-3 mb-12">
          <h2 className="font-sans font-bold text-2xl md:text-3xl text-zinc-900 tracking-tight">Technical Skills</h2>
          <p className="font-sans text-sm text-zinc-500 max-w-xl">
            가장 선호하고 생산성 높은 기술 스택과, 비즈니스 및 아키텍처 구현에 유연하게 대처할 수 있는 보조 기술입니다.
          </p>
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium font-sans border transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-zinc-900 text-white border-zinc-950 shadow-[0_2px_4px_rgba(0,0,0,0.06)]'
                  : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Lists */}
        <div className="space-y-8">
          {profileData.skills
            .filter((group) => activeTab === 'All' || group.category === activeTab)
            .map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
                className="bg-white border border-zinc-200/80 rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
              >
                <div className="flex items-center gap-2.5 mb-6 border-b border-zinc-100 pb-4">
                  {getCategoryIcon(group.category)}
                  <h3 className="font-sans font-semibold text-base text-zinc-800">{group.category}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-3 bg-zinc-50/50 border border-zinc-150 hover:bg-white hover:border-zinc-300 hover:shadow-sm rounded-lg transition-all duration-200 flex items-center justify-between"
                    >
                      <span className="font-sans text-sm font-medium text-zinc-700 group-hover:text-zinc-950 transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full ${getLevelBadgeClass(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
