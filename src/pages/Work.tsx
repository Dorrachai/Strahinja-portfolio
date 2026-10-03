import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProjectListItem } from "@/components/ProjectListItem";
import { projects } from "@/data/projects";

const Work = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState<"projects" | "implementation">(
    tabParam === "implementation" ? "implementation" : "projects"
  );

  useEffect(() => {
    if (tabParam === "implementation") {
      setActiveTab("implementation");
    } else if (tabParam === "projects") {
      setActiveTab("projects");
    }
  }, [tabParam]);

  const handleTabChange = (tab: "projects" | "implementation") => {
    setActiveTab(tab);
    setSearchParams(tab === "implementation" ? { tab: "implementation" } : {});
  };

  return (
    <Layout showEchelonFooter>
      {/* Header with Switchable Tabs */}
      <section className="container-wide pt-8 sm:pt-12 md:pt-16 pb-6 md:pb-8">
        <span className="text-label text-earth-orange font-semibold block mb-2 sm:mb-3">Works</span>
        <div className="flex items-baseline gap-3 sm:gap-5 md:gap-8 flex-nowrap whitespace-nowrap overflow-hidden">
          {/* Projects Tab */}
          <button
            type="button"
            onClick={() => handleTabChange("projects")}
            className={`group relative pb-2 font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none transition-all duration-300 text-left select-none shrink-0 ${
              activeTab === "projects"
                ? "text-foreground opacity-100 scale-[1.01]"
                : "text-muted-foreground opacity-40 hover:opacity-75 cursor-pointer"
            }`}
          >
            <span>Projects</span>
            {activeTab === "projects" && (
              <span className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-earth-orange via-earth-orange-light to-earth-blue animate-indicator-slide origin-left shadow-sm" />
            )}
          </button>

          <span className="font-display text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-earth-orange/40 select-none shrink-0">
            /
          </span>

          {/* Implementation Tab */}
          <button
            type="button"
            onClick={() => handleTabChange("implementation")}
            className={`group relative pb-2 font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none transition-all duration-300 text-left select-none shrink-0 ${
              activeTab === "implementation"
                ? "text-foreground opacity-100 scale-[1.01]"
                : "text-muted-foreground opacity-40 hover:opacity-75 cursor-pointer"
            }`}
          >
            <span>Implementation</span>
            {activeTab === "implementation" && (
              <span className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 rounded-full bg-gradient-to-r from-earth-blue via-earth-white to-earth-orange animate-indicator-slide origin-left shadow-sm" />
            )}
          </button>
        </div>

        {/* Dynamic Subtitle / Indicator with Key for smooth crossfade animation */}
        <div
          key={`subtitle-${activeTab}`}
          className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-separator/60 pb-6 animate-tab-content"
        >
          <p className="text-sm md:text-base text-muted-foreground font-mono">
            {activeTab === "projects"
              ? "01 — Game audio, original scoring, creature & weapon SFX"
              : "02 — In-engine architecture, Wwise / FMOD middleware & bespoke C++ systems"}
          </p>
          <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3.5 py-1.5 rounded-full border border-earth-orange/30 bg-gradient-to-r from-earth-orange/20 via-earth-orange/10 to-transparent text-earth-orange font-mono text-[11px] uppercase tracking-wider shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-earth-orange animate-pulse"></span>
            {activeTab === "projects" ? "Mode: Sound Design" : "Mode: Technical Audio"}
          </div>
        </div>
      </section>

      {/* Project List with Animated Stagger Transition */}
      <section key={`list-${activeTab}`} className="pb-12 md:pb-16">
        {projects.map((project, index) => {
          const isImplementation = activeTab === "implementation";
          const displayTitle =
            isImplementation && project.implementation?.title
              ? project.implementation.title
              : project.title;
          const displayTags =
            isImplementation && project.implementation?.tags
              ? project.implementation.tags
              : project.tags;

          return (
            <div
              key={`${project.id}-${activeTab}`}
              className="animate-tab-item"
              style={{ animationDelay: `${index * 0.07}s` }}
            >
              <ProjectListItem
                id={project.id}
                title={displayTitle}
                tags={displayTags}
                year={project.year}
                image={project.coverImage}
                index={index}
              />
            </div>
          );
        })}
      </section>
    </Layout>
  );
};

export default Work;

