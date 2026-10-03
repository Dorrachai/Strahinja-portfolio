import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { site } from "@/data/site";
import aboutPortrait from "@/assets/about-portrait.jpg";

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-4xl space-y-16">
          {/* Header & Bio */}
          <div>
            <h1 className="text-display mb-8 animate-fade-in-up">About</h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start mb-8">
              {/* Left Side: Tagline & Bio Text */}
              <div className="md:col-span-7 lg:col-span-7 space-y-6">
                {/* Tagline Statement */}
                <div className="p-5 sm:p-6 rounded-2xl card-gradient animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
                  <p className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
                    Technical, precise, powerful.
                  </p>
                  <p className="text-earth-orange text-sm sm:text-base font-medium mt-1 font-serif italic">
                    Expand visuals through implemented sound design.
                  </p>
                </div>

                <div className="space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  {site.about.map((paragraph, index) => (
                    <p key={index}>{highlightName(paragraph)}</p>
                  ))}
                </div>
              </div>

              {/* Right Side: Portrait Photo */}
              <div className="md:col-span-5 lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                <div className="relative max-w-sm mx-auto md:max-w-none rounded-2xl overflow-hidden border border-separator/80 bg-gradient-to-b from-card to-secondary/40 shadow-xl aspect-[4/5] group">
                  <img
                    src={aboutPortrait}
                    alt={site.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-60 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-2 rounded-xl bg-background/85 backdrop-blur-md border border-separator/80 text-[11px] font-mono text-muted-foreground flex items-center justify-between shadow-sm">
                    <span className="text-foreground font-semibold tracking-wide">{site.name}</span>
                    <span className="text-earth-orange font-medium">{site.role}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy Callout */}
            <div className="border-l-2 border-earth-orange pl-6 py-4 my-8 italic text-base sm:text-lg text-foreground/95 bg-gradient-to-r from-card/90 via-secondary/35 to-transparent rounded-r-xl animate-fade-in-up shadow-sm" style={{ animationDelay: "0.15s" }}>
              "{site.philosophy}"
            </div>
          </div>

          {/* Technical Toolkit */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-label text-earth-orange font-semibold mb-6">Technical Toolkit</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {site.toolkit.map((group) => (
                <div key={group.category} className="card-gradient p-5 rounded-xl hover:border-earth-orange/40 hover:shadow-lg transition-all">
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
            <p className="text-sm text-muted-foreground font-mono">
              Sound Design &amp; Interactive Systems
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-wider btn-gradient-amber"
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
