import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 border-t border-background/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">S</span>
            </div>
            <div>
              <p className="text-background font-semibold" style={{ fontFamily: "'DM Serif Display', serif" }}>Satish</p>
              <p className="text-background/50 text-sm font-sans">Full-Stack Developer</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:text-accent hover:bg-background/20 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:text-accent hover:bg-background/20 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:text-accent hover:bg-background/20 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:text-accent hover:bg-background/20 transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-background/50 text-sm font-sans">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
