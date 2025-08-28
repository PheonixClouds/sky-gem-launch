import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Zap } from "lucide-react";
import heroImage from "@/assets/minecraft-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-light-blue/10 via-background to-light-purple/10"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-light-purple" />
            <span className="text-sm font-medium text-foreground">Premium Minecraft Hosting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-light-blue to-light-purple bg-clip-text text-transparent leading-tight">
            Launch Your Dream
            <br />
            Minecraft Server
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience lightning-fast performance, 99.9% uptime, and instant setup. 
            Join thousands of satisfied players on our premium hosting platform.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" className="group">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button variant="discord" size="lg" className="group">
            <Users className="mr-2 h-5 w-5" />
            Join Discord
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-light-blue mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-light-purple mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl font-bold text-blue-bright mb-2">10K+</div>
            <div className="text-sm text-muted-foreground">Active Servers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;