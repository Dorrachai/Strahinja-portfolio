import { getVideoEmbedUrl } from "@/lib/audioEmbed";

// =====================================================================
//  PROJECT VIDEO PLAYER
//  The same cinematic player used for the showreel on the home page,
//  reused at the top of every project page and project tab.
//  It reads a normal YouTube or Vimeo link (the project's "videoUrl")
//  from src/data/projects.ts. When no link is set yet, the project's
//  cover image is shown in the same frame instead.
// =====================================================================

interface ProjectVideoPlayerProps {
  url?: string; // normal YouTube / Vimeo link from projects.ts
  title: string; // project title (used for the player label)
  year?: string; // shown next to "Reel"
  coverImage: string; // image shown when no video link is set
}

export function ProjectVideoPlayer({
  url,
  title,
  year,
  coverImage,
}: ProjectVideoPlayerProps) {
  const videoEmbedUrl = getVideoEmbedUrl(url || "");

  return (
    <div className="w-full max-w-[1400px] mx-auto space-y-3">
      {/* Reel Header / Meta */}
      <div className="flex items-center justify-between text-label px-1">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-earth-orange animate-pulse"></span>
          <span className="text-foreground font-semibold text-xs uppercase tracking-wider">
            Reel{year ? ` · ${year}` : ""}
          </span>
        </span>
        <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline truncate max-w-[50%]">
          {title}
        </span>
      </div>

      {/* Cinematic 16:9 Video Frame */}
      <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-separator/80 bg-card shadow-2xl ring-1 ring-separator/50">
        {videoEmbedUrl ? (
          <iframe
            src={videoEmbedUrl}
            title={title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <img
            src={coverImage}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
