import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listProjects, projectInputSchema, toProjectRecord } from "@/lib/projects";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const projects = await listProjects();
  return NextResponse.json(projects);
}

export async function POST(request: NextRequest) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: "Sign in to manage projects." }, { status: 401 });
  const parsed = projectInputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Check the project fields and try again.", details: parsed.error.flatten() }, { status: 400 });
  try {
    const project = await prisma.project.create({ data: toProjectRecord(parsed.data) });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "P2002") return NextResponse.json({ error: "A project with this title already exists. Choose a different title." }, { status: 409 });
    throw error;
  }
}
