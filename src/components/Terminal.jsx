import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Terminal as TerminalIcon, Maximize2, Minus } from "lucide-react";

const COMMANDS = {
  help: "Available commands:\n  help     - Show this exact message\n  whoami   - Display information about me\n  skills   - List my top technical skills\n  projects - List my featured projects\n  clear    - Clear the terminal screen\n  exit     - Close the terminal",
  whoami: "Ayush Ranjan\nFull Stack Developer (MERN)\nLocation: India\nPassion: Solving complex problems algorithms and building scalable web apps.",
  skills: "> MERN Stack (MongoDB, Express, React, Node.js)\n> C++, Java, Python\n> Data Structures & Algorithms\n> System Monitoring & Security",
  projects: "1. Heavy Metals Pollution Indices Web App (MERN)\n2. AICTE Server Log Monitoring System (PHP/MySQL)\n3. Community Impact Tracker (JS/API)\n4. Bank Fraud Detection System (Java/C++)"
};

const Terminal = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState([
    { type: "system", content: "Welcome to AR.OS v1.0.0" },
    { type: "system", content: "Type 'help' to see available commands." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { type: "user", content: `~$ ${cmd}` }];

    if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    
    if (cmd === "exit") {
      onClose();
      setInput("");
      setHistory([]);
      return;
    }

    if (COMMANDS[cmd]) {
      newHistory.push({ type: "system", content: COMMANDS[cmd] });
    } else {
      newHistory.push({ type: "error", content: `bash: ${cmd}: command not found` });
    }

    setHistory(newHistory);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-full max-w-3xl flex flex-col bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            onClick={(e) => e.stopPropagation()}
            style={{ height: "60vh", minHeight: "400px" }}
          >
            {/* Mac-like Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#2d2d2d] border-b border-black/50">
              <div className="flex gap-2">
                <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex items-center gap-2 text-foreground/50 text-xs font-mono">
                <TerminalIcon size={14} /> ~
              </div>
              <div className="w-16" /> {/* Spacer for centering */}
            </div>

            {/* Terminal Body */}
            <div 
              className="flex-1 p-4 overflow-y-auto font-mono text-sm text-green-400 bg-black/50 custom-scrollbar"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((line, idx) => (
                <div key={idx} className="mb-2 whitespace-pre-wrap">
                  {line.type === "user" ? (
                    <span className="text-blue-400">{line.content}</span>
                  ) : line.type === "error" ? (
                    <span className="text-red-400">{line.content}</span>
                  ) : (
                    <span className="text-gray-300">{line.content}</span>
                  )}
                </div>
              ))}
              
              <form onSubmit={handleCommand} className="flex items-center mt-2">
                <span className="text-blue-400 mr-2 shrink-0">~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-transparent outline-none border-none text-gray-300 w-full"
                  autoComplete="off"
                  spellCheck="false"
                  autoFocus
                />
              </form>
              <div ref={bottomRef} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;
