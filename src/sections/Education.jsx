import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    institution: "Lovely Professional University",
    degree: "B.Tech CSE",
    score: "CGPA: 7.65",
    period: "2023-Present",
    desc: "Focusing on Software Engineering, Data Structures, and AI Development."
  },
  {
    institution: "Intermediate (Class XII)",
    degree: "Science Stream",
    score: "Percentage: 83%",
    period: "2021-2023",
    desc: "Specialized in Physics, Chemistry, and Mathematics."
  },
  {
    institution: "Matriculation (Class X)",
    degree: "General",
    score: "Percentage: 91%",
    period: "2021",
    desc: "Outstanding performance in academic boards."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Education <span className="gradient-text">Timeline</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-[var(--background)] -translate-x-1/2 z-10 hidden md:block" />
                
                <div className="w-full md:w-1/2 p-4">
                  <GlassCard className="p-8 hover:border-primary/30 transition-all">
                    <div className="flex items-center gap-3 mb-4 text-primary">
                      <GraduationCap size={24} />
                      <span className="text-sm font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{item.institution}</h3>
                    <h4 className="text-lg font-semibold text-foreground/80 mb-2">{item.degree}</h4>
                    <div className="flex items-center gap-2 text-primary font-bold mb-4">
                      <BookOpen size={18} />
                      {item.score}
                    </div>
                    <p className="text-foreground/60 text-sm">{item.desc}</p>
                  </GlassCard>
                </div>
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
