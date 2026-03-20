import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import GlassCard from "../components/GlassCard";
import SkillMetricsModal from "../components/SkillMetricsModal";

const skillCategories = [
  {
    title: "Languages",
    skills: ["C++", "Python", "C", "JavaScript", "PHP", "Java", "Kotlin"],
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Frameworks / Libraries",
    skills: ["React.js", "Express.js", "TailwindCSS"],
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Tools / Platforms",
    skills: ["MongoDB", "MySQL", "Android Studio"],
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    title: "Soft Skills",
    skills: ["Problem Solving", "Team Player", "Time Management", "Adaptability"],
    color: "from-pink-500/20 to-rose-500/20"
  }
];

const Skills = () => {
  const [showMetrics, setShowMetrics] = useState(false);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className={`p-8 h-full border-t-2 border-primary/20 bg-linear-to-br ${category.color}`}>
                <h3 className="text-xl font-bold mb-6 text-center">{category.title}</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, sIdx) => (
                    <motion.span
                      key={sIdx}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm font-medium transition-all"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        {/* Detailed Metrics Button */}
        <div className="mt-16 flex justify-center">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMetrics(true)}
            className="group relative flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <BarChart3 className="w-5 h-5 relative z-10" />
            <span className="relative z-10">View Detailed Metrics</span>
          </motion.button>
        </div>

        {/* Skill Bubbles Background */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-20 relative z-0">
          {["C++", "React", "Node.js", "MongoDB", "Python", "Problem Solving"].map((t, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="px-6 py-2 rounded-full border border-primary text-primary font-bold"
            >
              {t}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Skill Metrics Modal overlay */}
      <SkillMetricsModal isOpen={showMetrics} onClose={() => setShowMetrics(false)} />
    </section>
  );
};

export default Skills;
