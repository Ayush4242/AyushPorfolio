import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Award, Code2, Trophy, Cloud, BrainCircuit } from "lucide-react";

const achievements = [
  { icon: <Code2 className="text-blue-500" />, title: "375+ Problems Solved", desc: "Across LeetCode & GeeksForGeeks" },
  { icon: <Trophy className="text-yellow-500" />, title: "LeetCode Rating: 1527", desc: "Consistent top performer" },
  { icon: <Award className="text-purple-500" />, title: "4th Place Hackathon", desc: "Winner among 50+ teams" },
  { icon: <BrainCircuit className="text-green-500" />, title: "Gen AI Certified", desc: "Professional background in AI" },
  { icon: <Cloud className="text-cyan-500" />, title: "Cloud Computing", desc: "Certified AWS/Cloud practitioner" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            My <span className="gradient-text">Achievements</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col items-center text-center group hover:border-primary/50 transition-colors">
                <div className="p-4 rounded-2xl bg-white/5 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-xs text-foreground/50">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Achievements;
