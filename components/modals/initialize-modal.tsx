"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function InitializeModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [progress, setProgress] = useState(0);

  // Simulate initialization progress
  useState(() => {
    if (open) {
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            return 100;
          }
          return p + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-green-500/50">
        <DialogHeader>
          <DialogTitle className="text-green-400 flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            System Initialization
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="font-mono text-green-400">
            <p>{">"} Initializing core systems...</p>
            <p>{">"} Loading quantum modules...</p>
            <p>{">"} Calibrating neural networks...</p>
          </div>
          <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-green-400/70 text-sm text-right">{progress}%</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}