import React, { useState } from "react";
import { site } from "@/data/site";
import { Sparkles, Sliders, Layers } from "lucide-react";

interface ToolkitGroup {
  id: string;
  category: string;
  shortLabel: string;
  tagline: string;
  description: string;
  icon: string;
  items: string[];
}

// Custom crisp vector icons tailored to each software and hardware category
function ToolkitGlyph({ icon, className = "w-5 h-5" }: { icon: string; className?: string }) {
  switch (icon) {
    case "middleware":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <circle cx="4" cy="12" r="2" fill="currentColor" fillOpacity="0.2" />
          <circle cx="12" cy="10" r="2" fill="currentColor" fillOpacity="0.2" />
          <circle cx="20" cy="14" r="2" fill="currentColor" fillOpacity="0.2" />
        </svg>
      );
    case "engine":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          {/* Gamepad / Game Engine node */}
          <rect x="2" y="6" width="20" height="12" rx="4" />
          <line x1="6" y1="12" x2="10" y2="12" />
          <line x1="8" y1="10" x2="8" y2="14" />
          <circle cx="15" cy="13" r="1" fill="currentColor" />
          <circle cx="18" cy="11" r="1" fill="currentColor" />
        </svg>
      );
    case "daw":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          {/* Multi-track DAW arrangement */}
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <rect x="7" y="6" width="5" height="1.5" rx="0.5" fill="currentColor" />
          <rect x="14" y="6" width="4" height="1.5" rx="0.5" fill="currentColor" />
          <rect x="5" y="11" width="7" height="1.5" rx="0.5" fill="currentColor" />
          <rect x="10" y="17" width="8" height="1.5" rx="0.5" fill="currentColor" />
        </svg>
      );
    case "dsp":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
          {/* Parametric EQ curve / frequency response */}
          <path d="M3 17c3 0 4-10 7-10s4 8 7 8 3-4 4-4" />
          <line x1="3" y1="21" x2="21" y2="21" />
          <circle cx="10" cy="7" r="1.5" fill="currentColor" />
          <circle cx="17" cy="15" r="1.5" fill="currentColor" />
        </svg>
      );
    case "hardware":
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

export function ToolkitSection() {
  const toolkit: ToolkitGroup[] = (site.toolkit as ToolkitGroup[]) || [];
  const [selectedId, setSelectedId] = useState<string>(
    toolkit[0]?.id || "middleware"
  );

  const activeGroup =
    toolkit.find((item) => item.id === selectedId) || toolkit[0];

  if (!toolkit.length) return null;

  return (
    <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.18s" }}>
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <h2 className="text-label text-earth-orange font-semibold mb-2">
            Technical Toolkit
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
            The middleware engines, game development software, DAWs, and DSP tools I rely on daily to implement responsive game audio.
          </p>
        </div>
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
          <Sparkles size={12} className="text-earth-orange" />
          <span>Click or hover to explore</span>
        </div>
      </div>

      {/* Toolkit Categories Grid Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {toolkit.map((group) => {
          const isSelected = group.id === activeGroup?.id;
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => setSelectedId(group.id)}
              onMouseEnter={() => setSelectedId(group.id)}
              onFocus={() => setSelectedId(group.id)}
              className={`group relative p-4 rounded-xl text-left border transition-all duration-200 flex flex-col justify-between h-full ${
                isSelected
                  ? "border-earth-orange bg-secondary/90 shadow-md ring-1 ring-earth-orange/40"
                  : "border-separator/80 bg-card/60 hover:border-earth-orange/50 hover:bg-secondary/40 text-muted-foreground"
              }`}
              aria-pressed={isSelected}
            >
              {/* Icon & Active indicator */}
              <div className="flex items-center justify-between w-full mb-3">
                <span
                  className={`p-2 rounded-lg border transition-colors ${
                    isSelected
                      ? "border-earth-orange/40 bg-earth-orange/15 text-earth-orange"
                      : "border-separator/60 bg-background/80 text-muted-foreground group-hover:text-foreground group-hover:border-earth-orange/30"
                  }`}
                >
                  <ToolkitGlyph icon={group.icon} className="w-4 h-4" />
                </span>

                {/* Active indicator dot */}
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-earth-orange animate-pulse" />
                )}
              </div>

              {/* Title & Preview subtitle */}
              <div>
                <h4
                  className={`text-sm font-semibold transition-colors line-clamp-1 ${
                    isSelected ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                  }`}
                >
                  {group.category}
                </h4>
                <p className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground/75 mt-0.5 line-clamp-1">
                  {group.items.slice(0, 2).map((item) => item.split(" ")[0]).join(" · ")}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Category Detail Spotlight Card */}
      {activeGroup && (
        <div
          key={activeGroup.id}
          className="relative rounded-2xl border border-earth-orange/35 bg-gradient-to-br from-card/95 via-secondary/40 to-background/90 p-6 sm:p-8 shadow-xl overflow-hidden animate-fade-in"
        >
          {/* Subtle brand ambient accents */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-earth-orange/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#519CAB]/5 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-5">
            {/* Top Bar: Icon, Category Name, Tagline & Pill badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-separator/70 pb-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-earth-orange/15 border border-earth-orange/40 flex items-center justify-center text-earth-orange shadow-sm flex-shrink-0">
                  <ToolkitGlyph icon={activeGroup.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    {activeGroup.category}
                  </h3>
                  <p className="text-xs sm:text-sm font-serif italic text-earth-orange mt-0.5">
                    {activeGroup.tagline}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="text-[11px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-earth-blue/40 bg-earth-blue/10 text-foreground/90">
                  {activeGroup.items.length} Core Tools
                </span>
              </div>
            </div>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-sans">
              "{activeGroup.description}"
            </p>

            {/* Tool Chips Pill List */}
            <div className="space-y-2 pt-1">
              <span className="text-[11px] uppercase font-mono tracking-widest text-muted-foreground/80 block">
                Primary Software &amp; Frameworks
              </span>
              <div className="flex flex-wrap gap-2.5">
                {activeGroup.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono font-medium px-3.5 py-1.5 rounded-lg border border-separator/80 bg-background/85 text-foreground hover:border-earth-orange/40 hover:bg-secondary/40 transition-all shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Decorative Visualizer & Pipeline Note */}
            <div className="pt-3 border-t border-separator/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
              <div className="flex items-center gap-2">
                <Sliders size={13} className="text-earth-orange" />
                <span>Production-ready pipeline &amp; UCS standardized</span>
              </div>

              {/* Decorative Audio Frequency Bar graphic */}
              <div className="flex items-end gap-1 h-3.5">
                <span className="w-1 bg-earth-orange/80 rounded-full h-2" />
                <span className="w-1 bg-[#519CAB]/80 rounded-full h-3.5" />
                <span className="w-1 bg-earth-orange/80 rounded-full h-1.5" />
                <span className="w-1 bg-[#519CAB]/80 rounded-full h-3" />
                <span className="w-1 bg-earth-orange/80 rounded-full h-3.5" />
                <span className="w-1 bg-[#519CAB]/80 rounded-full h-2" />
                <span className="w-1 bg-earth-orange/80 rounded-full h-2.5" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
