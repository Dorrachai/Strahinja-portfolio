import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ProjectListItem } from "@/components/ProjectListItem";
import { projects } from "@/data/projects";

const Work = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "implementation">("projects");

  return (
    <Layout showEchelonFooter>
      {/* Header with Switchable Tabs */}
      <section className="container-wide pt-16 md:pt-24 pb-12 md:pb-16">
        <div className="flex items-baseline gap-4 sm:gap-6 md:gap-8 flex-wrap">
          <button
            type="button"
            onClick={() => setActiveTab("projects")}
            className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight transition-all duration-300 text-left select-none ${
              activeTab === "projects"
                ? "text-foreground opacity-100"
                : "text-muted-foreground opacity-35 hover:opacity-75 cursor-pointer"
            }`}
          >
            Projects
          </button>

          <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-muted-foreground/30 select-none">
            /
          </span>

          <button
            type="button"
            onClick={() => setActiveTab("implementation")}
            className={`font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight transition-all duration-300 text-left select-none ${
              activeTab === "implementation"
                ? "text-foreground opacity-100"
                : "text-muted-foreground opacity-35 hover:opacity-75 cursor-pointer"
            }`}
          >
            Implementation
          </button>
        </div>

        {/* Dynamic Subtitle / Indicator */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-separator/40 pb-6">
          <p className="text-sm md:text-base text-muted-foreground font-mono">
            {activeTab === "projects"
              ? "01 — Game audio, original scoring, creature & weapon SFX"
              : "02 — In-engine architecture, Wwise / FMOD middleware & bespoke C++ systems"}
          </p>
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground/60">
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

