import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { PixelOtter } from "@/components/PixelOtter";

interface FooterProps {
  variant?: "default" | "echelon";
}

export function Footer({ variant = "default" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "echelon") {
    return (
      <footer className="border-t border-separator mt-auto">
        {/* Main Footer Content */}
        <div className="container-wide py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {/* Location */}
            <div className="space-y-3">
              <p className="text-label">Focus</p>
              <div className="text-sm text-foreground space-y-1">
                <p>Game Sound Design</p>
                <p>Music & Audio Systems</p>
              </div>
            </div>

            {/* Gallery / Navigation */}
            <div className="space-y-3">
              <p className="text-label">Navigation</p>
              <div className="text-sm space-y-1">
                <Link to="/work" className="block text-foreground hover:text-earth-orange transition-colors">Works</Link>
                <Link to="/about" className="block text-foreground hover:text-earth-orange transition-colors">About</Link>
                <Link to="/contact" className="block text-foreground hover:text-earth-orange transition-colors">Contact</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <p className="text-label">Connect</p>
              <div className="text-sm text-foreground space-y-1">
                {site.contactLinks.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-earth-orange transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="space-y-3">
              <p className="text-label">Legal</p>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>© {currentYear} {site.name}</p>
                <p className="text-xs text-muted-foreground/80">Stockholm, Sweden</p>
              </div>
            </div>
          </div>
        </div>

        {/* Swimming Pixel Art Otter Stream replacing rolling handle text */}
        <PixelOtter />
      </footer>
    );
  }

  // Default footer
  return (
    <footer className="border-t border-separator">
      <div className="container-wide py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Left */}
          <div className="space-y-4">
            <p className="font-display text-xl font-semibold">{site.name}</p>
            <p className="text-muted-foreground text-sm">
              {site.role}
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link to="/work" className="hover:text-earth-orange transition-colors">Works</Link>
            <Link to="/about" className="hover:text-earth-orange transition-colors">About</Link>
            <Link to="/contact" className="hover:text-earth-orange transition-colors">Contact</Link>
          </div>

          {/* Right */}
          <div className="text-sm text-muted-foreground">
            <p>© {currentYear} {site.name}</p>
            <p className="mt-1">{site.role}</p>
          </div>
        </div>
      </div>
      <PixelOtter />
    </footer>
  );
}
