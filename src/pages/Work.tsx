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
      <section className="container-wide pt-12 sm:pt-16 md:pt-24 pb-10 md:pb-16">
        <div className="flex items-baseline gap-3 sm:gap-6 md:gap-8 flex-wrap">
          <button
            type="button"
            onClick={() => handleTabChange("projects")}
            className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight transition-all duration-300 text-left select-none ${
              activeTab === "projects"
                ? "text-foreground opacity-100"
                : "text-muted-foreground opacity-35 hover:opacity-75 cursor-pointer"
            }`}
          >
            Projects
          </button>

          <span className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-earth-orange/40 select-none">
            /
          </span>

          <button
            type="button"
            onClick={() => handleTabChange("implementation")}
            className={`font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight transition-all duration-300 text-left select-none ${
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
          <div className="inline-flex items-center gap-2 self-start sm:self-auto px-3 py-1 rounded-full border border-earth-orange/30 bg-earth-orange/10 text-earth-orange font-mono text-[11px] uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-earth-orange animate-pulse"></span>
            {activeTab === "projects" ? "Mode: Sound Design" : "Mode: Technical Audio"}
          </div>
        </div>
      </section>

      {/* Project List — Same Layout, Dynamic Titles & Tags */}
      <section className="pb-24">
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

