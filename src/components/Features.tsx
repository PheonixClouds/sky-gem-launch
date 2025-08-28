import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Headphones, Globe, Database, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "NVMe SSD storage and premium CPUs ensure your server runs at peak performance 24/7."
  },
  {
    icon: Shield,
    title: "DDoS Protection",
    description: "Enterprise-grade protection keeps your server online even during the largest attacks."
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Expert Minecraft technicians available around the clock via Discord and tickets."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Choose from 15+ locations worldwide to minimize latency for your players."
  },
  {
    icon: Database,
    title: "Auto Backups",
    description: "Hourly automated backups ensure your world is always safe and recoverable."
  },
  {
    icon: Clock,
    title: "Instant Setup",
    description: "Your server is ready in under 60 seconds with one-click modpack installation."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-light-blue to-light-purple bg-clip-text text-transparent">
            Why Choose CraftHost?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built by Minecraft enthusiasts, for Minecraft enthusiasts. Experience hosting that just works.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-light-blue/10 to-light-purple/10 group-hover:from-light-blue/20 group-hover:to-light-purple/20 transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;