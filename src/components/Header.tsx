import { Button } from "@/components/ui/button";
import { Server, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-light-blue to-light-purple">
              <Server className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-light-blue to-light-purple bg-clip-text text-transparent">
              CraftHost
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#support" className="text-foreground hover:text-primary transition-colors">Support</a>
          </nav>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;