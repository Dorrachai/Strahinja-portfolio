import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { site } from "@/data/site";
import { MapPin } from "lucide-react";

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-16">
          {/* Header & Bio */}
          <div>
            <h1 className="text-display mb-4 animate-fade-in-up">About</h1>

            {/* Location Pill */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
              <MapPin size={14} className="text-earth-orange" />
              <span>{site.location}</span>
            </div>

            <div className="space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {site.about.map((paragraph, index) => (
                <p key={index}>{highlightName(paragraph)}</p>
              ))}
            </div>

            {/* Philosophy Callout */}
            <div className="border-l-2 border-earth-orange pl-6 py-4 my-8 italic text-base sm:text-lg text-foreground/95 bg-card/50 rounded-r-xl animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              "{site.philosophy}"
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-label text-earth-orange font-semibold mb-6">Technical Toolkit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {site.toolkit.map((group) => (
                <div key={group.category} className="border border-separator p-5 bg-card/60 rounded-xl hover:border-earth-orange/40 transition-colors">
                  <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="text-xs border border-border/80 px-3 py-1.5 rounded text-foreground/90 bg-background/80 hover:border-earth-orange/40 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Disciplines */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <h2 className="text-label text-earth-orange font-semibold mb-6">Core Disciplines</h2>
            <div className="space-y-5">
              {site.disciplines.map((d) => (
                <div key={d.title} className="border-b border-separator pb-5">
                  <h3 className="text-base font-semibold text-foreground mb-1.5">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Collaborations */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-label text-earth-orange font-semibold mb-6">Selected Collaborations</h2>
            <ul className="space-y-3">
              {site.collaborations.map((name) => (
                <li key={name} className="text-base sm:text-lg text-foreground/90 flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-earth-orange"></span>
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Footer */}
          <div className="pt-8 border-t border-separator flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Status</p>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <p className="text-base font-medium text-foreground">{site.availability}</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-earth-orange text-white font-semibold text-xs uppercase tracking-wider hover:bg-earth-orange-light shadow-md hover:shadow-lg transition-all"
            >
              Get in touch &rarr;
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Renders the owner's name in full contrast inside a paragraph.
function highlightName(text: string) {
  const parts = text.split(site.name);
  if (parts.length === 1) return text;
  return parts.map((part, index) => (
    <span key={index}>
      {part}
      {index < parts.length - 1 && (
        <span className="text-foreground">{site.name}</span>
      )}
    </span>
  ));
}

export default About;
