import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

const GlassCard = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className={cn("glass p-6 rounded-2xl", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
