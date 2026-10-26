// =====================================================================
//  PROJECTS — EDIT THIS FILE TO ADD PROJECTS AND SOUND DEMOS
//
//  Every project on the site lives in the list below. To add a new
//  project, copy the EXAMPLE PROJECT block at the bottom of this
//  file, paste it just above the line that says  ];
//  and fill in your own text.
//
//  Rules of thumb:
//  - Keep the quotation marks " " around your text.
//  - Every project needs a unique "id" (lowercase, dashes instead of
//    spaces, e.g. "my-new-game"). Never reuse the same id twice.
//  - The images come from the  src/assets  folder — see README.md
//    for how to upload new images and point the project at them.
//  - Lines starting with // are comments and are ignored by the site.
// =====================================================================

import bonyTony1 from "@/assets/bony-tony-1.png";
import bonyTony2 from "@/assets/bony-tony-2.png";
import bonyTony3 from "@/assets/bony-tony-3.png";
import bonyTony4 from "@/assets/bony-tony-4.png";
import bonyTony5 from "@/assets/bony-tony-5.png";
import bonyTony6 from "@/assets/bony-tony-6.jpg";
import skylineFeline1 from "@/assets/picture 1.png";
import grisPicture from "@/assets/GrisPicture.png";
import skylineFeline2 from "@/assets/picture 2.png";
import skylineFeline3 from "@/assets/picture 3.png";
import unrealPicture from "@/assets/unreal picture.png";
import wwisePicture from "@/assets/wwise picture.png";

export interface Project {
  id: string; // unique short name used in the web address, e.g. /project/bony-tony
  title: string; // full project title
  category: string; // short category shown on cards, e.g. "Game Audio"
  tags: string[]; // small labels, UPPERCASE, e.g. "SOUND DESIGN"
  year: string; // e.g. "2026"
  client?: string; // optional: studio, team or jam name. Leave out entirely for a personal / practice project.
  description: string; // 2-4 sentences about your work on it
  link?: string; // optional: URL to play or listen (itch.io, YouTube, ...)
  linkLabel?: string; // optional: text on that button, e.g. "Play on itch.io"
  audioDemos?: AudioDemo[]; // optional: embedded sound players, see below
  videoUrl?: string; // optional: video shown in the big player at the top
                     // of the project page and the Work page tab.
                     // Paste a normal YouTube or Vimeo link, e.g.
                     // videoUrl: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
  videos?: VideoEntry[]; // optional: MULTIPLE video players, one per entry.
                     // Use this instead of videoUrl when a project has
                     // several videos, e.g. three compositions:
                     //   videos: [
                     //     { title: "Composition 01", url: "https://www.youtube.com/watch?v=XXXXXXXXXXX" },
                     //   ],
  coverImage: string; // main image (from src/assets)
  images: string[]; // picture gallery, one image per line

  // Set to true for projects that belong in the "Implementation" tab
  // instead of the "Projects" tab on the Work page.
  isImplementation?: boolean;

  // Implementation mode alternative titles and metadata:
  implementation?: {
    title: string;
    category: string;
    tags: string[];
    client?: string;
    description?: string;
  };
}

// ---------------------------------------------------------------------
//  AUDIO DEMOS — playable players on the project page.
//  Works with links from SoundCloud, YouTube and Spotify.
//  Just paste the normal link you see in the browser address bar:
//
//    { title: "Main Theme", url: "https://soundcloud.com/you/track" },
//    { title: "Weapon Sounds", url: "https://youtu.be/XXXXXXXXXXX" },
//
// ---------------------------------------------------------------------
export interface VideoEntry {
  title: string; // label shown above the player, e.g. "Composition 01"
  url: string; // normal YouTube / Vimeo link
}

export interface AudioDemo {
  title: string; // name shown above the player, e.g. "Main Theme"
  url: string; // normal SoundCloud / YouTube / Spotify link
}

