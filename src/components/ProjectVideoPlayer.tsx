import { getVideoEmbedUrl } from "@/lib/audioEmbed";

// =====================================================================
//  PROJECT VIDEO PLAYER
//  The same cinematic player used for the showreel on the home page,
//  reused on the project pages.
//  It accepts EITHER a single link (the project's "videoUrl") OR a
//  list of videos (the project's "videos") from src/data/projects.ts.
//  With a list, one player is rendered per entry, each with a small
//  numbered label — e.g. 01 · Composition 01.
//  When no link is set, the project's cover image is shown instead.
// =====================================================================

export interface ProjectVideoEntry {
  title: string; // label shown above this player, e.g. "Composition 01"
  url: string; // normal YouTube / Vimeo link
}

interface ProjectVideoPlayerProps {
  url?: string; // single video (original behaviour)
  videos?: ProjectVideoEntry[]; // multiple videos, one player each
  title: string; // project title (used for the side label / fallback)
  year?: string; // shown next to "Reel"
  coverImage: string; // image shown when no video link is set
}

export function ProjectVideoPlayer({
  url,
  videos,
  title,
  year,
  coverImage,
}: ProjectVideoPlayerProps) {
  const single: ProjectVideoEntry[] = url ? [{ title, url }] : [];
  const list: ProjectVideoEntry[] =
    videos && videos.length > 0 ? videos : single;

  if (list.length === 1) {
    return renderPlayer(list[0], 0, true);
  }

  return (
    <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
      {list.map((video, index) => renderPlayer(video, index, false))}
    </div>
  );

  function renderPlayer(
    video: ProjectVideoEntry,
    index: number,
    isSingle: boolean
  ) {
    const videoEmbedUrl = getVideoEmbedUrl(video.url);
    const label = isSingle
      ? `Reel${year ? ` · ${year}` : ""}`
      : `${String(index + 1).padStart(2, "0")} · ${video.title}`;

    return (
      <div key={`${video.title}-${index}`} className="space-y-3">
          {/* Header / Meta */}
          <div className="flex items-center justify-between text-label px-1">
            <span className="flex items-center gap-2">
              {index === 0 && isSingle && (
                <span className="h-2 w-2 rounded-full bg-earth-orange animate-pulse"></span>
              )}
              <span className="text-foreground font-semibold text-xs uppercase tracking-wider">
                {label}
              </span>
            </span>
            {isSingle && (
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest hidden sm:inline truncate max-w-[50%]">
                {title}
              </span>
            )}
          </div>

            {/* Cinematic 16:9 Video Frame */}
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden border border-separator/80 bg-card shadow-2xl ring-1 ring-separator/50">
              {videoEmbedUrl ? (
                <iframe
                  src={videoEmbedUrl}
                  title={video.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <img
                  src={coverImage}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
          </div>
    );
  }
}
