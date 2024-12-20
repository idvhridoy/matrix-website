"use client";

import { useState } from "react";
import { Terminal, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText } from "@/components/ui/glitch-text";
import { InitializeModal } from "@/components/modals/initialize-modal";
import { AccessModal } from "@/components/modals/access-modal";

export function Hero() {
  const [initializeOpen, setInitializeOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);

  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl sm:text-6xl font-bold">
        <GlitchText
          text="Welcome to the Future"
          className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600"
        />
      </h1>
      
      <div className="relative">
        <p className="text-green-400 text-xl sm:text-2xl max-w-2xl mx-auto opacity-90">
          <span className="animate-pulse">Innovate</span>{" "}
          <span className="text-green-500/50">•</span>{" "}
          <span className="animate-pulse animation-delay-200">Hack</span>{" "}
          <span className="text-green-500/50">•</span>{" "}
          <span className="animate-pulse animation-delay-400">Build</span>
        </p>
        
        <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 blur-lg" />
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          size="lg"
          onClick={() => setInitializeOpen(true)}
          className="bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50 hover:border-green-400 transition-all duration-300 group"
        >
          <Terminal className="mr-2 h-5 w-5 group-hover:animate-pulse" />
          Initialize System
        </Button>
        
        <Button
          size="lg"
          variant="outline"
          onClick={() => setAccessOpen(true)}
          className="border-green-500/50 hover:border-green-400 text-green-400 hover:bg-green-500/10 transition-all duration-300 group"
        >
          <Code2 className="mr-2 h-5 w-5 group-hover:animate-pulse" />
          Access Protocol
        </Button>
      </div>

      <InitializeModal open={initializeOpen} onOpenChange={setInitializeOpen} />
      <AccessModal open={accessOpen} onOpenChange={setAccessOpen} />
    </div>
  );
}