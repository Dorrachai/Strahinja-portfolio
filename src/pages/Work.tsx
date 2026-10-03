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
        <div className="flex items-baseline gap-2 sm:gap-4 md:gap-6 flex-nowrap whitespace-nowrap overflow-hidden">
          <button
            type="button"
            onClick={() => handleTabChange("projects")}
            className={`font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none transition-all duration-300 text-left select-none shrink-0 ${
              activeTab === "projects"
                ? "text-foreground opacity-100"
                : "text-muted-foreground opacity-35 hover:opacity-75 cursor-pointer"
            }`}
          >
            Projects
          </button>

          <span className="font-display text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-earth-orange/40 select-none shrink-0">
            /
          </span>

          <button
            type="button"
            onClick={() => handleTabChange("implementation")}
            className={`font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-none transition-all duration-300 text-left select-none shrink-0 ${
              activeTab === "implementation"
                ? "text-foreground opacity-100"
                : "text-muted-foreground opacity-35 hover:opacity-75 cursor-pointer"
            }`}
          >
            Implementation
          </button>
        </div>

        {/* Dynamic Subtitle / Indicator */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-separator/60 pb-6">
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

      {/* Project List — Same Layout, Dynamic Titles & Tags */}
      <section className="pb-12 md:pb-16">
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
            <ProjectListItem
              key={project.id}
              id={project.id}
              title={displayTitle}
              tags={displayTags}
              year={project.year}
              image={project.coverImage}
              index={index}
            />
          );
        })}
      </section>
    </Layout>
  );
};

export default Work;

