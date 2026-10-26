import { Link } from "react-router-dom";

interface ProjectListItemProps {
  id: string;
  title: string;
  tags: string[];
  year: string;
  index: number;
}

export function ProjectListItem({ 
  id, 
  title, 
  tags, 
  year, 
}: ProjectListItemProps) {
  return (
    <Link
      to={`/work/${id}`}
      className="group block border-b border-separator/80 hover:bg-gradient-to-r hover:from-card/80 hover:via-secondary/40 hover:to-transparent hover:border-earth-orange/40 transition-all duration-200"
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
                className="text-[10px] md:text-xs uppercase tracking-widest px-2.5 py-1 border border-separator/80 bg-gradient-to-r from-secondary/60 to-secondary/30 text-muted-foreground group-hover:border-earth-orange/40 group-hover:text-foreground transition-colors duration-200 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year */}
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-muted-foreground group-hover:text-earth-orange transition-colors duration-200">
            {year}
          </span>


        </div>
      </div>
    </Link>
  );
}
