"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function AccessModal({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const [accessCode, setAccessCode] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
    setTimeout(() => setError(false), 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-black/90 border-green-500/50">
        <DialogHeader>
          <DialogTitle className="text-green-400 flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            Access Protocol
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              placeholder="Enter access code"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              className={`bg-black/50 border-green-500/50 text-green-400 placeholder:text-green-400/50 ${
                error ? 'animate-shake border-red-500' : ''
              }`}
            />
            {error && (
              <p className="text-red-500 text-sm">Access denied. Invalid code.</p>
            )}
          </div>
          <Button
            type="submit"
            className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 border border-green-500/50"
          >
            Verify Access
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}