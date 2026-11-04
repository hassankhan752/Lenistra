import { NextRequest, NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { projectInputSchema, toProjectRecord } from "@/lib/projects";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

type Context = { params: Promise<{ id: string }> };

export async function PATCH(request: NextRequest, { params }: Context) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: "Sign in to manage projects." }, { status: 401 });
  const { id } = await params;
  const parsed = projectInputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Check the project fields and try again.", details: parsed.error.flatten() }, { status: 400 });
  const record = parsed.data;
  try {
    const project = await prisma.project.update({
      where: { id },
      data: {
        title: record.title,
        subtitle: record.subtitle,
        category: record.category,
        description: record.description,
        techStack: record.techStack,
        liveDemoUrl: record.liveDemoUrl || null,
        githubUrl: record.githubUrl || null,
        displayOrder: record.displayOrder,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "P2025") return NextResponse.json({ error: "Project not found." }, { status: 404 });
    throw error;
  }
}

export async function DELETE(_request: NextRequest, { params }: Context) {
  if (!await isAdminAuthenticated()) return NextResponse.json({ error: "Sign in to manage projects." }, { status: 401 });
  const { id } = await params;
  try {
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ deleted: true });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "P2025") return NextResponse.json({ error: "Project not found." }, { status: 404 });
    throw error;
  }
}
