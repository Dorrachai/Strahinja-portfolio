// Turns a normal SoundCloud / YouTube / Spotify link into the embed
// URL the site's audio player needs. Returns null for other links.

export function getAudioEmbedUrl(url: string): string | null {
  if (url.includes("soundcloud.com")) {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(
      url
    )}&color=%23888888&auto_play=false&hide_related=true&show_comments=false&show_user=true`;
  }

  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/
  );
  if (youtube) {
    return `https://www.youtube.com/embed/${youtube[1]}`;
  }

  const spotify = url.match(
    /open\.spotify\.com\/(?:intl-[a-z]{2}\/)?(track|album|playlist|episode|show)\/(\w+)/
  );
  if (spotify) {
    return `https://open.spotify.com/embed/${spotify[1]}/${spotify[2]}`;
  }

  return null;
}
