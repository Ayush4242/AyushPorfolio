import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { Github, ExternalLink, Activity, ShieldCheck, AlertCircle, Lightbulb, GraduationCap, ChevronDown } from "lucide-react";

const projects = [
  {
    title: "Heavy Metals Pollution Indices Web App",
    tech: ["MERN", "TailwindCSS", "Vite"],
    tagline: "Automated calculations for environmental scientists.",
    problem: "Calculating complex pollution indices manually is error-prone and time-consuming for environmental scientists.",
    solution: "Developed a MERN stack web app to automate HPI, MPI, CF, and PLI calculations with a dashboard and MongoDB storage.",
    learnings: "Gained expertise in building complex mathematical models into interactive web applications and managing state in React.",
    github: "https://github.com/Ayush4242/Heavy-metal-indices-Full-stack-project",
    demo: "https://heavy-metal-indices-fullstack.vercel.app/",
    icon: <Activity className="text-white w-6 h-6" />
  },
  {
    title: "Role-Based Full Stack Job Portal",
    tech: ["React", "TypeScript", "Supabase"],
    tagline: "Scalable multi-role job platform for structured hiring workflows.",
    problem: "Transparency gaps in existing hiring systems complicate workflows for candidates, recruiters, and administrators.",
    solution: "Implemented job posting, real-time application tracking, and ATS-based resume evaluation using React and Supabase.",
    learnings: "Enhanced hiring workflow efficiency while demonstrating strong full-stack development and system design expertise.",
    github: "https://github.com/Ayush4242/job-portal",
    demo: "https://job-portal-beta-rust.vercel.app/",
    icon: <Activity className="text-white w-6 h-6" />
  },
  {
    title: "AICTE Server Log Monitoring System",
    tech: ["HTML", "TailwindCSS", "JS", "PHP", "MySQL"],
    tagline: "Real-time log tracking with automated alerts.",
    problem: "Inefficient and slow manual tracking of server logs makes it difficult to detect anomalies in real time.",
    solution: "Created a real-time log monitoring system with role-based access, automated alerts, and analytics dashboards.",
    learnings: "Learned how to efficiently parse and analyze large log files and implement real-time alerts.",
    github: "https://github.com/Ayush4242/PHPproject",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7320122641544069122/",
    icon: <ShieldCheck className="text-white w-6 h-6" />
  },
  {
    title: "Bank Fraud Detection System",
    tech: ["Java Swing", "C++"],
    tagline: "Secure platform to quickly identify fraudulent transactions.",
    problem: "Traditional banking systems face challenges in quickly identifying and classifying fraudulent transactions.",
    solution: "Developed a secure platform using Java Swing and C++ with risk classification and account monitoring.",
    learnings: "Deepened understanding of security protocols, risk algorithms, and desktop application development.",
    github: "https://github.com/Ayush4242/Bank-Fraud-Detection-System",
    demo: "https://www.youtube.com/watch?v=8WCA-HhsOk4",
    icon: <ShieldCheck className="text-white w-6 h-6" />
  }
];

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full"
    >
      <GlassCard className="p-0 overflow-hidden group flex flex-col w-full border-t-2 border-white/10 hover:border-primary/50 transition-colors duration-500">
        
        {/* Eye-catching Header Image Area */}
        <div className="h-40 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 relative overflow-hidden shrink-0 flex items-center justify-center">
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          
          <div className="relative z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transform group-hover:scale-110 transition-transform duration-500">
            {project.icon}
          </div>

          <div className="absolute bottom-3 left-4 right-4 flex gap-2 flex-wrap justify-center">
            {project.tech.map((t, i) => (
              <span key={i} className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10 shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
        
        {/* Always Visible Content */}
        <div className="p-6 md:p-8 flex flex-col flex-grow bg-gradient-to-b from-transparent to-background/50">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-sm text-foreground/70 mb-6 flex-grow">
            {project.tagline}
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-auto">
            <div className="flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary text-foreground/70 transition-all border border-white/10" aria-label="Github Repo">
                <Github size={18} />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary text-foreground/70 transition-all border border-white/10" aria-label="Live Demo">
                <ExternalLink size={18} />
              </a>
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-sm font-bold text-primary hover:text-primary/80 transition-colors px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20"
            >
              {isExpanded ? "Hide Details" : "Read Case Study"}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Expandable Case Study Details */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden bg-background/50 border-t border-white/5"
            >
              <div className="p-6 md:p-8 flex flex-col gap-6">
                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1.5 rounded-full bg-red-500/20 text-red-500">
                      <AlertCircle size={14} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wider">The Problem</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">{project.problem}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1.5 rounded-full bg-yellow-500/20 text-yellow-500">
                      <Lightbulb size={14} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wider">The Solution</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <div className="p-1.5 rounded-full bg-green-500/20 text-green-500">
                      <GraduationCap size={14} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wider">The Learnings</h4>
                    <p className="text-sm text-foreground/70 leading-relaxed">{project.learnings}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </GlassCard>
    </motion.div>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <p className="text-foreground/60 max-w-2xl mx-auto mb-6">
            A selection of my recent work focusing on solving real-world problems through clean architecture and intuitive design.
          </p>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>

        {projects.length > 2 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-bold transition-colors border border-primary/20 hover:border-primary/50"
            >
              {showAll ? "Show Less" : "Know More"}
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
