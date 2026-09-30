import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { getVideoEmbedUrl } from "@/lib/audioEmbed";
import { ArrowUpRight, Volume2, Sliders, Layers, Play } from "lucide-react";

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
        <section className="container-wide pt-10 md:pt-18 text-center animate-fade-in-up">
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none uppercase text-foreground">
            <span>{site.heroNameLines[0] || "STRAHINJA"}</span>
            <span className="mx-3 md:mx-6 text-muted-foreground/40 font-light select-none">·</span>
            <span className="text-foreground/90">{site.heroNameLines[1] || "VELICKOVIC"}</span>
          </h1>
          <p className="mt-4 md:mt-5 text-xs sm:text-sm md:text-base font-mono uppercase tracking-[0.25em] text-muted-foreground">
            {site.role || "Game Sound Designer"}
          </p>
        </section>

        {/* ========================================================= */}
        {/* 2. LARGE CENTERED SHOWREEL / VIDEO PLAYER                 */}
        {/* ========================================================= */}
        <section className="container-wide animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Reel Header / Meta */}
            <div className="flex items-center justify-between text-label px-1">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Showreel · 2026
              </span>
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline">
                Sound Design &amp; Implementation
              </span>
            </div>

            {/* Video Player Frame */}
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-separator bg-card/70 shadow-2xl backdrop-blur-md group">
              {videoEmbedUrl ? (
                <iframe
                  src={videoEmbedUrl}
                  title="Strahinja Velickovic — Showreel"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <Link
                  to={`/work/${featuredProject.id}`}
                  className="relative block w-full h-full overflow-hidden"
                >
                  {/* Background Image */}
                  <img
                    src={featuredProject.coverImage}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-background/20" />

                  {/* Centered Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <span className="absolute -inset-4 rounded-full bg-foreground/10 animate-ping opacity-60"></span>
                      <div className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-foreground text-background flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-accent-foreground">
                        <Play size={32} className="fill-current ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Overlay Meta */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-widest bg-foreground/20 backdrop-blur-md border border-foreground/30 text-foreground font-mono">
                          Featured Production
                        </span>
                        <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
                          {featuredProject.tags.join(" · ")}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {featuredProject.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1 max-w-xl">
                        {featuredProject.description}
                      </p>
                    </div>

                    <div className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full border border-foreground/20 bg-background/60 backdrop-blur-md text-foreground font-medium text-xs uppercase tracking-wider group-hover:bg-foreground group-hover:text-background transition-all shrink-0">
                      <span>Watch Reel</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. INFINITE AUDIO TECH MARQUEE                            */}
        {/* ========================================================= */}
        <section className="border-y border-separator py-6 overflow-hidden relative select-none bg-card/20">
          <div className="flex whitespace-nowrap animate-marquee">
            {Array.from({ length: 4 }).map((_, loopIdx) => (
              <div key={loopIdx} className="flex items-center gap-8 mx-4">
                {marqueeItems.map((item, idx) => (
                  <span key={idx} className="flex items-center gap-8 font-display text-lg sm:text-xl font-semibold tracking-wide text-foreground/80 uppercase">
                    <span>{item}</span>
                    <span className="text-muted-foreground/30 text-xs">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. "HELLO —" SPOTLIGHT INTRO CARD                         */}
        {/* ========================================================= */}
        <section className="container-wide">
          <div className="relative rounded-3xl border border-separator bg-gradient-to-br from-card/80 to-secondary/40 p-8 sm:p-12 md:p-16 overflow-hidden shadow-xl">
            {/* Ambient background glow */}
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              {/* Left: Avatar / Audio Icon badge */}
              <div className="md:col-span-3 flex justify-start md:justify-center">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-separator bg-background flex items-center justify-center p-2 shadow-inner">
                  {/* Subtle pulsing ring */}
                  <span className="absolute inset-0 rounded-full border border-foreground/30 animate-ping opacity-25"></span>
                  <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center text-foreground gap-1 border border-border">
                    <Volume2 size={32} className="text-foreground/80" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-muted-foreground">AUDIO</span>
                  </div>
                </div>
              </div>

              {/* Right: Intro copy & buttons */}
              <div className="md:col-span-9 space-y-6">
                <div>
                  <span className="text-label text-muted-foreground mb-2 block">Hello —</span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    Strahinja Velickovic, <span className="font-serif italic font-normal text-muted-foreground">Sound Designer.</span>
                  </h3>
                </div>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                  Based in Stockholm. I design audio for games and interactive media —
                  shaping the textures, transitions and audio systems that pull players in.
                  Curious to hear what you're building? Let's talk.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-foreground text-background font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-all"
                  >
                    <span>About me</span>
                  </Link>

                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-separator text-foreground font-medium text-xs uppercase tracking-wider hover:bg-accent/10 hover:border-foreground/40 transition-all"
                  >
                    <span>See projects</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. SELECTED WORK / COLLABORATIONS SECTION                 */}
        {/* ========================================================= */}
        <section className="container-wide space-y-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-separator pb-6">
            <div>
              <span className="text-label text-muted-foreground block mb-2">02 — Selected work</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                Recent collaborations.
              </h2>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent transition-colors self-start sm:self-auto"
            >
              <span>All projects</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* 3 Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Bony Tony */}
            <Link
              to={`/work/${featuredProject.id}`}
              className="group block rounded-2xl overflow-hidden border border-separator bg-card/50 transition-all duration-300 hover:border-foreground/40 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-secondary">
                <img
                  src={featuredProject.coverImage}
                  alt={featuredProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                  Game Audio · Custom Engine
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
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
              className="group block rounded-2xl overflow-hidden border border-separator bg-card/50 transition-all duration-300 hover:border-foreground/40 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-secondary flex items-center justify-center p-8">
                <div className="h-20 w-20 rounded-full border border-separator bg-background/80 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Sliders size={32} className="text-foreground/80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                  Sound Design · Field Recording
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  Foley &amp; SFX Pipeline
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  Custom field recording, tactile impacts, weapon acoustics, and UCS-standardized asset delivery.
                </p>
              </div>
            </Link>

            {/* Card 3: Adaptive Audio & Implementation */}
            <Link
              to="/about"
              className="group block rounded-2xl overflow-hidden border border-separator bg-card/50 transition-all duration-300 hover:border-foreground/40 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative bg-secondary flex items-center justify-center p-8">
                <div className="h-20 w-20 rounded-full border border-separator bg-background/80 flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                  <Layers size={32} className="text-foreground/80" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                  Wwise · FMOD · Middleware
                </span>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  Interactive Audio Systems
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  RTPC-driven parameters, state switches, spatial attenuation, and dynamic combat mix management.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
