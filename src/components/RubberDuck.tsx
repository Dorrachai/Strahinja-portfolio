import React, { useState } from "react";

const DUCK_PHRASES = [
  "quack! debugging audio loops... 🦆",
  "♪ 24-bit / 96kHz rubber quack ♪",
  "squeak! rubber duck approved mix!",
  "quack! dynamic spatial audio dive 🌊",
  "♪ fmod & wwise certified duck ♪",
  "squeak! pristine foley in the bath 🛁",
  "quack! RTPC parameter calibrated ♪",
];

export function RubberDuck() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const playQuackSound = () => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      const now = ctx.currentTime;
      // Classic rubber duck squeak pitch envelope
      osc.frequency.setValueAtTime(340, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.04);
      osc.frequency.exponentialRampToValueAtTime(280, now + 0.16);

      gain.gain.setValueAtTime(0.07, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.18);
    } catch {
      // Browser audio restriction or muted
    }
  };

  const handleDuckClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInteracting(true);
    setPhraseIndex((prev) => (prev + 1) % DUCK_PHRASES.length);
    playQuackSound();
  };

  return (
    <div
      className="relative w-full h-28 sm:h-32 overflow-hidden bg-gradient-to-r from-secondary/50 via-earth-blue/20 to-secondary/50 border-y border-separator/80 select-none cursor-pointer group"
      onClick={() => {
        setIsInteracting((prev) => !prev);
        setPhraseIndex((prev) => (prev + 1) % DUCK_PHRASES.length);
        playQuackSound();
      }}
      title="Click the rubber duck to hear it squeak!"
      aria-label="A pixel art rubber duck floating peacefully in the water"
    >
      {/* Background Pixel Water Stream & Wave Highlights */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* Animated wave layer */}
        <div
          className="absolute inset-0 flex items-center justify-around animate-pulse"
          style={{ animationDuration: "4s" }}
        >
          <span className="w-16 h-0.5 bg-[#519CAB]/70 rounded"></span>
          <span className="w-28 h-0.5 bg-[#C3E7F1]/50 rounded"></span>
          <span className="w-14 h-0.5 bg-[#519CAB]/60 rounded"></span>
          <span className="w-24 h-0.5 bg-[#519CAB]/70 rounded"></span>
          <span className="w-16 h-0.5 bg-[#C3E7F1]/40 rounded"></span>
          <span className="w-32 h-0.5 bg-[#519CAB]/60 rounded"></span>
        </div>
        {/* Water surface glint */}
        <div className="absolute bottom-4 sm:bottom-5 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#519CAB]/50 to-transparent"></div>
      </div>

      {/* Floating Rubber Duck Container (positioned down with ample headroom for speech bubble) */}
      <div className="absolute bottom-3 sm:bottom-4 w-full pointer-events-none">
        <div className="animate-otter-swim flex items-center will-change-transform">
          {/* Bobbing and tilted duck wrapper */}
          <div
            className="relative animate-otter-bob pointer-events-auto cursor-pointer"
            onClick={handleDuckClick}
          >
            {/* Thought / Squeak bubble on interaction or hover */}
            <div
              className={`absolute -top-7 sm:-top-8 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded text-[11px] font-mono tracking-wide bg-[#20373B] text-[#FFC64F] border border-[#FFC64F]/60 shadow-xl whitespace-nowrap transition-all duration-300 z-20 ${
                isInteracting
                  ? "opacity-100 scale-100 -translate-y-1"
                  : "opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              {DUCK_PHRASES[phraseIndex]}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-[#20373B] border-r border-b border-[#FFC64F]/60"></div>
            </div>

            {/* Ripple effects behind the floating duck */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-1.5 flex items-center gap-1.5 opacity-75">
              <span
                className="w-2 h-1 rounded-full bg-[#C3E7F1] animate-ping"
                style={{ animationDuration: "2s" }}
              ></span>
              <span className="w-4 h-1.5 rounded-full bg-[#519CAB]/85"></span>
              <span className="w-6 h-2 rounded-full bg-[#519CAB]/50"></span>
              <span className="w-3 h-1 rounded-full bg-[#C3E7F1]/70"></span>
            </div>

            {/* Pixel Art Rubber Duck SVG (Compact, cute sizing) */}
            <svg
              width="80"
              height="55"
              viewBox="0 0 32 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-[44px] sm:w-20 sm:h-[55px] drop-shadow-md select-none transform transition-transform group-hover:scale-110"
              style={{
                shapeRendering: "crispEdges",
                imageRendering: "pixelated",
              }}
            >
              {/* --- Tail (Left) --- */}
              <rect x="3" y="10" width="2" height="2" fill="#FFE89E" />
              <rect x="4" y="9" width="3" height="3" fill="#FFC64F" />
              <rect x="6" y="8" width="3" height="4" fill="#FFC64F" />
              <rect x="3" y="12" width="4" height="3" fill="#E5A827" />

              {/* --- Back & Sun Highlight --- */}
              <rect x="9" y="9" width="6" height="2" fill="#FFE89E" />
              <rect x="7" y="10" width="10" height="3" fill="#FFD54F" />

              {/* --- Main Duck Body --- */}
              <rect x="5" y="11" width="16" height="6" fill="#FFC64F" />
              <rect x="6" y="15" width="15" height="3" fill="#E5A827" />

              {/* --- Cute Wing on Side --- */}
              <rect x="9" y="11" width="5" height="2" fill="#FFD54F" />
              <rect x="8" y="12" width="7" height="3" fill="#E5A827" />
              <rect x="8" y="14" width="6" height="2" fill="#C68A14" />

              {/* --- Chest / Breast (Curving forward) --- */}
              <rect x="19" y="11" width="3" height="4" fill="#FFD54F" />
              <rect x="20" y="12" width="2" height="4" fill="#FFC64F" />

              {/* --- Neck --- */}
              <rect x="16" y="7" width="5" height="4" fill="#FFC64F" />
              <rect x="16" y="9" width="5" height="2" fill="#E5A827" />

              {/* --- Rounded Head --- */}
              <rect x="16" y="2" width="6" height="2" fill="#FFE89E" />
              <rect x="14" y="3" width="9" height="5" fill="#FFD54F" />
              <rect x="14" y="4" width="10" height="4" fill="#FFC64F" />
              <rect x="13" y="4" width="2" height="3" fill="#FFC64F" />

              {/* --- Cute Cheek Blush --- */}
              <rect x="17" y="6" width="2" height="1" fill="#FF8C38" opacity="0.6" />

              {/* --- Shiny Cartoon Eye --- */}
              <rect x="19" y="4" width="3" height="3" fill="#142426" />
              <rect x="19" y="4" width="1" height="1" fill="#FFFFFF" />
              <rect x="20" y="5" width="1" height="1" fill="#C3E7F1" />

              {/* --- Orange Rubber Beak --- */}
              <rect x="23" y="5" width="5" height="2" fill="#FF7A00" />
              <rect x="24" y="5" width="3" height="1" fill="#FFA24A" />
              <rect x="27" y="6" width="2" height="1" fill="#FF5500" />
              {/* Mouth crease */}
              <rect x="24" y="7" width="4" height="1" fill="#9E2A00" />
              {/* Lower bill */}
              <rect x="23" y="7" width="4" height="2" fill="#E54B00" />
              <rect x="24" y="8" width="3" height="1" fill="#B83200" />
              {/* Tiny nostril dot */}
              <rect x="24" y="5" width="1" height="1" fill="#802000" />

              {/* --- Waterline Ripples & Foam --- */}
              <rect x="2" y="16" width="4" height="1" fill="#C3E7F1" />
              <rect x="5" y="17" width="16" height="1" fill="#519CAB" opacity="0.9" />
              <rect x="21" y="17" width="5" height="1" fill="#C3E7F1" />
              <rect x="0" y="17" width="2" height="1" fill="#C3E7F1" />
              <rect x="26" y="18" width="3" height="1" fill="#C3E7F1" />
            </svg>

            {/* Front ripples spreading forward */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-1.5 flex items-center gap-1 opacity-75">
              <span className="w-2.5 h-0.5 rounded bg-[#519CAB]"></span>
              <span className="w-1.5 h-0.5 rounded bg-[#C3E7F1]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Label & Hint */}
      <div className="absolute bottom-1 right-4 sm:right-8 text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 pointer-events-none">
        Bath Stream · Tap Duck
      </div>
    </div>
  );
}

// Re-export for backward compatibility
export const PixelOtter = RubberDuck;
