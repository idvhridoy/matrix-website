"use client";

import { useState, useEffect } from 'react';
import { Fingerprint, Lock, Unlock } from 'lucide-react';

export function BiometricLogin({ onSuccess }: { onSuccess: () => void }) {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleScan = () => {
    if (scanning) return;
    setScanning(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setScanning(false);
          onSuccess();
          return 100;
        }
        return p + 2;
      });
    }, 50);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="relative">
        <button
          onClick={handleScan}
          disabled={scanning}
          className={`w-32 h-32 rounded-full border-4 ${
            scanning 
              ? 'border-green-500 animate-pulse' 
              : 'border-green-500/50 hover:border-green-400'
          } transition-all duration-300 flex items-center justify-center group`}
        >
          {scanning ? (
            <Lock className="w-16 h-16 text-green-400 animate-pulse" />
          ) : (
            <Fingerprint className="w-16 h-16 text-green-400 group-hover:scale-110 transition-transform" />
          )}
        </button>
        {scanning && (
          <div className="absolute -inset-2 rounded-full border border-green-500/50 animate-ping" />
        )}
      </div>

      {scanning && (
        <div className="w-64 space-y-2">
          <div className="h-2 bg-green-900/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-green-400/70 text-sm text-center">
            Scanning biometric signature... {progress}%
          </p>
        </div>
      )}
    </div>
  );
}