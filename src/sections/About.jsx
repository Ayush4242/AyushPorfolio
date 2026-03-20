import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Code2, Brain, Activity, ShieldCheck, Server, Database } from "lucide-react";

const stats = [
  { icon: <Code2 className="text-primary" />, label: "MERN Stack", desc: "Building scalable web apps" },
  { icon: <Brain className="text-secondary" />, label: "Problem Solving", desc: "DS & Algorithms expert" },
  { icon: <Activity className="text-accent" />, label: "Monitoring", desc: "Scientific & real-time systems" },
  { icon: <ShieldCheck className="text-orange-500" />, label: "Security", desc: "Fraud & risk detection" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-4">Passionate Software Developer</h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                As a dedicated MERN Stack developer, I specialize in building complex, data-driven web applications. My experience ranges from developing scientific platforms for pollution monitoring to real-time server log auditing systems.
              </p>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                I have a strong foundation in Data Structures and Algorithms, with hundreds of problems solved on platforms like LeetCode. This analytical mindset allows me to approach every project with efficiency and precision.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                My goal is to create digital solutions that not only look premium but also solve real-world problems through AI integration and robust backend architectures.
              </p>
            </GlassCard>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <GlassCard className="p-6 h-full flex flex-col items-center text-center">
                  <div className="p-4 rounded-2xl bg-white/5 mb-4">
                    {stat.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{stat.label}</h4>
                  <p className="text-sm text-foreground/60">{stat.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default About;
