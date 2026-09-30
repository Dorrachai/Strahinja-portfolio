import { Layout } from "@/components/Layout";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Linkedin, Gamepad2, Play, Mail, Globe } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  linkedin: <Linkedin size={20} />,
  gamepad: <Gamepad2 size={20} />,
  play: <Play size={20} />,
  mail: <Mail size={20} />,
  globe: <Globe size={20} />,
};

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
                {site.contactIntro}
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              {site.contactLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-base sm:text-lg text-foreground hover:text-earth-orange transition-colors group"
                >
                  <span className="p-3 rounded-xl border border-separator bg-card text-muted-foreground group-hover:border-earth-orange/50 group-hover:text-earth-orange transition-all duration-200 shadow-sm">
                    {iconMap[link.icon] ?? <Globe size={20} />}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <p className="text-label text-earth-orange font-semibold mb-2">Availability</p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-base sm:text-lg font-medium">{site.availability}</p>
              </div>
            </div>
          </div>

          {/* Image — automatically uses the newest project's cover */}
          <div className="hidden lg:block">
            <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden border border-separator shadow-2xl">
              <img
                src={projects[0].coverImage}
                alt={projects[0].title}
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
