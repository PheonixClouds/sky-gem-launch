import { Button } from "@/components/ui/button";
import { Server, Github, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-light-blue to-light-purple">
                <Server className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-light-blue to-light-purple bg-clip-text text-transparent">
                CraftHost
              </span>
            </div>
            <p className="text-muted-foreground">
              Premium Minecraft hosting that scales with your community. 
              Built by gamers, for gamers.
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="discord" size="icon">
                <Server className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hosting</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Minecraft Java</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Minecraft Bedrock</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Modded Servers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Network Hosting</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Knowledge Base</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Discord Support</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Ticket System</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Server Status</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2024 CraftHost. All rights reserved. Minecraft is a trademark of Mojang Studios.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;