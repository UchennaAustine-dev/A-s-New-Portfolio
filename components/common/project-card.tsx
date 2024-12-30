interface ProjectCardProps {
  title: string;
  category: string;
  isNew?: boolean;
}

export function ProjectCard({ title, category, isNew }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-italiana text-4xl group-hover:text-neutral-600 transition-colors">
          {title}
        </h2>
        {isNew && (
          <span className="px-2 py-1 text-xs bg-black text-white rounded">
            NEW
          </span>
        )}
      </div>
      <p className="text-sm text-neutral-600">— {category}</p>
    </div>
  );
}
