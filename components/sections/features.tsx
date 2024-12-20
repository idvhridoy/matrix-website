import { Terminal, Code2, Cpu, Shield, Zap, Network } from "lucide-react";
import { CyberCard } from "@/components/ui/cyber-card";

const features = [
  {
    title: "Quantum Encryption",
    description: "Next-gen security using quantum-resistant algorithms.",
    icon: Shield,
    color: "green",
  },
  {
    title: "Neural Analytics",
    description: "AI-powered real-time system analysis and optimization.",
    icon: Cpu,
    color: "blue",
  },
  {
    title: "Blockchain Integration",
    description: "Decentralized infrastructure for maximum reliability.",
    icon: Network,
    color: "purple",
  },
  {
    title: "Zero-Day Protection",
    description: "Advanced threat detection and prevention systems.",
    icon: Terminal,
    color: "green",
  },
  {
    title: "Quantum Computing",
    description: "Leverage quantum processing for complex operations.",
    icon: Zap,
    color: "blue",
  },
  {
    title: "Neural Networks",
    description: "Self-learning systems that evolve with your needs.",
    icon: Code2,
    color: "purple",
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <CyberCard key={index} glowColor={feature.color}>
          <div className="p-6 space-y-4">
            <feature.icon className="h-8 w-8 text-green-400 group-hover:animate-pulse" />
            <h3 className="text-green-400 text-lg font-semibold">
              {feature.title}
            </h3>
            <p className="text-green-400/70">
              {feature.description}
            </p>
          </div>
        </CyberCard>
      ))}
    </div>
  );
}