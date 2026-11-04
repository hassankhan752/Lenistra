import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const projects = [
  {
    slug: "jarvis",
    title: "JARVIS",
    subtitle: "An intelligent command layer for everyday work.",
    category: "AI SYSTEM AUTOMATION",
    description: "A personal AI workspace that turns natural language into useful, controlled actions. JARVIS brings voice, tools, and a focused terminal-inspired interface together so complex workflows feel immediate.",
    techStack: ["TypeScript", "Next.js", "OpenAI", "Node.js", "PostgreSQL"],
    liveDemoUrl: null,
    githubUrl: null,
    displayOrder: 1,
    featured: true,
    status: "SYSTEM ONLINE",
    accent: "cyan",
    architecture: "A modular orchestration layer routes requests through intent parsing, permission-aware tools, and a streaming response channel. Persistent preferences and task context are stored separately from execution logs.",
    features: ["Natural language command routing", "Tool-based workflow automation", "Streaming responses with task context", "Permission-aware action execution"],
  },
  {
    slug: "contractlens",
    title: "ContractLens",
    subtitle: "Make the fine print easier to see.",
    category: "AI CONTRACT INTELLIGENCE",
    description: "An AI-assisted contract review workspace that helps teams identify risk, understand obligations, and move through legal documents with more confidence. Clear findings are paired with source context for faster human review.",
    techStack: ["React", "Python", "FastAPI", "OpenAI", "PostgreSQL"],
    liveDemoUrl: null,
    githubUrl: null,
    displayOrder: 2,
    featured: true,
    status: "RISK SCAN READY",
    accent: "violet",
    architecture: "Documents pass through secure ingestion, text extraction, and clause classification before a review model scores each finding. Results retain links to source passages so every risk callout can be checked against the contract.",
    features: ["Clause-by-clause risk analysis", "Evidence-linked findings", "Obligation and date extraction", "Review-ready risk summaries"],
  },
];

async function main() {
  for (const project of projects) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }
}

main().finally(async () => prisma.$disconnect());
