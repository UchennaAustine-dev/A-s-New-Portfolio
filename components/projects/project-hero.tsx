// import { ProjectDetails } from "@/types/project";
// import Image from "next/image";

// interface ProjectHeroProps {
//   project: ProjectDetails;
// }

// export function ProjectHero({ project }: ProjectHeroProps) {
//   return (
//     <section className="relative h-screen">
//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={project.images[0].url}
//           alt={project.images[0].alt}
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/40" />
//       </div>

//       {/* Content Section */}
//       <div className="relative z-10 h-full flex items-end pb-12 sm:pb-16 md:pb-24 px-6 sm:px-12 md:px-24">
//         <div className="text-white max-w-lg sm:max-w-2xl md:max-w-4xl">
//           <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
//             — {project.category}
//           </p>
//           <h1 className="font-italiana text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-5 md:mb-6">
//             {project.title}
//           </h1>
//           <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl">
//             {project.subtitle}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ProjectDetails } from "@/types/project";
import Image from "next/image";

interface ProjectHeroProps {
  project: ProjectDetails;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={project.images[0].url}
          alt={project.images[0].alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 h-full flex items-end pb-12 sm:pb-16 md:pb-24 px-6 sm:px-12 md:px-24">
        <div className="text-white max-w-lg sm:max-w-2xl md:max-w-4xl">
          <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
            — {project.category}
          </p>
          <h1 className="font-italiana text-4xl sm:text-5xl md:text-7xl mb-4 sm:mb-5 md:mb-6">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-md sm:max-w-lg md:max-w-2xl">
            {project.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
