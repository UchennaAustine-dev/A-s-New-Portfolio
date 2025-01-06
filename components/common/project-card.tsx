"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  isNew?: boolean;
}

export const ProjectCard = ({
  id,
  title,
  category,
  isNew,
}: ProjectCardProps) => {
  const router = useRouter();

  return (
    <motion.div
      onClick={() => router.push(`/work/${id}`)}
      className="group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className={cn(
          "border-t border-border py-7 transition-all duration-300",
          "hover:bg-muted/50 rounded-lg px-4",
          "group-hover:border-primary/50"
        )}
      >
        <div className="flex items-center justify-between">
          <motion.h2
            className="font-italiana text-2xl md:text-3xl text-[#845ec2]"
            layout
          >
            {title}
          </motion.h2>
          {isNew && (
            <motion.span
              className={cn(
                "text-xs font-medium text-primary px-2 py-1 rounded-full",
                "border border-primary bg-primary/5"
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              NEW
            </motion.span>
          )}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{category}</p>
        <motion.div
          className={cn(
            "mt-4 flex items-center text-primary",
            "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            "translate-x-[-10px] group-hover:translate-x-0"
          )}
          initial={false}
          animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm font-medium">View Project</span>
          <svg
            className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
};
