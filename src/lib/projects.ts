import { z } from "zod";
import { prisma } from "@/lib/prisma";

export const projectInputSchema = z.object({
  title: z.string().trim().min(2).max(80),
  subtitle: z.string().trim().min(2).max(120),
  category: z.string().trim().min(2).max(60),
  description: z.string().trim().min(20).max(1600),
  techStack: z.array(z.string().trim().min(1).max(32)).min(1).max(12),
  liveDemoUrl: z.string().trim().url().or(z.literal("")),
  githubUrl: z.string().trim().url().or(z.literal("")),
  displayOrder: z.coerce.number().int().min(0).max(999),
});

export type ProjectInput = z.infer<typeof projectInputSchema>;

export function toProjectRecord(input: ProjectInput) {
  const slug = input.title.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `project-${Date.now()}`;
  return {
    slug,
    title: input.title,
    subtitle: input.subtitle,
    category: input.category,
    description: input.description,
    techStack: input.techStack,
    liveDemoUrl: input.liveDemoUrl || null,
    githubUrl: input.githubUrl || null,
    displayOrder: input.displayOrder,
    featured: false,
    status: "AVAILABLE",
    accent: "cyan",
    architecture: "Project architecture details can be added to the project record as this portfolio grows.",
    features: [],
  };
}

export async function listProjects(featuredOnly = false) {
  return prisma.project.findMany({
    where: featuredOnly ? { featured: true } : undefined,
    orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
  });
}
