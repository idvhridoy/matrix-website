"use client";

import { Github } from "lucide-react";
import MatrixRain from "@/components/matrix-rain";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { HolographicAssistant } from "@/components/ai/holographic-assistant";
import { DataGlobe } from "@/components/visualization/data-globe";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <MatrixRain />
      
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-24 sm:px-6 lg:px-8 space-y-32">
          <Hero />
          <div className="h-[600px] w-full">
            <DataGlobe />
          </div>
          <Features />
        </div>

        <footer className="border-t border-green-500/20 mt-24">
          <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <p className="text-green-400/70">
                <span className="animate-pulse">System</span> © {new Date().getFullYear()}
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      <HolographicAssistant />
    </main>
  );
}