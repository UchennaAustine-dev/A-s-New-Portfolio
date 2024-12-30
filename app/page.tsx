// src/app/page.tsx
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/home/hero-section";

export default function HomePage() {
  // Projects data
  // const featuredProjects = [
  //   {
  //     title: "OKALPHA",
  //     category: "WEBFLOW DEVELOPMENT",
  //     description: "Digital design and development platform",
  //   },
  //   {
  //     title: "SUPERLINK",
  //     category: "FRAMER DEVELOPMENT",
  //     description: "Advanced linking and navigation system",
  //     isNew: true,
  //   },
  //   {
  //     title: "KAROO",
  //     category: "WEBFLOW DEVELOPMENT",
  //     description: "Modern web development framework",
  //     isNew: true,
  //   },
  // ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Work Section */}
      {/* <section className="py-24 pl-24 pr-8 bg-neutral-50">
        <div className="max-w-4xl">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-italiana text-4xl">Featured Work</h2>
            <Button asChild variant="ghost">
              <Link href="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-16">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group cursor-pointer border-b border-neutral-200 pb-16"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-4">
                      <h3 className="font-italiana text-4xl group-hover:text-neutral-600 transition-colors">
                        {project.title}
                      </h3>
                      {project.isNew && (
                        <span className="px-2 py-1 text-xs bg-black text-white rounded">
                          NEW
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-neutral-600 mt-2">
                      — {project.category}
                    </p>
                  </div>
                  <ArrowRight className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-neutral-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      {/* <section className="py-24 pl-24 pr-8">
        <div className="max-w-4xl">
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-italiana text-4xl">About Me</h2>
            <Button asChild variant="ghost">
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg text-neutral-600 mb-8">
              The world of digital design and development is constantly evolving
              and so has my role over the last 15 years. I'm still learning and
              gaining new skills every day.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Skills</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>Product Design</li>
                  <li>Webflow Development</li>
                  <li>Framer Development</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Experience</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li>Senior Product Designer</li>
                  <li>Freelance Developer</li>
                  <li>UI/UX Consultant</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 pl-24 pr-8 bg-neutral-900 text-white">
        <div className="max-w-4xl">
          <h2 className="font-italiana text-6xl mb-8">Let's work together</h2>
          <p className="text-lg text-neutral-300 mb-8 max-w-xl">
            Have a project in mind? I'm always open to discussing new
            opportunities and interesting projects.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-neutral-900"
          >
            <Link href="/contact">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section> */}
    </div>
  );
}
