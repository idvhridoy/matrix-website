"use client";

import { useEffect, useState } from "react";

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const [glitchedText, setGlitchedText] = useState(text);
  
  useEffect(() => {
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
    let interval: NodeJS.Timeout;
    
    const handleMouseOver = () => {
      let iterations = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        setGlitchedText(
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) return text[index];
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join("")
        );
        
        iterations += 1/3;
        if (iterations >= text.length) {
          clearInterval(interval);
          setGlitchedText(text);
        }
      }, 30);
    };
    
    handleMouseOver();
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span className={`inline-block hover:text-green-400 transition-colors ${className}`}>
      {glitchedText}
    </span>
  );
}