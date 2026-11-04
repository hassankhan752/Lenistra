"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, Check, Code2, ExternalLink, LoaderCircle, LogOut, Pencil, Plus, Shield, Trash2, X } from "lucide-react";

type Project = {
  id: string; title: string; subtitle: string; category: string; description: string;
  techStack: string[]; liveDemoUrl: string | null; githubUrl: string | null; displayOrder: number;
};

type FormState = Omit<Project, "id"> & { id?: string; techStackText: string };
const blankForm: FormState = { title: "", subtitle: "", category: "", description: "", techStack: [], techStackText: "", liveDemoUrl: "", githubUrl: "", displayOrder: 1 };

async function responseError(response: Response) {
  const data = await response.json().catch(() => ({}));
  return typeof data.error === "string" ? data.error : "Something went wrong. Please try again.";
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [form, setForm] = useState<FormState | null>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");

  const loadProjects = useCallback(async () => {
    const response = await fetch("/api/projects", { cache: "no-store" });
    if (response.ok) setProjects(await response.json());
  }, []);

  useEffect(() => {
    fetch("/api/admin/session", { cache: "no-store" }).then((response) => response.json()).then(async (data) => {
      setAuthenticated(Boolean(data.authenticated));
      if (data.authenticated) await loadProjects();
    }).finally(() => setChecking(false));
  }, [loadProjects]);

  async function signIn(event: FormEvent) {
    event.preventDefault(); setLoginError(""); setBusy(true);
    try {
      const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password }) });
      if (!response.ok) throw new Error(await responseError(response));
      setAuthenticated(true); setPassword(""); await loadProjects();
    } catch (cause) { setLoginError(cause instanceof Error ? cause.message : "Unable to sign in."); }
    finally { setBusy(false); }
  }

  async function signOut() {
    await fetch("/api/admin/logout", { method: "POST" }); setAuthenticated(false); setProjects([]); setForm(null);
  }

  function editProject(project: Project) {
    setError(""); setNotice("");
    setForm({ ...project, liveDemoUrl: project.liveDemoUrl ?? "", githubUrl: project.githubUrl ?? "", techStackText: project.techStack.join(", ") });
  }

  async function saveProject(event: FormEvent) {
    event.preventDefault(); if (!form) return;
    setBusy(true); setError(""); setNotice("");
    const payload = { title: form.title, subtitle: form.subtitle, category: form.category, description: form.description, techStack: form.techStackText.split(",").map((tag) => tag.trim()).filter(Boolean), liveDemoUrl: form.liveDemoUrl, githubUrl: form.githubUrl, displayOrder: Number(form.displayOrder) };
    try {
      const response = await fetch(form.id ? `/api/projects/${form.id}` : "/api/projects", { method: form.id ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error(await responseError(response));
      setForm(null); setNotice(form.id ? "Project updated." : "Project created."); await loadProjects();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "Unable to save project."); }
    finally { setBusy(false); }
  }

  async function removeProject(project: Project) {
    if (!window.confirm(`Delete “${project.title}”? This cannot be undone.`)) return;
    setError(""); setNotice("");
    const response = await fetch(`/api/projects/${project.id}`, { method: "DELETE" });
    if (!response.ok) { setError(await responseError(response)); return; }
    setNotice(`${project.title} deleted.`); await loadProjects();
  }

  if (checking) return <main className="grid min-h-screen place-items-center bg-ink text-slate-400"><LoaderCircle size={22} className="animate-spin"/></main>;
  if (!authenticated) return <main className="relative grid min-h-screen place-items-center overflow-hidden bg-ink px-5"><div className="grid-noise absolute inset-0"/><div className="pointer-events-none absolute h-80 w-80 rounded-full bg-cyan-300/[.07] blur-[110px]"/><div className="glass relative w-full max-w-[420px] rounded-3xl p-7 md:p-9"><a href="/" className="mb-10 inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-slate-200"><ArrowLeft size={14}/> Back to portfolio</a><div className="mb-6 grid h-11 w-11 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/[.07] text-cyan-100"><Shield size={19}/></div><p className="font-mono text-[9px] uppercase tracking-[.22em] text-cyan-200/70">Private workspace</p><h1 className="mt-2 text-2xl font-semibold tracking-tight">Welcome back.</h1><p className="mt-2 text-sm leading-6 text-slate-400">Sign in to manage the projects shown on your portfolio.</p><form onSubmit={signIn} className="mt-7 space-y-4"><label className="block text-xs text-slate-300">Admin password<input autoFocus type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-200/40" placeholder="Enter password" required/></label>{loginError && <p role="alert" className="text-xs text-rose-300">{loginError}</p>}<button disabled={busy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-200 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:opacity-60">{busy && <LoaderCircle size={15} className="animate-spin"/>}Sign in <ArrowUpRight size={14}/></button></form><p className="mt-5 font-mono text-[9px] leading-5 text-slate-600">Admin credentials are verified on the server. Sessions expire after 8 hours.</p></div></main>;

  return <main className="min-h-screen bg-ink"><div className="grid-noise pointer-events-none fixed inset-0 opacity-40"/><div className="relative mx-auto min-h-screen max-w-6xl px-5 py-8 md:px-8"><header className="flex items-center justify-between border-b border-white/[.07] pb-6"><a href="/" className="flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-200/[.07] font-mono text-xs font-bold text-cyan-100">HK</span><span><span className="block text-sm font-semibold">Portfolio CMS</span><span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[.15em] text-slate-500">Admin workspace</span></span></a><div className="flex items-center gap-2"><a href="/" className="hidden items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 transition hover:text-white sm:flex">View site <ExternalLink size={12}/></a><button onClick={signOut} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 transition hover:border-rose-200/20 hover:text-rose-200"><LogOut size={13}/> Sign out</button></div></header>
    <div className="mt-10 flex flex-wrap items-end justify-between gap-5"><div><p className="mb-2 font-mono text-[10px] uppercase tracking-[.22em] text-cyan-200/70">Content management</p><h1 className="text-3xl font-semibold tracking-[-.04em] md:text-4xl">Your projects<span className="text-cyan-200">.</span></h1><p className="mt-2 text-sm text-slate-500">Manage the work visitors see on your homepage.</p></div><button onClick={() => { setForm({ ...blankForm, displayOrder: projects.length + 1 }); setError(""); setNotice(""); }} className="inline-flex items-center gap-2 rounded-xl bg-cyan-200 px-4 py-3 text-xs font-semibold text-slate-950 transition hover:bg-cyan-100"><Plus size={15}/> Add project</button></div>
    {notice && <div role="status" className="mt-6 flex items-center gap-2 rounded-xl border border-emerald-300/15 bg-emerald-300/[.05] px-4 py-3 text-xs text-emerald-100"><Check size={14}/>{notice}</div>}{error && <div role="alert" className="mt-6 rounded-xl border border-rose-300/15 bg-rose-300/[.05] px-4 py-3 text-xs text-rose-100">{error}</div>}
    <section className="mt-8 space-y-3">{projects.length === 0 && <div className="glass rounded-2xl px-6 py-12 text-center"><Code2 size={22} className="mx-auto text-slate-500"/><p className="mt-3 text-sm text-slate-300">No projects yet</p><p className="mt-1 text-xs text-slate-500">Add a project to start building out your portfolio.</p></div>}{projects.map((project) => <article key={project.id} className="glass flex flex-wrap items-center justify-between gap-4 rounded-2xl p-4 md:p-5"><div className="flex min-w-0 items-center gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/[.07] bg-white/[.03] font-mono text-xs text-cyan-100">{String(project.displayOrder).padStart(2, "0")}</span><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="truncate text-sm font-semibold">{project.title}</h2><span className="rounded-full border border-white/[.08] px-2 py-0.5 font-mono text-[8px] uppercase tracking-wide text-slate-500">{project.category}</span></div><p className="mt-1 truncate text-xs text-slate-500">{project.subtitle}</p><div className="mt-2 flex flex-wrap gap-1.5">{project.techStack.slice(0, 5).map((tag) => <span key={tag} className="font-mono text-[9px] text-slate-600">{tag}</span>)}</div></div></div><div className="flex shrink-0 items-center gap-2"><button onClick={() => editProject(project)} className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-200/20 hover:text-cyan-100"><Pencil size={12}/> Edit</button><button aria-label={`Delete ${project.title}`} onClick={() => removeProject(project)} className="rounded-lg border border-white/10 p-2 text-slate-500 transition hover:border-rose-300/20 hover:text-rose-200"><Trash2 size={14}/></button></div></article>)}</section>
    <div className="mt-6 flex items-center gap-2 text-[10px] text-slate-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300"/>{projects.length} {projects.length === 1 ? "project" : "projects"} in your portfolio <span className="text-slate-700">·</span> Changes publish as soon as they&apos;re saved</div>
  </div>
  {form && <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-5" role="dialog" aria-modal="true" aria-labelledby="project-form-title"><div className="glass max-h-[94vh] w-full max-w-[680px] overflow-y-auto rounded-t-3xl p-5 sm:rounded-3xl md:p-7"><div className="mb-6 flex items-start justify-between"><div><p className="font-mono text-[9px] uppercase tracking-[.2em] text-cyan-200/70">Project details</p><h2 id="project-form-title" className="mt-1 text-xl font-semibold">{form.id ? "Edit project" : "Add a project"}</h2></div><button onClick={() => setForm(null)} aria-label="Close form" className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white"><X size={15}/></button></div>
    <form onSubmit={saveProject} className="space-y-4"><div className="grid gap-4 sm:grid-cols-2">{([["title", "Title", "JARVIS"], ["subtitle", "Subtitle", "An intelligent command layer"], ["category", "Category", "AI SYSTEM AUTOMATION"]] as const).map(([key, label, placeholder]) => <label key={key} className="text-[11px] text-slate-400">{label}<input required value={form[key]} onChange={(event) => setForm({ ...form, [key]: event.target.value })} placeholder={placeholder} className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-xs text-white outline-none focus:border-cyan-200/35"/></label>)}<label className="text-[11px] text-slate-400">Display order<input type="number" min="0" max="999" required value={form.displayOrder} onChange={(event) => setForm({ ...form, displayOrder: Number(event.target.value) })} className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-xs text-white outline-none focus:border-cyan-200/35"/></label></div>
    <label className="block text-[11px] text-slate-400">Description<textarea required minLength={20} maxLength={1600} rows={4} value={form.description} onChange={(event) => setForm({ ...form, description: event.target.value })} placeholder="What does this project do?" className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-xs leading-5 text-white outline-none focus:border-cyan-200/35"/></label>
    <label className="block text-[11px] text-slate-400">Tech stack <span className="text-slate-600">(comma separated)</span><input required value={form.techStackText} onChange={(event) => setForm({ ...form, techStackText: event.target.value })} placeholder="Next.js, TypeScript, PostgreSQL" className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-xs text-white outline-none focus:border-cyan-200/35"/></label>
    <div className="grid gap-4 sm:grid-cols-2"><label className="text-[11px] text-slate-400">Live demo URL<input type="url" value={form.liveDemoUrl ?? ""} onChange={(event) => setForm({ ...form, liveDemoUrl: event.target.value })} placeholder="https://" className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-xs text-white outline-none focus:border-cyan-200/35"/></label><label className="text-[11px] text-slate-400">GitHub URL<input type="url" value={form.githubUrl ?? ""} onChange={(event) => setForm({ ...form, githubUrl: event.target.value })} placeholder="https://github.com/" className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-3.5 py-2.5 text-xs text-white outline-none focus:border-cyan-200/35"/></label></div>
    {error && <p role="alert" className="rounded-lg bg-rose-300/[.06] px-3 py-2 text-xs text-rose-200">{error}</p>}<div className="flex justify-end gap-2 border-t border-white/[.07] pt-4"><button type="button" onClick={() => setForm(null)} className="rounded-lg border border-white/10 px-4 py-2.5 text-xs text-slate-300 hover:bg-white/[.04]">Cancel</button><button disabled={busy} className="inline-flex items-center gap-2 rounded-lg bg-cyan-200 px-4 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:opacity-60">{busy && <LoaderCircle size={13} className="animate-spin"/>}{form.id ? "Save changes" : "Create project"}</button></div></form>
  </div></div>}
  </main>;
}
