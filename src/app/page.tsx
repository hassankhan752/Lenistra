import Portfolio from "@/components/Portfolio";
import { listProjects } from "@/lib/projects";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const projects = await listProjects();
  return <Portfolio projects={projects}/>;
}
