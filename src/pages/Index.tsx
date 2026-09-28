import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { ArrowUpRight, Volume2, Sliders, Layers, Gamepad2 } from "lucide-react";

const Index = () => {
  const featuredProject = projects[0]; // Bony Tony: The Revenge

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
      <div className="space-y-24 md:space-y-32 pb-24">
        {/* ========================================================= */}
        {/* 1. TOP NAME DISPLAY                                       */}
        {/* ========================================================= */}
        <section className="container-wide pt-8 md:pt-14 text-center">
          {/* Status pill with animated pulsing dot */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-separator bg-card/60 text-[11px] uppercase tracking-widest text-muted-foreground mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Available for game projects · Stockholm, SE</span>
          </div>

          {/* Massive Display Title */}
          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none uppercase text-foreground animate-fade-in-up">
            <span>{site.heroNameLines[0] || "STRAHINJA"}</span>
            <span className="mx-3 md:mx-6 text-muted-foreground/40 font-light select-none">·</span>
            <span className="text-foreground/90">{site.heroNameLines[1] || "VELICKOVIC"}</span>
          </h1>
        </section>

        {/* ========================================================= */}
        {/* 2. HERO SPLIT SECTION                                     */}
        {/* ========================================================= */}
        <section className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Text & Actions */}
            <div className="lg:col-span-7 space-y-8 animate-fade-in-up">
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-foreground">
                <span className="block">Worldbuilding</span>
                <span className="block text-foreground/80 font-normal italic font-serif">
                  through <span className="text-foreground not-italic font-sans font-bold">sound design</span>
                </span>
                <span className="block">&amp; implementation.</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Sound Designer &amp; Audio Implementer crafting immersive audio worlds,
                visceral gameplay feedback, and adaptive music systems for games and motion.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm tracking-wide uppercase hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>View work</span>
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-separator bg-card/40 text-foreground font-medium text-sm tracking-wide uppercase hover:bg-accent/10 hover:border-foreground/40 transition-all"
                >
                  <span>Get in touch</span>
                </Link>
              </div>
            </div>

            {/* Right: Featured Project Showcase Reel */}
            <div className="lg:col-span-5 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-label">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-foreground"></span>
                    Featured Production · 2026
                  </span>
                  <span className="text-[11px] font-mono text-muted-foreground">{featuredProject.category}</span>
                </div>

                {/* Showcase Card */}
                <Link
                  to={`/work/${featuredProject.id}`}
                  className="group relative block aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-separator bg-secondary shadow-2xl transition-all duration-500 hover:border-foreground/50 hover:-translate-y-1"
                >
                  <img
                    src={featuredProject.coverImage}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

                  {/* Overlay Meta */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                    <div className="space-y-1.5">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-widest bg-foreground/15 backdrop-blur-md border border-foreground/20 text-foreground font-mono">
                        {featuredProject.tags.join(" · ")}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {featuredProject.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1 max-w-sm">
                        {featuredProject.description}
                      </p>
                    </div>

                    <div className="h-10 w-10 rounded-full bg-foreground/10 border border-foreground/20 flex items-center justify-center text-foreground group-hover:bg-foreground group-hover:text-background transition-all shrink-0">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </Link>
              </div>
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
