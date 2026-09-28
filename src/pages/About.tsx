import { Layout } from "@/components/Layout";
import { site } from "@/data/site";

const About = () => {
  return (
    <Layout showEchelonFooter>
      <section className="container-wide py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          {/* Content */}
          <div>
            <h1 className="text-display mb-8 animate-fade-in-up">About</h1>

            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {site.about.map((paragraph, index) => (
                <p key={index}>{highlightName(paragraph)}</p>
              ))}
            </div>
          </div>

          {/* Selected Collaborations */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-label mb-6">Selected Collaborations</h2>
            <ul className="space-y-3">
              {site.collaborations.map((name) => (
                <li key={name} className="text-lg">
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-label mb-6">Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {site.expertise.map((area) => (
                <span
                  key={area}
                  className="text-sm border border-border px-4 py-2"
                >
                  {area}
                </span>
              ))}
            </div>
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
