import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Award, Code2, Trophy, Github } from "lucide-react";

const achievements = [
  { icon: <Code2 className="text-blue-500" />, title: "375+ Problems Solved", desc: "Across LeetCode & GeeksForGeeks" },
  { icon: <Trophy className="text-yellow-500" />, title: "LeetCode Rating: 1527", desc: "Consistent top performer" },
  { icon: <Award className="text-purple-500" />, title: "4th Place Hackathon", desc: "Winner among 50+ teams" },
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
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        
        {/* GitHub Consistency Section */}
        <div className="mt-16 sm:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-6 md:p-8 flex flex-col items-center group hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-4 mb-8 md:mb-10 w-full justify-center md:justify-start">
                <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform hidden sm:block">
                  <Github className="text-white w-6 h-6" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold">GitHub <span className="gradient-text">Consistency</span></h3>
                  <p className="text-foreground/60 text-sm mt-1">Live tracking of my open source contributions and coding streak.</p>
                </div>
              </div>
              
              <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 gap-8 items-center">
                {/* GitHub Stats */}
                <div className="w-full flex justify-center bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_30px_rgba(244,63,94,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:border-primary/50 transition-all duration-500 h-full items-center">
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=Ayush4242&show_icons=true&theme=transparent&hide_border=true&title_color=f43f5e&text_color=e2e8f0&icon_color=f97316&bg_color=00000000&hide=stars,issues,prs&hide_rank=true" 
                    alt="Ayush's GitHub Stats" 
                    className="w-full max-w-[450px] object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-500"
                  />
                </div>
                
                {/* GitHub Streak */}
                <div className="w-full flex justify-center bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_30px_rgba(244,63,94,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:border-primary/50 transition-all duration-500 h-full items-center">
                  <img 
                    src="https://github-readme-streak-stats.herokuapp.com/?user=Ayush4242&theme=transparent&hide_border=true&title_color=f43f5e&text_color=e2e8f0&ring=f43f5e&fire=f97316&sideNums=e2e8f0&sideLabels=e2e8f0&currStreakNum=f97316&currStreakLabel=e2e8f0&bg_color=00000000" 
                    alt="Ayush's GitHub Streak" 
                    className="w-full max-w-[450px] object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-500"
                  />
                </div>

                {/* GitHub Top Languages */}
                <div className="w-full flex justify-center bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-[0_0_30px_rgba(244,63,94,0.1)] hover:shadow-[0_0_40px_rgba(249,115,22,0.2)] hover:border-primary/50 transition-all duration-500 h-full items-center xl:col-span-1 lg:col-span-2">
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=Ayush4242&layout=compact&theme=transparent&hide_border=true&title_color=f43f5e&text_color=e2e8f0&bg_color=00000000" 
                    alt="Ayush's Top Languages" 
                    className="w-full max-w-[450px] object-contain drop-shadow-2xl transition-transform hover:scale-105 duration-500"
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Achievements;
