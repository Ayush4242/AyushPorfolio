import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue, animate } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [velocity, setVelocity] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // For the "lagging" glow
  const glowX = useSpring(cursorX, { damping: 40, stiffness: 100 });
  const glowY = useSpring(cursorY, { damping: 40, stiffness: 100 });

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Calculate velocity for stretching effect
      const dx = clientX - lastPos.current.x;
      const dy = clientY - lastPos.current.y;
      const vel = Math.sqrt(dx * dx + dy * dy);
      setVelocity(vel);
      
      cursorX.set(clientX);
      cursorY.set(clientY);
      
      lastPos.current = { x: clientX, y: clientY };
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("button, a, input, textarea, [role='button'], .hover-target")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // Calculate rotation based on movement direction
  const angle = Math.atan2(
    cursorY.get() - lastPos.current.y,
    cursorX.get() - lastPos.current.x
  ) * (180 / Math.PI);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Lagging Soft Glow */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] hidden md:block"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Stretching Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 border-2 border-primary/30 rounded-full hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          rotate: angle,
          width: 40,
          height: 40,
        }}
        animate={{
          scaleX: isHovering ? 2 : 1 + (velocity / 100),
          scaleY: isHovering ? 2 : 1 - (velocity / 200),
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0)",
          borderColor: isHovering ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.3)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      
      {/* Inner Solid Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
      />
    </div>
  );
};

export default CustomCursor;
