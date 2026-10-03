import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getVideoEmbedUrl } from "@/lib/audioEmbed";
import { ContactForm } from "@/components/ContactForm";
import { ArrowUpRight, Sliders, Layers } from "lucide-react";

const Index = () => {
  const featuredProject = projects[0]; // Bony Tony: The Revenge
  const videoEmbedUrl = getVideoEmbedUrl(site.showreelUrl || "");

  const marqueeItems = [
    "Wwise",
    "FMOD",
    "REAPER",
    "Unreal Engine 5",
    "Unity",
    "MetaSounds",
    "Adaptive Music",
    "Foley",
    "Field Recording",
    "Game Audio",
    "Custom Engines",
  ];

  return (
    <Layout showEchelonFooter>
      <div className="space-y-16 md:space-y-24 pb-24">
        {/* ========================================================= */}
        {/* 1. CENTERED TOP NAME DISPLAY                              */}
        {/* ========================================================= */}
        <section className="container-wide pt-8 sm:pt-12 md:pt-18 text-center animate-fade-in-up">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none uppercase flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-6 gap-y-1">
            <span className="text-gradient-ocean">{site.heroNameLines[0] || "STRAHINJA"}</span>
            <span className="text-earth-orange/80 font-light select-none hidden sm:inline">·</span>
            <span className="text-gradient-ocean">{site.heroNameLines[1] || "VELICKOVIC"}</span>
          </h1>
          <p className="mt-3 md:mt-5 text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.25em] text-muted-foreground">
            {site.role || "Game Sound Designer"}
          </p>
        </section>

        {/* ========================================================= */}
        {/* 2. LARGE CENTERED SHOWREEL / VIDEO PLAYER                 */}
        {/* ========================================================= */}
        <section className="container-wide animate-fade-in-up">
          <div className="max-w-5xl lg:max-w-6xl mx-auto space-y-3">
            {/* Reel Header / Meta */}
            <div className="flex items-center justify-between text-label px-1">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-earth-orange animate-pulse"></span>
                <span className="text-foreground font-semibold text-xs uppercase tracking-wider">Showreel · 2026</span>
              </span>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Sound Design &amp; Implementation Reel
              </span>
            </div>

            {/* Centered Large Video Frame (16:9) */}
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-separator/80 bg-card shadow-2xl">
              <iframe
                src={videoEmbedUrl || "https://www.youtube.com/embed/h7Bbli-7d1A"}
                title="Strahinja Velickovic — Sound Design Showreel"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. AUDIO TECH MARQUEE (Optimized 2-track)                 */}
        {/* ========================================================= */}
        <section className="border-y border-separator py-4 sm:py-5 overflow-hidden relative select-none bg-gradient-to-r from-card/70 via-secondary/40 to-card/70 backdrop-blur-sm">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 2 }).map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center gap-8 mx-4">
                {marqueeItems.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-8 font-display text-base sm:text-lg font-semibold tracking-wide text-foreground/80 uppercase">
                    <span>{item}</span>
                    <span className="text-earth-orange/50 text-xs">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. SELECTED WORK / COLLABORATIONS SECTION                 */}
        {/* ========================================================= */}
        <section className="container-wide space-y-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-separator pb-6">
            <div>
              <span className="text-label text-earth-orange font-semibold block mb-2">01 — Selected work</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Recent collaborations.
              </h2>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-foreground hover:text-earth-orange transition-colors self-start sm:self-auto"
            >
              <span>All works</span>
              <ArrowUpRight size={15} className="text-earth-orange" />
            </Link>
          </div>

          {/* 3 Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Bony Tony */}
            <Link
              to={`/work/${featuredProject.id}`}
              className="group block rounded-2xl overflow-hidden card-gradient card-gradient-hover"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-secondary">
                <img
                  src={featuredProject.coverImage}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-earth-orange font-mono font-medium">
                  Game Audio · Custom Engine
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-earth-orange transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  2.5D action-platformer audio built from scratch in a custom-built C++ engine.
                </p>
              </div>
            </Link>

            {/* Card 2: Sound Design & Foley */}
            <Link
              to="/about"
              className="group block rounded-2xl overflow-hidden card-gradient card-gradient-hover"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-secondary flex items-center justify-center p-8">
                <div className="h-20 w-20 rounded-full border border-earth-blue/40 bg-background/90 flex items-center justify-center text-earth-blue group-hover:scale-110 group-hover:border-earth-orange/50 group-hover:text-earth-orange transition-all duration-300 shadow-md">
                  <Sliders size={30} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-earth-blue-light font-mono font-medium">
                  Sound Design · Field Recording
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-earth-orange transition-colors">
                  Foley &amp; SFX Pipeline
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  Custom field recording, tactile impacts, weapon acoustics, and UCS-standardized asset delivery.
                </p>
              </div>
            </Link>

            {/* Card 3: Adaptive Audio & Implementation */}
            <Link
              to="/work?tab=implementation"
              className="group block rounded-2xl overflow-hidden card-gradient card-gradient-hover"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-secondary flex items-center justify-center p-8">
                <div className="h-20 w-20 rounded-full border border-earth-blue/40 bg-background/90 flex items-center justify-center text-earth-blue group-hover:scale-110 group-hover:border-earth-orange/50 group-hover:text-earth-orange transition-all duration-300 shadow-md">
                  <Layers size={30} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-70" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-earth-orange font-mono font-medium">
                  Wwise · FMOD · Middleware
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-earth-orange transition-colors">
                  Interactive Audio Systems
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  RTPC-driven parameters, state switches, spatial attenuation, and dynamic combat mix management.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. "HELLO —" GET IN TOUCH & PROJECT INQUIRY FORM          */}
        {/* ========================================================= */}
        <section className="container-wide">
          <div className="relative rounded-3xl border border-separator/80 bg-gradient-to-br from-card/95 via-card/85 to-secondary/35 p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl">
            {/* Subtle brand ambient accents */}
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#519CAB]/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#FFC64F]/10 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-start">
              {/* Left Column: Hello intro, bio, and availability */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-label text-earth-orange mb-2 block font-semibold">02 — Say hello</span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    Let's make <br />
                    <span className="font-serif italic font-normal text-muted-foreground">some noise.</span>
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  I design audio for games and interactive media —
                  shaping the textures, transitions and audio systems that pull players in.
                  Curious to hear what you're building? Let's talk.
                </p>

                <div className="pt-4 border-t border-separator/80 flex items-center gap-5">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-earth-orange hover:underline"
                  >
                    <span>About me</span>
                    <ArrowUpRight size={13} />
                  </Link>

                  {site.contactLinks[0] && (
                    <a
                      href={site.contactLinks[0].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-muted-foreground hover:text-earth-orange transition-colors"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
