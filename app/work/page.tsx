"use client";

import { memo, useState } from "react";
import { ProjectCard } from "@/components/common/project-card";
import { motion } from "framer-motion";

// Define the type for a project
interface Project {
  title: string;
  category: string;
  isNew?: boolean;
}

// Static project data
const projects: Project[] = [
  { title: "OKALPHA", category: "WEBFLOW DEVELOPMENT" },
  { title: "SUPERLINK", category: "FRAMER DEVELOPMENT", isNew: true },
  { title: "KAROO", category: "WEBFLOW DEVELOPMENT", isNew: true },
  { title: "WARD", category: "WEBFLOW DEVELOPMENT" },
  { title: "STUDIO", category: "PRODUCT MANAGEMENT" },
  { title: "PROJECT X", category: "UX DESIGN" },
  { title: "PROJECT Y", category: "UI DEVELOPMENT" },
  { title: "PROJECT Z", category: "FULL STACK DEVELOPMENT" },
];

// Define the props for the ProjectList component
interface ProjectListProps {
  projects: Project[];
}

// Memoized ProjectList component
const ProjectList = memo(({ projects }: ProjectListProps) => (
  <motion.div
    layout
    className="space-y-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    {projects.map((project) => (
      <ProjectCard
        key={project.title} // Using title as a unique key
        title={project.title}
        category={project.category}
        isNew={project.isNew}
      />
    ))}
  </motion.div>
));

export default function WorkPage() {
  const [visibleProjects, setVisibleProjects] = useState(5);

  const handleToggleProjects = () => {
    setVisibleProjects((prev) => (prev === 5 ? projects.length : 5));
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Heading and Introduction */}
        <div className="sticky top-0 h-screen flex flex-col justify-center pl-10">
          <h1 className="font-italiana text-6xl mb-8">Work</h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-md">
            This is a showcase of my best work in a variety of fields, including
            Graphic and Web Design, No-Code Development, Product Design, and
            Product Management.
          </p>
          <span
            onClick={handleToggleProjects}
            className="font-italiana text-left underline text-xl cursor-pointer"
          >
            {visibleProjects === 5 ? "See More" : "See Less"}
          </span>
        </div>

        {/* Right Column: Project List */}
        <div
          className={`${
            visibleProjects > 5 ? "overflow-y-auto" : "overflow-hidden"
          } h-screen pr-10 flex flex-col justify-center scrollbar-none`}
        >
          <ProjectList projects={projects.slice(0, visibleProjects)} />
        </div>
      </div>
    </motion.div>
  );
}
