import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowUpRight } from "lucide-react";

import content from "@/assets/content.json";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { header } = content;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl">
      <div className="container max-w-none mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-foreground text-xl sm:block" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{header.logo}</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 mx-auto">
            {header.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm" className="border-foreground text-background bg-foreground hover:bg-background hover:text-foreground">
              <a href={header.ctaUrl} target="_blank">
                {header.cta}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {header.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" className="mt-2">
                {header.cta}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
