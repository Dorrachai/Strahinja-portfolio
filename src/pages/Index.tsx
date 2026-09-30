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
        <section className="container-wide pt-8 sm:pt-12 md:pt-18 text-center animate-fade-in-up">
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight leading-none uppercase text-foreground flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-6 gap-y-1">
            <span>{site.heroNameLines[0] || "STRAHINJA"}</span>
            <span className="text-earth-orange/60 font-light select-none hidden sm:inline">·</span>
            <span className="text-foreground/90">{site.heroNameLines[1] || "VELICKOVIC"}</span>
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
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-separator bg-card shadow-2xl">
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
        <section className="border-y border-separator py-4 sm:py-5 overflow-hidden relative select-none bg-card/20">
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
        {/* 4. "HELLO —" SPOTLIGHT INTRO CARD                         */}
        {/* ========================================================= */}
        <section className="container-wide">
          <div className="relative rounded-3xl border border-separator bg-gradient-to-br from-card/90 via-card/60 to-secondary/30 p-6 sm:p-10 md:p-14 overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
              {/* Left: Avatar / Audio Icon badge */}
              <div className="md:col-span-3 flex justify-center md:justify-start">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border border-earth-orange/30 bg-background/80 flex items-center justify-center p-2 shadow-inner">
                  <div className="w-full h-full rounded-full bg-card flex flex-col items-center justify-center text-foreground gap-1 border border-border">
                    <Volume2 size={30} className="text-earth-orange" />
                    <span className="text-[9px] uppercase tracking-widest font-mono text-muted-foreground">AUDIO</span>
                  </div>
                </div>
              </div>

              {/* Right: Intro copy & buttons */}
              <div className="md:col-span-9 space-y-6 text-center md:text-left">
                <div>
                  <span className="text-label text-earth-orange mb-2 block font-semibold">Hello —</span>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    Strahinja Velickovic, <span className="font-serif italic font-normal text-muted-foreground">Sound Designer.</span>
                  </h3>
                </div>

                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Based in Stockholm. I design audio for games and interactive media —
                  shaping the textures, transitions and audio systems that pull players in.
                  Curious to hear what you're building? Let's talk.
                </p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-earth-orange text-white font-semibold text-xs uppercase tracking-wider hover:bg-earth-orange-light shadow-md hover:shadow-lg transition-all"
                  >
                    <span>About me</span>
                  </Link>

                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-separator text-foreground font-medium text-xs uppercase tracking-wider hover:bg-secondary hover:border-earth-orange/40 transition-all"
                  >
                    <span>See works</span>
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
              <span className="text-label text-earth-orange font-semibold block mb-2">02 — Selected work</span>
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
              className="group block rounded-2xl overflow-hidden border border-separator bg-card/60 transition-all duration-300 hover:border-earth-orange/50 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
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
              className="group block rounded-2xl overflow-hidden border border-separator bg-card/60 transition-all duration-300 hover:border-earth-orange/50 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
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
              className="group block rounded-2xl overflow-hidden border border-separator bg-card/60 transition-all duration-300 hover:border-earth-orange/50 hover:-translate-y-1.5 shadow-md hover:shadow-xl"
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
      </div>
    </Layout>
  );
};

export default Index;
