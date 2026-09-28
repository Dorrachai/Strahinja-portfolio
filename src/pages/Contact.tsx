import { Layout } from "@/components/Layout";
import { Linkedin, Gamepad2, Play } from "lucide-react";

const Contact = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24 min-h-[calc(100vh-200px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-12">
            <div>
              <h1 className="text-display mb-6 animate-fade-in-up">
                Let's make<br />some noise.
              </h1>
              <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Looking for sound design or music for your game? Let's talk about your next project.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <a
                href="https://www.linkedin.com/in/strahinja-velickovic-4a2a77305/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Linkedin size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://eaxcy.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Gamepad2 size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>itch.io — eaxcy</span>
              </a>

              <a
                href="https://eaxcy.itch.io/bony-tony"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-lg hover-highlight group"
              >
                <Play size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span>Play Bony Tony: The Revenge</span>
              </a>
            </div>

            {/* Availability */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-label mb-2">Availability</p>
              <p className="text-lg">Open for new game projects</p>
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img
                src="https://eaxcy.itch.io/bony-tony"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
