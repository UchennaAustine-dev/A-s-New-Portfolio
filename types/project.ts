export interface ProjectImage {
    url: string;
    alt: string;
    caption?: string;
  }
  
  export interface Project {
    id: string;
  title: string;
  category: string;
  isNew?: boolean;
}
  export interface ProjectDetails {
    id: string;
    title: string;
    subtitle: string;
    category: string;
    year: string;
    client: string;
    role: string;
    timeline: string;
    overview: string;
    challenge: string;
    solution: string;
    outcome: string;
    technologies: string[];
    responsibilities: string[];
    images: ProjectImage[];
    nextProject?: {
      id: string;
      title: string;
    };
  }