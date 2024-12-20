"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CyberCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function CyberCard({ children, className, glowColor = "green" }: CyberCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative group">
      <div
        className={cn(
          "absolute inset-0 blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100",
          {
            "bg-green-500/20": glowColor === "green",
            "bg-blue-500/20": glowColor === "blue",
            "bg-purple-500/20": glowColor === "purple"
          }
        )}
      />
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative bg-black/50 border transition-all duration-300 backdrop-blur-sm",
          {
            "border-green-500/50": glowColor === "green" && isHovered,
            "border-blue-500/50": glowColor === "blue" && isHovered,
            "border-purple-500/50": glowColor === "purple" && isHovered,
            "border-green-500/20": glowColor === "green" && !isHovered,
            "border-blue-500/20": glowColor === "blue" && !isHovered,
            "border-purple-500/20": glowColor === "purple" && !isHovered,
          },
          className
        )}
      >
        {children}
      </Card>
    </div>
  );
}