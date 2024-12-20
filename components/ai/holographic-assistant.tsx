"use client";

import { useState, useEffect } from 'react';
import { Bot, X, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function HolographicAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'ai'; content: string }[]>([
    { type: 'ai', content: 'Hello, I am your AI assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        type: 'ai', 
        content: `Processing request: "${input}". Initializing response protocol...` 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className={cn(
      "fixed bottom-4 right-4 z-50",
      isMinimized ? "w-12 h-12" : "w-96 h-96"
    )}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/50 
                     hover:bg-green-500/30 transition-all duration-300 flex items-center 
                     justify-center group"
        >
          <Bot className="w-6 h-6 text-green-400 group-hover:animate-pulse" />
        </button>
      ) : (
        <div className="w-full h-full bg-black/90 border border-green-500/50 rounded-lg 
                        backdrop-blur-lg shadow-lg flex flex-col">
          <div className="p-4 border-b border-green-500/20 flex justify-between items-center">
            <h3 className="text-green-400 font-semibold flex items-center gap-2">
              <Bot className="w-4 h-4" />
              AI Assistant
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-green-400 hover:text-green-300 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex",
                      message.type === 'user' ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-lg p-3",
                        message.type === 'user'
                          ? "bg-green-500/20 text-green-400"
                          : "bg-green-900/20 text-green-400"
                      )}
                    >
                      <p className="text-sm">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-green-900/20 text-green-400 rounded-lg p-3">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-100" />
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="p-4 border-t border-green-500/20">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-black/50 border border-green-500/50 rounded-lg px-4 py-2 
                           text-green-400 placeholder:text-green-400/50 focus:outline-none 
                           focus:border-green-400 transition-colors"
                />
              </form>
            </>
          )}
        </div>
      )}
    </div>
  );
}