import { Leaf, Github, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-primary/10 glass">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent">
                ForestGuard AI
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Advanced ML-powered deforestation detection using Sentinel-2 satellite imagery
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/model" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Model & Dataset
                </Link>
              </li>
              <li>
                <Link to="/detection" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Detection
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Map Visualization
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Documentation <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  API Reference <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  Research Paper <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-primary">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href="mailto:team@forestguard.ai" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  team@forestguard.ai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ForestGuard AI. Protecting forests through technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