export const projects: Project[] = [
  {
    id: "bony-tony",
    title: "Bony Tony: The Revenge",
    category: "Game Audio",
    tags: ["GAME AUDIO", "SOUND DESIGN"],
    year: "2026",
    client: "The Game Assembly × Audio Production Academy",
    description:
      "Game audio for Bony Tony: The Revenge, a 2.5D action-platformer about blasting your way to the top of a skeleton-filled casino to take revenge on your boss. Music, weapons, ambiences and feedback, created from scratch in a custom-built engine during an 8-week student production, later polished for Swedish Game Awards. All music is performed on real, live recorded instruments.",
    link: "https://eaxcy.itch.io/bony-tony",
    linkLabel: "Play on itch.io",
    videoUrl: "https://www.youtube.com/watch?v=h7Bbli-7d1A", // Bony Tony trailer
    coverImage: bonyTony1,
    images: [bonyTony1, bonyTony2, bonyTony3, bonyTony4, bonyTony5, bonyTony6],
  },
  {
    id: "skyline-feline",
    title: "Skyline Feline",
    category: "Sound Design",
    tags: ["INTERACTIVE AUDIO", "IMPLEMENTATION", "MUSIC SYSTEM"],
    year: "2026",
    client: "The Game Assembly × Audio Production Academy",
    description:
      "Skyline Feline is a first person parkour game where you play as a cat navigating obstacles, fighting enemies with a water gun and using catnip for speed boosts. The soundtrack is an interactive jazz score performed on live instruments, and the soundscape reacts to the action with distance based enemy audio and punchy water gun feedback.",
    videoUrl: "https://www.youtube.com/watch?v=_6atS0FDk8o", // Skyline Feline trailer
    coverImage: skylineFeline1, // picture 1 — sits behind the big title
    images: [skylineFeline2, skylineFeline3], // pictures 2 and 3 — the gallery further down the page
    implementation: {
      title: "Skyline Feline: Wwise Jazz & Interactive Soundscape",
      category: "Audio Implementation",
      tags: ["WWISE", "INTERACTIVE JAZZ", "RTPC DUCKING"],
      client: "Wwise Interactive Systems",
      description:
        "Interactive jazz soundtrack and soundscape built in Wwise. A looping music system with solo sections over corresponding backing instruments lets the score evolve with gameplay, while distance based attenuation for enemy turrets and RTPC driven ducking keep the water gun impactful and punchy.",
    },
  },
  {
    id: "adaptive-music-systems",
    title: "Composition Re-Design",
    category: "Music & Audio",
    tags: ["COMPOSITION", "LINEAR WRITING", "MUSICAL TEMPLATE"],
    year: "2026",
    description:
      "Composition re-design practice where existing score material is reworked through linear writing and a reusable musical template. The music is used as interactive storytelling that emphasises what is happening on screen, with transformative writing that pushes the specific emotion of each scene. Odd time signatures fit the fast paced cuts of the videos while keeping the identity of the original music.",
    videos: [
      // One player per composition. Rename each "title" and swap each
      // "url" for that composition's own YouTube link when ready.
      { title: "Composition 01", url: "https://www.youtube.com/watch?v=HarwhgKulzY" },
      { title: "Composition 02", url: "https://www.youtube.com/watch?v=2-WBiPahyuE" },
      { title: "Composition 03", url: "https://www.youtube.com/watch?v=OmAMr8FthKc" },
    ],
    coverImage: grisPicture, // GrisPicture — the one picture behind the big title
    images: [],
  },

  {
    id: "custom-sound-system-ue5",
    title: "Custom Sound System in Unreal Engine 5",
    category: "Audio Implementation",
    tags: ["UNREAL ENGINE 5", "CUSTOM AUDIO SYSTEM", "AUDIO PROGRAMMING"],
    year: "2026",
    client: "In-Engine Audio Systems",
    description:
      "A personal technical sound design project in Unreal Engine built with MetaSounds and Blueprints. The goal was a dynamic gunshot system that automatically adapts to its surrounding environment. Multiple raycasts analyze nearby geometry to determine whether the player is outdoors, inside an enclosed room or in a long corridor, and the gunshot's reverb, reflections and slapback delays adjust accordingly. The project combines sound design with programming and technical problem solving, exploring how real time environmental data can create more immersive and responsive game audio.",
    videoUrl: "https://www.youtube.com/watch?v=BcwoX3IQEq0", // Unreal sound system video
    coverImage: unrealPicture, // unreal picture — sits behind the big title
    images: [],
    isImplementation: true,
  },
  {
    id: "jazz-music-system",
    title: "Jazz Music System",
    category: "Audio Implementation",
    tags: ["WWISE", "MUSIC SYSTEM", "INTERACTIVE MUSIC"],
    year: "2026",
    client: "Interactive Music Systems",
    description:
      "The music system and all the music from Skyline Feline, rebuilt so the looping becomes truly forever random. Built in Unity with Wwise and a custom C# script: no instrument can be played again until the main loop of the soundtrack starts again, so the score never repeats the same combination of performances.",
    videoUrl: "https://www.youtube.com/watch?v=gTeM8LSuB4A", // Jazz music system video
    coverImage: wwisePicture, // wwise picture — sits behind the big title
    images: [],
    isImplementation: true,
  },

  // ===================================================================
  //  EXAMPLE PROJECT — copy everything between START and END,
  //  paste it right below this comment block, and fill it in.
  //
  //  --- START ---------------------------------------------------------
  //  {
  //    id: "my-new-game",
  //    title: "My New Game",
  //    category: "Game Audio",
  //    tags: ["SOUND DESIGN", "MUSIC"],
  //    year: "2026",
  //    client: "Studio or team name",
  //    description:
  //      "A few sentences about the game and what you made: music, effects, ambience, implementation...",
  //    link: "https://link-to-the-game-or-demo",
  //    linkLabel: "Play on itch.io",
  //    audioDemos: [
  //      { title: "Main Theme", url: "https://soundcloud.com/your-link" },
  //    ],
  //    coverImage: myNewGame1,
  //    images: [myNewGame1, myNewGame2],
  //  },
  //  --- END -----------------------------------------------------------
  // ===================================================================
];

// ---------------------------------------------------------------------
//  HOME PAGE GRID — the 8 pictures behind the big title on the home
//  page. They can repeat. Use image names from src/assets (see the
//  import lines at the top of this file).
// ---------------------------------------------------------------------
export const homeGridImages = [
  bonyTony1,
  bonyTony3,
  bonyTony6,
  bonyTony2,
  bonyTony5,
  bonyTony4,
  bonyTony2,
  bonyTony5,
];
