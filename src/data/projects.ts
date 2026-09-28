import bonyTony1 from "@/assets/bony-tony-1.png";
import bonyTony2 from "@/assets/bony-tony-2.png";
import bonyTony3 from "@/assets/bony-tony-3.png";
import bonyTony4 from "@/assets/bony-tony-4.png";
import bonyTony5 from "@/assets/bony-tony-5.png";
import bonyTony6 from "@/assets/bony-tony-6.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  year: string;
  client: string;
  description: string;
  link?: string;
  linkLabel?: string;
  coverImage: string;
  images: string[];
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
      "Game audio for Bony Tony: The Revenge — a 2.5D action-platformer about blasting your way to the top of a skeleton-filled casino to take revenge on your boss. Music, weapons, ambiences and feedback, created from scratch in a custom-built engine during an 8-week student production, later polished for Swedish Game Awards.",
    link: "https://eaxcy.itch.io/bony-tony",
    linkLabel: "Play on itch.io",
    coverImage: bonyTony1,
    images: [bonyTony1, bonyTony2, bonyTony3, bonyTony4, bonyTony5, bonyTony6],
  },
];

// Hero grid on the home page — cycles through real project imagery
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
