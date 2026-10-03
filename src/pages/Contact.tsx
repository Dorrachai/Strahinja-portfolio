import { Layout } from "@/components/Layout";
import { site } from "@/data/site";
import { ContactForm } from "@/components/ContactForm";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Content & Direct Links */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h1 className="text-display mb-6 animate-fade-in-up">
                Let's make<br />some noise.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {site.contactIntro}
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Direct Channels
              </p>
              {site.contactLinks.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-base sm:text-lg text-foreground hover:text-earth-orange transition-colors group"
                >
                  <span className="p-3 rounded-xl border border-separator/80 bg-gradient-to-br from-card/90 to-secondary/35 text-muted-foreground group-hover:border-earth-orange/50 group-hover:text-earth-orange transition-all duration-200 shadow-sm">
                    {iconMap[link.icon] ?? <Globe size={20} />}
                  </span>
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Interactive Form */}
          <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
