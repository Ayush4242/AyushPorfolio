import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Award, BrainCircuit, Cloud, Code2, ExternalLink } from "lucide-react";

const certifications = [
  { 
    icon: <BrainCircuit className="text-green-500" size={32} />, 
    title: "Master Generative AI", 
    desc: "Comprehensive certification in Generative AI",
    link: "https://drive.google.com/file/d/1QaQKapnz4pbiPDdIzxk05ECgVuuyqw3j/view"
  },
  { 
    icon: <Code2 className="text-orange-500" size={32} />, 
    title: "HackerRank Problem Solving", 
    desc: "Problem Solving (Basic) Certificate",
    link: "https://drive.google.com/file/d/18ESqMt3SdAHv-AUYJqrVYypwexduKr6K/view"
  },
  { 
    icon: <Cloud className="text-cyan-500" size={32} />, 
    title: "NPTEL Cloud Computing", 
    desc: "Certified Cloud Practitioner",
    link: "https://drive.google.com/file/d/1lFVTrWfhNp-KPQ0EiSLkdclZIOvZhk3f/view"
  },
  { 
    icon: <Award className="text-pink-500" size={32} />, 
    title: "DSA Learn and Build", 
    desc: "Data Structures & Algorithms Projects",
    link: "https://drive.google.com/file/d/1a0chINeprVQKdsyoant-dWAPryHVze5Q/view" 
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4 text-center"
          >
            My <span className="gradient-text">Certifications</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <GlassCard className="p-6 h-full flex flex-col group hover:border-primary/50 transition-colors">
                <div className="p-4 rounded-2xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                <p className="text-sm text-foreground/70 flex-grow mb-6">{item.desc}</p>
                
                <div className="mt-auto pt-4 border-t border-white/10">
                  {item.link !== "#" ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                    >
                      View Certificate <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-foreground/40 cursor-not-allowed">
                      View Certificate <ExternalLink size={16} />
                    </span>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1/3 h-1/2 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

export default Certifications;
