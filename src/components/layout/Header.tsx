import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/80 backdrop-blur-xl border-b border-primary-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">S</span>
            </div>
            <span className="text-primary-foreground font-bold text-xl hidden sm:block">Satish</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">
              Services
            </a>
            <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">
              About
            </a>
            <a href="#testimonials" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">
              Testimonials
            </a>
            <a href="#tech" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm font-medium">
              Tech Stack
            </a>
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10">
            <nav className="flex flex-col gap-4">
              <a href="#services" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors py-2">
                Services
              </a>
              <a href="#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors py-2">
                About
              </a>
              <a href="#testimonials" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors py-2">
                Testimonials
              </a>
              <a href="#tech" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors py-2">
                Tech Stack
              </a>
              <Button variant="hero" className="mt-2">
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
