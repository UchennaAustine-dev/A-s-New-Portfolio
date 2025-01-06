"use client";

import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/project";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/common/project-card";
import { Project } from "@/types/project";
import { useToast } from "@/hooks/use-toast";

const INITIAL_VISIBLE_COUNT = 4;

const ProjectList = memo(
  ({
    projects,
    visibleCount,
  }: {
    projects: Project[];
    visibleCount: number;
  }) => (
    <AnimatePresence mode="wait">
      <motion.div
        layout
        className="space-y-6 md:space-y-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {projects.slice(0, visibleCount).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              category={project.category}
              isNew={project.isNew}
            />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
);

ProjectList.displayName = "ProjectList";

export default function WorkPage() {
  const [visibleProjects, setVisibleProjects] = useState(INITIAL_VISIBLE_COUNT);
  const { toast } = useToast();

  const handleToggleProjects = () => {
    setVisibleProjects((prev) => {
      const newCount =
        prev === INITIAL_VISIBLE_COUNT
          ? projects.length
          : INITIAL_VISIBLE_COUNT;
      toast({
        title:
          newCount === INITIAL_VISIBLE_COUNT
            ? "Showing less projects"
            : "Showing all projects",
        duration: 2000,
      });
      return newCount;
    });
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="min-h-screen grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* Left Column */}
        <div className="sticky top-5 flex flex-col justify-start md:justify-center pl-4 md:pl-6 space-y-6 md:space-y-8 bg-white mt-16">
          <motion.h1
            className="font-italiana text-[#845ec2] text-3xl sm:text-4xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work
          </motion.h1>
          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            This is a showcase of my best work in a variety of fields, including
            Graphic and Web Design, No-Code Development, Product Design, and
            Product Management.
          </motion.p>
          <motion.button
            onClick={handleToggleProjects}
            className={cn(
              "font-italiana text-left text-[#845ec2] underline text-lg cursor-pointer",
              "hover:text-primary/80 transition-colors duration-200",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
              "w-fit"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {visibleProjects === INITIAL_VISIBLE_COUNT
              ? "See More"
              : "See Less"}
          </motion.button>
        </div>

        {/* Right Column */}
        <div
          className={cn(
            "h-screen pr-4 md:pr-6 flex flex-col justify-start md:justify-center",
            "scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent",
            visibleProjects > INITIAL_VISIBLE_COUNT
              ? "overflow-y-auto"
              : "overflow-hidden"
          )}
        >
          <ProjectList projects={projects} visibleCount={visibleProjects} />
        </div>
      </div>
    </motion.div>
  );
}

// "use client";

// import { memo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { projects } from "@/lib/project";
// import { cn } from "@/lib/utils";
// import { ProjectCard } from "@/components/common/project-card";
// import { Project } from "@/types/project";
// import { useToast } from "@/hooks/use-toast";

// const INITIAL_VISIBLE_COUNT = 4;

// const ProjectList = memo(
//   ({
//     projects,
//     visibleCount,
//   }: {
//     projects: Project[];
//     visibleCount: number;
//   }) => (
//     <AnimatePresence mode="wait">
//       <motion.div
//         layout
//         className="space-y-10"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: -20 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//       >
//         {projects.slice(0, visibleCount).map((project, index) => (
//           <motion.div
//             key={project.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//           >
//             <ProjectCard
//               id={project.id}
//               title={project.title}
//               category={project.category}
//               isNew={project.isNew}
//             />
//           </motion.div>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   )
// );

// ProjectList.displayName = "ProjectList";

// export default function WorkPage() {
//   const [visibleProjects, setVisibleProjects] = useState(INITIAL_VISIBLE_COUNT);
//   const { toast } = useToast();

//   const handleToggleProjects = () => {
//     setVisibleProjects((prev) => {
//       const newCount =
//         prev === INITIAL_VISIBLE_COUNT
//           ? projects.length
//           : INITIAL_VISIBLE_COUNT;
//       toast({
//         title:
//           newCount === INITIAL_VISIBLE_COUNT
//             ? "Showing less projects"
//             : "Showing all projects",
//         duration: 2000,
//       });
//       return newCount;
//     });
//   };

//   return (
//     <motion.div
//       className="max-w-6xl mx-auto"
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.95 }}
//       transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//     >
//       <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Column */}
//         <div className="sticky top-0 h-screen flex flex-col justify-center pl-6 md:pl-10">
//           <motion.h1
//             className="font-italiana text-[#845ec2] text-4xl md:text-6xl mb-6 md:mb-8 "
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             Work
//           </motion.h1>
//           <motion.p
//             className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-md"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             This is a showcase of my best work in a variety of fields, including
//             Graphic and Web Design, No-Code Development, Product Design, and
//             Product Management.
//           </motion.p>
//           <motion.button
//             onClick={handleToggleProjects}
//             className={cn(
//               "font-italiana text-left text-[#845ec2] underline text-xl cursor-pointer",
//               "hover:text-primary/80 transition-colors duration-200",
//               "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
//               "w-fit"
//             )}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {visibleProjects === INITIAL_VISIBLE_COUNT
//               ? "See More"
//               : "See Less"}
//           </motion.button>
//         </div>

//         {/* Right Column */}
//         <div
//           className={cn(
//             "h-screen pr-6 md:pr-10 flex flex-col justify-center",
//             "scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent",
//             visibleProjects > INITIAL_VISIBLE_COUNT
//               ? "overflow-y-auto"
//               : "overflow-hidden"
//           )}
//         >
//           <ProjectList projects={projects} visibleCount={visibleProjects} />
//         </div>
//       </div>
//     </motion.div>
//   );
// }
