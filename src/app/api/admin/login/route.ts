import { NextRequest, NextResponse } from "next/server";
import { adminCookie, createSessionToken, verifyAdminPassword } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null) as { password?: unknown } | null;
  if (typeof body?.password !== "string" || body.password.length > 256) {
    return NextResponse.json({ error: "Enter your admin password." }, { status: 400 });
  }
  try {
    if (!verifyAdminPassword(body.password)) return NextResponse.json({ error: "That password did not match." }, { status: 401 });
    const response = NextResponse.json({ authenticated: true });
    response.cookies.set(adminCookie.name, createSessionToken(), { ...adminCookie.options, maxAge: adminCookie.maxAge });
    return response;
  } catch (error) {
    console.error("Admin login configuration error", error);
    return NextResponse.json({ error: "Admin access is not configured on the server." }, { status: 503 });
  }
}
