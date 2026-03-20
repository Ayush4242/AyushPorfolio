import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Code2, Database, Wrench, Layout } from "lucide-react";
import GlassCard from "./GlassCard";

const metricsData = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5" />,
    color: "from-blue-500 to-purple-500",
    skills: [
      { name: "C++", level: 90 },
      { name: "Java", level: 85 },
      { name: "Python", level: 85 },
      { name: "C", level: 80 },
      { name: "JavaScript", level: 80 },
      { name: "PHP", level: 75 },
      { name: "Kotlin", level: 70 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <Layout className="w-5 h-5" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "React.js", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 85 },
      { name: "Android Studio", level: 75 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
  {
    category: "Core Computer Science",
    icon: <Database className="w-5 h-5" />,
    color: "from-pink-500 to-rose-500",
    skills: [
      { name: "Data Structures & Algorithms", level: 85 },
      { name: "Object Oriented Programming (OOP)", level: 90 },
      { name: "Database Management Systems", level: 85 },
    ],
  },
];

const SkillMetricsModal = ({ isOpen, onClose }) => {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-3xl overflow-y-auto"
        >
          <motion.div
            initial={{ y: 50, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full min-h-screen md:min-h-0 md:max-w-5xl md:h-[85vh] md:rounded-3xl bg-background md:border border-white/10 md:shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 md:px-8 border-b border-white/5 bg-background/50 backdrop-blur-md md:rounded-t-3xl">
              <div>
                <h2 className="text-2xl md:text-3xl font-black gradient-text">Detailed Skill Metrics</h2>
                <p className="text-sm text-foreground/60 mt-1">Proficiency levels across different domains.</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-foreground/70 group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
              <div className="grid md:grid-cols-2 gap-8">
                {metricsData.map((category, idx) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                  >
                    <GlassCard className="p-6 h-full border-t-2 border-white/10">
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold">{category.category}</h3>
                      </div>
                      
                      <div className="space-y-5">
                        {category.skills.map((skill, sIdx) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-end mb-2">
                              <span className="font-medium text-foreground/90">{skill.name}</span>
                              <span className="text-sm font-bold text-foreground/70">{skill.level}%</span>
                            </div>
                            <div className="h-2.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: idx * 0.1 + sIdx * 0.1 + 0.4, ease: "easeOut" }}
                                className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                              >
                                {/* Soft highlight effect on the progress bar */}
                                <div className="absolute inset-0 bg-white/20 w-full" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 30%)' }}></div>
                              </motion.div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillMetricsModal;
