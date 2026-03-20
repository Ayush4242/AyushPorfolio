import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const Button = ({ children, className, variant = "primary", ...props }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    glass: "glass text-foreground hover:bg-white/20 dark:hover:bg-white/10",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
