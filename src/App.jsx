import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./hooks/use-theme";
import { AnimatePresence } from "framer-motion";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen";

// Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        <AnimatePresence>
          {loading && <LoadingScreen key="loading" />}
        </AnimatePresence>

        <Navbar />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
        </main>

        <footer className="py-12 border-t border-white/5 text-center text-foreground/40 text-sm">
          <p>© {new Date().getFullYear()} Ayush Ranjan. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
