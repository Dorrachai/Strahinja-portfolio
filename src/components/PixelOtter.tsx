import React, { useState } from "react";

const OTTER_PHRASES = [
  "♪ otterly good audio ♪",
  "♪ dynamic in-engine soundscapes ♪",
  "♪ pristine foley in the wild ♪",
  "♪ 24-bit / 96kHz river stream ♪",
  "♪ low-pass underwater dive! ♪",
  "♪ fmod & wwise certified otter ♪",
];

export function PixelOtter() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const handleOtterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsInteracting(true);
    setPhraseIndex((prev) => (prev + 1) % OTTER_PHRASES.length);
  };

  return (
    <div 
      className="relative w-full h-24 sm:h-28 overflow-hidden bg-gradient-to-b from-secondary/40 via-secondary/70 to-secondary/40 border-y border-separator/60 select-none cursor-pointer group"
      onClick={() => {
        setIsInteracting((prev) => !prev);
        setPhraseIndex((prev) => (prev + 1) % OTTER_PHRASES.length);
      }}
      title="Click the swimming otter to hear its thoughts!"
      aria-label="A pixel art otter swimming peacefully in a river stream"
    >
      {/* Background Pixel Water Stream & Wave Highlights */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {/* Animated wave layer 1 */}
        <div className="absolute inset-0 flex items-center justify-around animate-pulse" style={{ animationDuration: "3s" }}>
          <span className="w-12 h-0.5 bg-[#519CAB]/70 rounded"></span>
          <span className="w-20 h-0.5 bg-[#C3E7F1]/50 rounded"></span>
          <span className="w-8 h-0.5 bg-[#519CAB]/60 rounded"></span>
          <span className="w-16 h-0.5 bg-[#519CAB]/70 rounded"></span>
          <span className="w-10 h-0.5 bg-[#C3E7F1]/40 rounded"></span>
          <span className="w-24 h-0.5 bg-[#519CAB]/60 rounded"></span>
        </div>
        {/* Water surface glint */}
        <div className="absolute bottom-4 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#519CAB]/50 to-transparent"></div>
      </div>

      {/* Swimming Otter Container (smooth horizontal swim loop) */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full pointer-events-none">
        <div className="animate-otter-swim flex items-center will-change-transform">
          {/* Bobbing and tilted otter wrapper */}
          <div 
            className="relative animate-otter-bob pointer-events-auto cursor-pointer"
            onClick={handleOtterClick}
          >
            {/* Thought / Music bubble on interaction or hover */}
            <div 
              className={`absolute -top-7 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded text-[10px] font-mono tracking-wider bg-[#20373B] text-[#FFC64F] border border-[#FFC64F]/50 shadow-xl whitespace-nowrap transition-all duration-300 ${
                isInteracting ? "opacity-100 scale-100 -translate-y-1" : "opacity-0 scale-90 pointer-events-none group-hover:opacity-100 group-hover:scale-100"
              }`}
            >
              {OTTER_PHRASES[phraseIndex]}
            </div>

            {/* Ripple effects behind the swimming otter */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-1 flex items-center gap-1.5 opacity-70">
              <span className="w-2 h-1 rounded-full bg-[#C3E7F1] animate-ping" style={{ animationDuration: "1.8s" }}></span>
              <span className="w-3 h-1 rounded-full bg-[#519CAB]/80"></span>
              <span className="w-5 h-1 rounded-full bg-[#519CAB]/50"></span>
            </div>

            {/* Pixel Art Otter SVG */}
            <svg
              width="64"
              height="36"
              viewBox="0 0 32 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md select-none transform transition-transform group-hover:scale-110"
              style={{ shapeRendering: "crispEdges", imageRendering: "pixelated" }}
            >
              {/* --- Tail (Left) --- */}
              <rect x="1" y="11" width="3" height="2" fill="#4A2E1B" />
              <rect x="3" y="10" width="3" height="2" fill="#6B3F21" />
              <rect x="5" y="9" width="3" height="3" fill="#6B3F21" />

              {/* --- Main Body / Back Fur --- */}
              <rect x="7" y="8" width="13" height="6" fill="#6B3F21" />
              <rect x="8" y="7" width="11" height="2" fill="#543017" />
              <rect x="8" y="13" width="11" height="2" fill="#4A2E1B" />

              {/* --- Cream Underbelly with Warm Amber Sun Highlight (#FFC64F) --- */}
              <rect x="9" y="8" width="9" height="4" fill="#D4A373" />
              <rect x="10" y="7" width="7" height="2" fill="#E8C39E" />
              <rect x="11" y="9" width="5" height="2" fill="#FFC64F" opacity="0.85" />

              {/* --- Cute Little Paws resting on belly --- */}
              <rect x="12" y="6" width="2" height="2" fill="#543017" />
              <rect x="15" y="6" width="2" height="2" fill="#543017" />
              <rect x="12" y="7" width="2" height="1" fill="#D4A373" />
              <rect x="15" y="7" width="2" height="1" fill="#D4A373" />

              {/* --- Back Paws / Flippers in water --- */}
              <rect x="6" y="12" width="2" height="2" fill="#543017" />
              <rect x="7" y="13" width="2" height="2" fill="#4A2E1B" />

              {/* --- Neck & Head --- */}
              <rect x="19" y="7" width="7" height="6" fill="#6B3F21" />
              <rect x="20" y="6" width="6" height="2" fill="#543017" />
              <rect x="21" y="5" width="4" height="2" fill="#6B3F21" />

              {/* --- Rounded Ear --- */}
              <rect x="20" y="4" width="2" height="2" fill="#4A2E1B" />
              <rect x="21" y="5" width="1" height="1" fill="#D4A373" />

              {/* --- Cream Cheeks & Muzzle --- */}
              <rect x="22" y="8" width="6" height="4" fill="#D4A373" />
              <rect x="24" y="9" width="4" height="3" fill="#E8C39E" />

              {/* --- Cute Eye --- */}
              <rect x="23" y="7" width="1" height="2" fill="#1C130D" />
              {/* Eye sparkle (#C3E7F1 ice reflection) */}
              <rect x="23" y="7" width="1" height="1" fill="#C3E7F1" />

              {/* --- Dark Cute Nose --- */}
              <rect x="27" y="8" width="2" height="2" fill="#1C130D" />
              {/* Nose highlight */}
              <rect x="27" y="8" width="1" height="1" fill="#543017" />

              {/* --- Whiskers --- */}
              <rect x="27" y="11" width="3" height="1" fill="#E8C39E" opacity="0.8" />
              <rect x="26" y="12" width="3" height="1" fill="#E8C39E" opacity="0.6" />

              {/* --- Waterline ripples around the otter (#519CAB & #C3E7F1) --- */}
              <rect x="2" y="13" width="4" height="1" fill="#519CAB" opacity="0.85" />
              <rect x="8" y="14" width="16" height="1" fill="#C3E7F1" opacity="0.9" />
              <rect x="25" y="13" width="5" height="1" fill="#519CAB" opacity="0.85" />
              {/* Little water foam front and back */}
              <rect x="0" y="14" width="2" height="1" fill="#C3E7F1" />
              <rect x="30" y="13" width="2" height="1" fill="#C3E7F1" />
            </svg>

            {/* Front ripples spreading forward */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-1 flex items-center gap-1 opacity-80">
              <span className="w-2 h-0.5 rounded bg-[#519CAB]"></span>
              <span className="w-1 h-0.5 rounded bg-[#C3E7F1]"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Stream Label & Hint */}
      <div className="absolute bottom-1 right-4 sm:right-8 text-[9px] font-mono uppercase tracking-widest text-muted-foreground/40 pointer-events-none">
        River Stream · Tap Otter
      </div>
    </div>
  );
}
