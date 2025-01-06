import { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectHero } from "@/components/projects/project-hero";
import { getProjectDetails } from "@/lib/project";
import { ProjectContent } from "@/components/projects/project-content";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectNavigation } from "@/components/projects/project-navigation";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectDetails(id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    // description: project.description,
  };
}

export default async function ProjectPage(props: PageProps) {
  const { params } = props;
  const { id } = await params;
  const project = await getProjectDetails(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ProjectHero project={project} />
      <ProjectContent project={project} />
      <ProjectGallery images={project.images} />
      <ProjectNavigation
        nextProject={project.nextProject}
        prevProject={project.prevProject}
      />
    </div>
  );
}
