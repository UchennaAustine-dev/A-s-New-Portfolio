import { ProjectDetails } from "@/types/project";

interface ProjectContentProps {
  project: ProjectDetails;
}

export function ProjectContent({ project }: ProjectContentProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto">
        {/* Project Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-24">
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
              Client
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base">
              {project.client}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
              Timeline
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base">
              {project.timeline}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">
              Role
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base">
              {project.role}
            </p>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          <div>
            <h2 className="font-italiana text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6">
              Overview
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div>
            <h2 className="font-italiana text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6">
              The Challenge
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="font-italiana text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6">
              Solution
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {project.solution}
            </p>
          </div>

          <div>
            <h2 className="font-italiana text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6">
              Outcome
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              {project.outcome}
            </p>
          </div>

          <div>
            <h2 className="font-italiana text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-5 md:mb-6">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-neutral-100 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
