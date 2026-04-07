import { DATA } from "@/data/resume";
import { Shield, Search, Code } from "lucide-react";

const iconMap = {
  shield: Shield,
  search: Search,
  code: Code,
};

export default function DifferentiatorsSection() {
  return (
    <section id="differentiators">
      <div className="flex min-h-0 flex-col gap-y-6">
        <h2 className="text-xl font-bold">What Sets Me Apart</h2>
        <div className="flex flex-col gap-4">
          {DATA.differentiators.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-4 border rounded-xl bg-card"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
