import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";
import Button from "../components/Button";
import { Canvas } from "@react-three/fiber";
import resume from "../assets/AyushRanjanmodifiedcv.pdf";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";

// Import profile image
import profileImg from "../assets/images/profile.png";

const AnimatedText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return <span>{displayText}</span>;
};

const BackgroundEffect = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 1, 1]} />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <Sphere args={[1.5, 64, 64]} position={[2, 0, -2]}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.4}
              speed={2}
            />
          </Sphere>
        </Float>
        <Float speed={3} rotationIntensity={2} floatIntensity={2}>
          <Sphere args={[1, 64, 64]} position={[-2, 1, -3]}>
            <MeshDistortMaterial
              color="#8b5cf6"
              attach="material"
              distort={0.5}
              speed={1.5}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  );
};



const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <BackgroundEffect />
      
      <div className="container mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Available for new opportunities
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Ayush Ranjan</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-foreground/80 mb-8 h-8">
            <AnimatedText text="Full Stack Developer | MERN Developer | Problem Solver" />
          </div>
          
          <p className="text-foreground/60 max-w-lg mb-10 text-lg">
            I engineer scalable, full-stack web applications and thrive on solving complex problems with clean architecture, intuitive design, and seamless user experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <a href="#projects">
              <Button variant="primary" className="flex items-center gap-2">
                View Projects <ExternalLink size={18} />
              </Button>
            </a>
            <a href={resume} download>
  <Button variant="glass" className="flex items-center gap-2">
    Download Resume <Download size={18} />
  </Button>
</a>
            <a href="#contact">
              <Button variant="outline">Contact Me</Button>
            </a>
          </div>
          
          <div className="flex gap-6">
            <a href="https://github.com/Ayush4242" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ayush-ranjan-09a019277/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:ayushranjan4242@gmail.com" className="text-foreground/60 hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:flex justify-center items-center h-[500px]"
        >
          {/* Profile Image with Premium Styling */}
          <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full p-2 bg-white/20 hover:bg-white/40 border border-white/30 transition-all duration-500 overflow-hidden shadow-2xl group flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden bg-background">
              <img 
                src={profileImg} 
                alt="Ayush Ranjan" 
                className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-700"
              />
            </div>
          </div>
          
          {/* Animated Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-700" />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-foreground/40">Scroll Down</span>
        <div className="w-5 h-8 border-2 border-foreground/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
