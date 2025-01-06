import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface ProjectNavigationProps {
  nextProject?: {
    id: string;
    title: string;
  };
  prevProject?: {
    id: string;
    title: string;
  };
}

export function ProjectNavigation({
  nextProject,
  prevProject,
}: ProjectNavigationProps) {
  if (!nextProject && !prevProject) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-stretch gap-6 sm:gap-12 px-6 sm:px-12 md:px-24 py-12 sm:py-16 bg-neutral-900 text-white">
      {/* Previous Project Link */}
      {prevProject ? (
        <Link
          href={`/work/${prevProject.id}`}
          className="flex-1 group bg-neutral-800 rounded-lg p-6 sm:p-8 flex items-center justify-between"
        >
          <div>
            <p className="text-neutral-400 mb-2 text-sm sm:text-base">
              Previous Project
            </p>
            <h2 className="font-italiana text-2xl sm:text-4xl group-hover:text-neutral-300 transition-colors">
              {prevProject.title}
            </h2>
          </div>
          <ArrowLeft className="h-6 w-6 sm:h-8 sm:w-8 group-hover:-translate-x-2 transition-transform" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {/* Next Project Link */}
      {nextProject ? (
        <Link
          href={`/work/${nextProject.id}`}
          className="flex-1 group bg-neutral-800 rounded-lg p-6 sm:p-8 flex items-center justify-between"
        >
          <div>
            <p className="text-neutral-400 mb-2 text-sm sm:text-base">
              Next Project
            </p>
            <h2 className="font-italiana text-2xl sm:text-4xl group-hover:text-neutral-300 transition-colors">
              {nextProject.title}
            </h2>
          </div>
          <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-2 transition-transform" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
