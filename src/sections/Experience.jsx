import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-center"
          >
            My <span className="gradient-text">Experience</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard className="p-8 md:p-10 relative group overflow-hidden border border-white/5 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight flex items-center gap-3">
                    <Briefcase className="text-primary hidden md:block" size={28} />
                    Web Development Intern
                  </h3>
                  <h4 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                    Vanillakart (Subsidiary of Emvity Brushflicks Creative Hub Pvt Ltd.)
                  </h4>
                </div>
                <div className="inline-block px-4 py-2 rounded-full bg-white/5 text-sm font-medium whitespace-nowrap self-start">
                  Sep 2025 – Nov 2025
                </div>
              </div>
              
              <ul className="space-y-4 text-foreground/80 leading-relaxed list-none">
                <li className="flex gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span><strong>Situation:</strong> Enhanced the existing resort booking platform's UI responsiveness, navigation flow, and overall device consistency.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span><strong>Task:</strong> Assigned to substantially improve front-end usability, optimize layout designs, and guarantee seamless cross-browser performance.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span><strong>Action:</strong> Redesigned responsive UI components, customized WordPress-based sections, and optimized page layouts using modern web practices.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1 font-bold">•</span>
                  <span><strong>Result:</strong> Delivered a superior mobile-responsive interface and gained hands-on expertise in practical UI/UX optimization and collaborative development.</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <a 
                  href="https://drive.google.com/file/d/1YHaQ4Sll2gzhtS9vbzyq3SwOHvobGEx6/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary/20 text-primary font-bold hover:bg-primary/30 transition-colors border border-primary/20"
                >
                  <Briefcase size={18} /> View Certificate
                </a>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
