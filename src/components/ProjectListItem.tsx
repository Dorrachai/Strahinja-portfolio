import { useState } from "react";
import { Link } from "react-router-dom";

interface ProjectListItemProps {
  id: string;
  title: string;
  tags: string[];
  year: string;
  image: string;
  index: number;
}

export function ProjectListItem({ 
  id, 
  title, 
  tags, 
  year, 
  image,
}: ProjectListItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/work/${id}`}
      className="group block border-b border-separator hover:bg-card/50 hover:border-earth-orange/40 transition-all duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container-wide py-4 md:py-5">
        <div className="flex items-center justify-between gap-4">
          {/* Title */}
          <h3 className="flex-1 text-base sm:text-lg md:text-xl lg:text-2xl font-sans uppercase tracking-wide text-foreground group-hover:text-earth-orange group-hover:translate-x-1 transition-all duration-200">
            {title}
          </h3>

          {/* Tags */}
          <div className="hidden sm:flex items-center gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] md:text-xs uppercase tracking-widest px-2.5 py-1 border border-separator/80 bg-background/60 text-muted-foreground group-hover:border-earth-orange/30 group-hover:text-foreground transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year */}
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted-foreground group-hover:text-earth-orange transition-colors duration-200">
            {year}
          </span>

          {/* Hover Image — Desktop Only */}
          <div 
            className={`hidden lg:block fixed right-12 xl:right-32 top-1/2 -translate-y-1/2 w-64 xl:w-80 aspect-[3/4] pointer-events-none z-40 transition-all duration-300 will-change-[transform,opacity] ${
              isHovered 
                ? "opacity-100 translate-x-0 scale-100" 
                : "opacity-0 translate-x-6 scale-95"
            }`}
          >
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl shadow-2xl border border-separator/80"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
