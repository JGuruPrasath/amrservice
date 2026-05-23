import { WashingMachine, Refrigerator, AirVent, Microwave, Droplets, Flame } from "lucide-react";

const map = { WashingMachine, Refrigerator, AirVent, Microwave, Droplets, Flame } as const;

export function ServiceIcon({ name, className }: { name: keyof typeof map; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} />;
}
