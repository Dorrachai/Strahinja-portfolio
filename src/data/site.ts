// =====================================================================
//  SITE INFO — EDIT THIS FILE TO CHANGE PERSONAL TEXT AND LINKS
//
//  This file controls the text and links that appear everywhere on
//  the site: the name, the bio, the About page, the contact page and
//  the footer. Change the text between the "quotes" and commit —
//  nothing else needs touching.
//
//  Rules of thumb:
//  - Keep the quotation marks " " around your text.
//  - Don't use a " character inside your text (write ' instead).
//  - Lines starting with // are comments — they are ignored by the
//    site and are just there to help you.
// =====================================================================

export const site = {
  // Full name, shown in the header, the footer and the home page.
  name: "Strahinja Velickovic",

  // Two lines for the big home page title. Keep the square brackets
  // and quotes, one line per word.
  heroNameLines: ["Strahinja", "Velickovic"],

  // Short intro shown in the bottom-left of the home page.
  heroBio:
    "Hi! I'm Strahinja, a game sound designer. I create the music, sound effects and audio worlds that make games feel alive.",

  // Job title, shown under the name in the footer.
  role: "Game Sound Designer",

  // Optional video showreel link (paste YouTube or Vimeo URL here, e.g. https://www.youtube.com/watch?v=...)
  showreelUrl: "https://www.youtube.com/watch?v=h7Bbli-7d1A",

  // The big scrolling text at the bottom of the footer.
  handle: "@STRAHINJA",

  // -------------------------------------------------------------------
  //  ABOUT PAGE — one paragraph per line, between the brackets.
  //  Add or remove paragraphs freely (keep the quotes and the comma).
  // -------------------------------------------------------------------
  about: [
    "I am a game sound designer creating music, sound effects, and audio worlds that give games their atmosphere and impact.",
    "Most recently, I created the audio for Bony Tony: The Revenge, an action-platformer produced together with The Game Assembly Stockholm and the Audio Production Academy — every sound and system built from scratch in a custom engine.",
    "I work on commercial, indie, and student game projects, always looking for games that deserve a soundtrack people remember.",
  ],

  // Companies / teams listed under "Selected Collaborations".
  collaborations: ["The Game Assembly Stockholm", "Audio Production Academy"],

  // Skills listed under "Expertise" on the About page.
  expertise: [
    "Game Audio",
    "Sound Design",
    "Music",
    "Audio Implementation",
    "Foley & Field Recording",
    "Adaptive Music",
    "Audio Profiling",
  ],

  // Location and work mode (blanked per request)
  location: "",

  // Audio philosophy statement
  philosophy:
    "Great game audio is about player feedback and emotional resonance. Every impact, ambient layer and musical stem should communicate game state clearly while making every interaction feel tactile and alive.",

  // Technical Toolkit & Software Stack
  toolkit: [
    {
      id: "middleware",
      category: "Audio Middleware",
      shortLabel: "Middleware",
      tagline: "Interactive state machines, RTPCs & spatial audio",
      description:
        "I author responsive soundscapes and interactive audio architectures with Audiokinetic Wwise and FMOD Studio — implementing dynamic RTPCs, state switching, ducking hierarchies, spatial attenuation curves, and real-time profiling directly against target game builds.",
      icon: "middleware",
      items: ["Audiokinetic Wwise", "FMOD Studio"],
    },
    {
      id: "engines",
      category: "Game Engines",
      shortLabel: "Engines",
      tagline: "MetaSounds, blueprints & custom C++ integration",
      description:
        "I integrate middleware soundbanks and build in-engine audio logic directly inside Unreal Engine 5 (MetaSounds / Blueprints), Unity, and custom C++ game engines. I handle listener orientation, occlusion traces, audio component pools, and game event hooks.",
      icon: "engine",
      items: ["Unreal Engine 5 (MetaSounds / Blueprints)", "Unity", "Custom C++ Engines"],
    },
    {
      id: "daws",
      category: "Primary DAWs",
      shortLabel: "DAWs",
      tagline: "Batch rendering, UCS scripting & multi-track scoring",
      description:
        "REAPER is my daily driver for ultra-fast UCS batch rendering, region matrix exports, and custom Lua scripting for game audio pipelines. Pro Tools, Logic Pro, and Ableton Live provide dedicated environments for linear composition, Foley editing, and electronic production.",
      icon: "daw",
      items: ["REAPER", "Pro Tools", "Logic Pro", "Ableton Live"],
    },
    {
      id: "dsp",
      category: "Sound Design & Processing",
      shortLabel: "DSP & Synths",
      tagline: "Surgical restoration, analog color & modular sound design",
      description:
        "I sculpt custom audio signatures using iZotope RX for spectral repair, FabFilter for surgical EQ and multiband dynamics, Soundtoys for analog color and motion, and Serum & Phase Plant for advanced wavetable sound design.",
      icon: "dsp",
      items: ["iZotope RX", "FabFilter", "Soundtoys", "Serum", "Phase Plant"],
    },
    {
      id: "hardware",
      category: "Recording & Hardware",
      shortLabel: "Hardware",
      tagline: "High-resolution field recording & custom Foley capture",
      description:
        "I capture original organic source materials using Sound Devices and Zoom field recorders, shotgun & small-diaphragm condenser mics for stereo field ambiances, and contact microphones to extract hidden resonant vibrations from physical objects.",
      icon: "hardware",
      items: ["Field Recorders (Zoom / Sound Devices)", "Shotgun & Condenser Mics", "Contact Mics & Foley"],
    },
  ],

  // Core Game Audio Disciplines
  disciplines: [
    {
      title: "Interactive Implementation",
      description:
        "Building responsive audio systems with Wwise and FMOD — dynamic RTPCs, state switching, ducking, and spatial attenuation curves.",
    },
    {
      title: "Custom Foley & Field Recording",
      description:
        "Capturing fresh, tactile organic textures and impacts rather than relying solely on generic pre-baked sound libraries.",
    },
    {
      title: "In-Engine Optimization & Profiling",
      description:
        "Rigorous voice limiting, memory budgeting, real-time profiling, and format compression tailored to target hardware.",
    },
    {
      title: "Standardized Pipelines (UCS)",
      description:
        "Universal Category System (UCS) compliant naming and automated batch rendering for seamless handoffs to game programmers.",
    },
  ],

  // -------------------------------------------------------------------
  //  INSTRUMENTS & SOUND SOURCES (About Page)
  //  Interactive acoustic instruments, synthesizers & Foley rigs
  // -------------------------------------------------------------------
  instruments: [
    {
      id: "trombone",
      name: "Trombone",
      category: "Brass & Lead Acoustic",
      tagline: "My core instrument since childhood",
      description:
        "I own a trombone and have been playing it since I was a kid. Its brass dynamics, lip slurs, and expressive slide glissandi make it invaluable for character leitmotifs, dynamic fanfare, and eccentric organic Foley textures.",
      icon: "trombone",
    },
    {
      id: "synths",
      name: "Modular & Analog Synths",
      category: "Synthesis & Sound Design",
      tagline: "Analog, wavetable & modular patching",
      description:
        "I dive deep into analog modeling, wavetable design, and modular patching to craft alien textures, sci-fi UI stingers, and heavyweight sub-bass rumbles.",
      icon: "synth",
    },
    {
      id: "guitar",
      name: "Electric & Bass Guitar",
      category: "Strings & Textured Noise",
      tagline: "Extended techniques, bowing & heavy pedals",
      description:
        "I use bowing techniques, alternate tunings, and heavy pedalboards to produce gritty distorted combat stingers, moody ambient swells, and kinetic tension drones.",
      icon: "guitar",
    },
    {
      id: "keys",
      name: "Piano & Keyboards",
      category: "Harmony & Interactive Themes",
      tagline: "Harmonic sketching & theme architecture",
      description:
        "My primary station for drafting harmonic voicings, thematic leitmotifs, and modal melodies. Working on the keys helps me lay down adaptive stems that transition smoothly across game states.",
      icon: "piano",
    },
    {
      id: "foley",
      name: "Percussion & Kinetic Foley",
      category: "Tactile Impact & Organic SFX",
      tagline: "Found objects, metal & tactile recording",
      description:
        "Shakers, scrap metal, contact microphones, and found objects. I capture kinetic impacts and textured rattles to build bespoke impacts, mechanical weapon layers, and tactile game UI elements from scratch.",
      icon: "percussion",
    },
    {
      id: "field-recording",
      name: "Field Recording Rig",
      category: "Spatial Recording & Ambience",
      tagline: "Stereo condensers & binaural mics",
      description:
        "Armed with portable stereo condenser and hydrophone mics, I record outdoor environments, acoustic resonance, mechanical machinery, and weather for realistic spatial beds.",
      icon: "mic",
    },
  ],

  // -------------------------------------------------------------------
  //  CONTACT PAGE & FOOTER LINKS
  //  Each link needs a label, a URL, and an icon keyword.
  //  Icon keywords you can use: "linkedin", "gamepad", "play",
  //  "mail", "globe".
  // -------------------------------------------------------------------
  contactLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/strahinja-velickovic-4a2a77305/",
      icon: "linkedin",
    },
    {
      label: "strahinja.velickovic018@gmail.com",
      url: "mailto:strahinja.velickovic018@gmail.com",
      icon: "mail",
    },
  ],

  // Text above the contact links on the Contact page.
  contactIntro:
    "Looking for sound design or music for your game? Let's talk about your next project.",

  // Availability line on the Contact page (blanked per request)
  availability: "",

  // Direct contact email used for inquiry forms and mail links.
  email: "strahinja.velickovic018@gmail.com",
};
