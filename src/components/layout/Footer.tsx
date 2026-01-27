import { Github, Linkedin, Twitter, Mail } from "lucide-react";

import content from "@/assets/content.json";

const Footer = () => {
  const { footer } = content;

  return (
    <footer className="bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div>
              <p className="text-foreground text-2xl" style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}>{footer.logo}</p>
              <p className="text-foreground/50 text-sm font-sans">{footer.role}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {footer.social.map((item) => {
              const Icon = { Github, Linkedin, Twitter, Mail }[item.platform];
              return (
                <a
                  key={item.platform}
                  href={item.href}
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center text-foreground/70 hover:text-accent hover:bg-background/20 transition-all"
                >
                  {Icon && <Icon className="w-5 h-5" />}
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-foreground/50 text-sm font-sans">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
