import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$4.99",
    period: "/month",
    description: "Perfect for small groups of friends",
    features: [
      "2GB RAM",
      "10 Player Slots",
      "25GB SSD Storage",
      "Daily Backups",
      "Discord Support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "$9.99",
    period: "/month",
    description: "Ideal for growing communities",
    features: [
      "4GB RAM",
      "25 Player Slots",
      "50GB SSD Storage",
      "Hourly Backups",
      "Priority Support",
      "Free Domain"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$19.99",
    period: "/month",
    description: "For large servers and networks",
    features: [
      "8GB RAM",
      "Unlimited Players",
      "100GB SSD Storage",
      "Real-time Backups",
      "Dedicated Support",
      "Custom Plugins",
      "DDoS Protection"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-light-blue to-light-purple bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your Minecraft adventure. All plans include our core features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-card ${
                plan.popular 
                  ? 'border-primary scale-105 shadow-premium bg-gradient-to-b from-card to-primary/5' 
                  : 'border-border/50 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-light-blue to-light-purple text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Crown className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-6">
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline"} 
                  className="w-full"
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;