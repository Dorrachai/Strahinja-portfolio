import React, { useState } from "react";
import { site } from "@/data/site";
import { Sparkles, Volume2 } from "lucide-react";

interface Instrument {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  icon: string;
}

// Custom crisp vector icons tailored to each instrument
function InstrumentGlyph({ icon, className = "w-5 h-5" }: { icon: string; className?: string }) {
  switch (icon) {
    case "trombone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          {/* Flare & bell */}
          <path d="M19 4c1.6 0 3 1.3 3 3s-1.4 3-3 3" />
          <path d="M19 4l-4.5 3v1l4.5 3" />
          {/* Main tuning loop */}
          <path d="M14.5 7.5H4a1.5 1.5 0 0 0-1.5 1.5v0A1.5 1.5 0 0 0 4 10.5h10.5" />
          {/* Slide tubing loop */}
          <path d="M5.5 13.5h10.5a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2z" />
          {/* Braces */}
          <path d="M8.5 7.5v3" />
          <path d="M11 13.5v4" />
        </svg>
      );
    case "synth":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="6" y1="8.5" x2="6" y2="11.5" />
          <line x1="10" y1="8.5" x2="10" y2="11.5" />
          <line x1="14" y1="8.5" x2="14" y2="11.5" />
          <line x1="18" y1="8.5" x2="18" y2="11.5" />
          <line x1="2" y1="14" x2="22" y2="14" />
          <circle cx="6" cy="16.5" r="0.75" fill="currentColor" />
          <circle cx="10" cy="16.5" r="0.75" fill="currentColor" />
          <circle cx="14" cy="16.5" r="0.75" fill="currentColor" />
          <circle cx="18" cy="16.5" r="0.75" fill="currentColor" />
        </svg>
      );
    case "guitar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2a3 3 0 0 0-3 3c0 .8.3 1.5.8 2.1l-.8.9A5 5 0 0 0 7 11.5a5 5 0 0 0 2.5 4.3A7 7 0 0 0 6 20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 7 7 0 0 0-3.5-4.2A5 5 0 0 0 17 11.5a5 5 0 0 0-1-3.5l-.8-.9c.5-.6.8-1.3.8-2.1a3 3 0 0 0-3-3z" />
          <circle cx="12" cy="14" r="1.5" />
        </svg>
      );
    case "piano":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="7.5" y1="4" x2="7.5" y2="12" />
          <line x1="12" y1="4" x2="12" y2="12" />
          <line x1="16.5" y1="4" x2="16.5" y2="12" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="9.5" y1="12" x2="9.5" y2="20" />
          <line x1="14.5" y1="12" x2="14.5" y2="20" />
        </svg>
      );
    case "percussion":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <ellipse cx="12" cy="9" rx="8" ry="4" />
          <path d="M4 9v6c0 2.2 3.6 4 8 4s8-1.8 8-4V9" />
          <path d="M6 3.5l2.5 3.5" />
          <path d="M18 3.5l-2.5 3.5" />
        </svg>
      );
    case "mic":
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="8" y1="22" x2="16" y2="22" />
        </svg>
      );
  }
}

export function InstrumentsSection() {
  const instruments: Instrument[] = site.instruments || [];
  const [selectedId, setSelectedId] = useState<string>(
    instruments[0]?.id || "trombone"
  );

  const activeInstrument =
    instruments.find((item) => item.id === selectedId) || instruments[0];

  if (!instruments.length) return null;

  return (
    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="text-label text-earth-orange font-semibold mb-2">
            Instruments &amp; Sound Sources
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            The acoustic instruments, synthesizers, and kinetic Foley rigs I play and record to build organic, living audio worlds.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
          <Sparkles size={12} className="text-earth-orange" />
          <span>Click or hover to explore</span>
        </div>
      </div>

      {/* Instruments Grid Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {instruments.map((inst) => {
          const isSelected = inst.id === activeInstrument?.id;
          return (
            <button
              key={inst.id}
              type="button"
              onClick={() => setSelectedId(inst.id)}
              onMouseEnter={() => setSelectedId(inst.id)}
              onFocus={() => setSelectedId(inst.id)}
              className={`group relative p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between h-full ${
                isSelected
                  ? "border-earth-orange bg-secondary/90 shadow-md ring-1 ring-earth-orange/40"
                  : "border-separator/80 bg-card/60 hover:border-earth-orange/50 hover:bg-secondary/40 text-muted-foreground"
              }`}
              aria-pressed={isSelected}
            >
              {/* Icon & Category indicator */}
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`p-2 rounded-lg border transition-colors ${
                    isSelected
                      ? "border-earth-orange/40 bg-earth-orange/15 text-earth-orange"
                      : "border-separator/60 bg-background/80 text-muted-foreground group-hover:text-foreground group-hover:border-earth-orange/30"
                  }`}
                >
                  <InstrumentGlyph icon={inst.icon} className="w-4 h-4" />
                </span>

                {/* Active indicator dot */}
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-earth-orange animate-pulse" />
                )}
              </div>

              {/* Title & category */}
              <div>
                <h4
                  className={`text-sm font-semibold transition-colors line-clamp-1 ${
                    isSelected ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                  }`}
                >
                  {inst.name}
                </h4>
                <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground/75 mt-0.5 line-clamp-1">
                  {inst.category.split("&")[0].trim()}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Instrument Detail Spotlight Card */}
      {activeInstrument && (
        <div
          key={activeInstrument.id}
          className="relative rounded-2xl border border-earth-orange/35 bg-gradient-to-br from-card/95 via-secondary/40 to-background/90 p-6 sm:p-8 shadow-xl overflow-hidden animate-fade-in"
        >
          {/* Subtle brand ambient accents */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-earth-orange/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#519CAB]/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            {/* Top Bar: Icon, Name, Category badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-separator/70 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-earth-orange/15 border border-earth-orange/40 flex items-center justify-center text-earth-orange shadow-sm flex-shrink-0">
                  <InstrumentGlyph icon={activeInstrument.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    {activeInstrument.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic text-earth-orange mt-0.5">
                    {activeInstrument.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-earth-blue/40 bg-earth-blue/10 text-foreground/90">
                  {activeInstrument.category}
                </span>
              </div>
            </div>

            {/* First-person Description */}
            <div className="pt-2">
              <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-sans">
                "{activeInstrument.description}"
              </p>
            </div>

            {/* Decorative Visualizer & Sound Note */}
            <div className="pt-3 border-t border-separator/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <Volume2 size={13} className="text-earth-orange" />
                <span>Recorded &amp; integrated into game audio stems</span>
              </div>

              {/* Decorative Audio Frequency Bar graphic */}
              <div className="flex items-end gap-1 h-3.5">
                <span className="w-1 bg-earth-orange/80 rounded-full h-3" />
                <span className="w-1 bg-[#519CAB]/80 rounded-full h-2" />
                <span className="w-1 bg-earth-orange/80 rounded-full h-3.5" />
                <span className="w-1 bg-[#519CAB]/80 rounded-full h-1.5" />
                <span className="w-1 bg-earth-orange/80 rounded-full h-2.5" />
                <span className="w-1 bg-[#519CAB]/80 rounded-full h-3" />
                <span className="w-1 bg-earth-orange/80 rounded-full h-1" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
