import { ProjectImage } from "@/types/project";
import Image from "next/image";

interface ProjectGalleryProps {
  images: ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-6 sm:px-12 md:px-24 bg-neutral-50">
      <div className="max-w-5xl sm:max-w-6xl md:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {images.slice(1).map((image, index) => (
            <div key={index} className="relative aspect-[4/3]">
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover rounded-lg"
              />
              {image.caption && (
                <p className="mt-2 text-xs sm:text-sm text-neutral-600">
                  {image.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
