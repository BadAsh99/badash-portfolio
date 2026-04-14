"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/projects-data";
import { TagBadge } from "@/components/shared/GlowBadge";
import { ExternalLink, GitBranch, Star, Clock, CheckCircle, AlertCircle, Circle, ChevronRight } from "lucide-react";

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  language: string | null;
}

function statusDot(status: string) {
  if (status === "active") return <CheckCircle size={12} className="text-terminal-green" />;
  if (status === "wip") return <AlertCircle size={12} className="text-yellow-400" />;
  return <Circle size={12} className="text-terminal-green/60" />;
}

function statusLabel(status: string) {
  if (status === "active") return { text: "ACTIVE", cls: "text-terminal-green border-terminal-green/30" };
  if (status === "wip") return { text: "WIP", cls: "text-yellow-400 border-yellow-400/30" };
  return { text: "STABLE", cls: "text-terminal-cyan border-terminal-cyan/30" };
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

function GHStats({ gh }: { gh: GitHubRepo }) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs text-terminal-dim border-t border-terminal-border pt-2 mt-auto">
      <span className="flex items-center gap-1"><Star size={11} /> {gh.stargazers_count}</span>
      <span className="flex items-center gap-1"><GitBranch size={11} /> {gh.forks_count}</span>
      <span className="flex items-center gap-1 ml-auto"><Clock size={11} /> {timeAgo(gh.pushed_at)}</span>
    </div>
  );
}

// Featured card — spans 2 cols or is a tall single col; shows highlights
function FeaturedCard({ project, gh, wide }: { project: typeof projects[0]; gh?: GitHubRepo; wide?: boolean }) {
  const sl = statusLabel(project.status);
  const href = project.pageUrl ?? project.githubUrl;
  const isExternal = !project.pageUrl;
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`glass-card p-5 flex flex-col gap-4 group hover:border-terminal-green/40 transition-all${wide ? " lg:col-span-2" : ""}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2">
            {statusDot(project.status)}
            <span className="font-mono font-bold text-base text-terminal-green group-hover:text-glow-green truncate">
              {project.name}
            </span>
            <span className={`font-mono text-xs px-1.5 py-0.5 rounded border ${sl.cls} shrink-0`}>
              {sl.text}
            </span>
          </div>
          <p className="font-mono text-xs text-terminal-muted leading-relaxed">
            {project.description}
          </p>
        </div>
        <ExternalLink size={14} className="shrink-0 text-terminal-dim group-hover:text-terminal-green transition-colors mt-0.5" />
      </div>

      <div className="flex-1 space-y-1.5">
        {project.highlights.map((h) => (
          <div key={h} className="flex items-start gap-2 font-mono text-xs text-terminal-text">
            <ChevronRight size={11} className="text-terminal-green shrink-0 mt-0.5" />
            <span>{h}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, wide ? 5 : 3).map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {gh && <GHStats gh={gh} />}
    </a>
  );
}

// Compact card — single col, no highlights
function CompactCard({ project, gh }: { project: typeof projects[0]; gh?: GitHubRepo }) {
  const sl = statusLabel(project.status);
  const href = project.pageUrl ?? project.githubUrl;
  const isExternal = !project.pageUrl;
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="glass-card p-4 flex flex-col gap-3 group hover:border-terminal-green/40 transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          {statusDot(project.status)}
          <span className="font-mono font-bold text-sm text-terminal-green group-hover:text-glow-green truncate">
            {project.name}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className={`font-mono text-xs px-1.5 py-0.5 rounded border ${sl.cls}`}>{sl.text}</span>
          <ExternalLink size={12} className="text-terminal-dim group-hover:text-terminal-green transition-colors" />
        </div>
      </div>

      <p className="font-mono text-xs text-terminal-muted leading-relaxed flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1">
        {project.tags.slice(0, 3).map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {gh && <GHStats gh={gh} />}
    </a>
  );
}

export function ProjectsSection() {
  const [githubData, setGithubData] = useState<Record<string, GitHubRepo>>({});

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then(({ repos }: { repos: GitHubRepo[] }) => {
        const map: Record<string, GitHubRepo> = {};
        repos.forEach((r) => { map[r.name.toLowerCase()] = r; });
        setGithubData(map);
      })
      .catch(() => {});
  }, []);

  const getGH = (id: string) =>
    githubData[id.toLowerCase()] ?? githubData[id.replace(/-/g, "").toLowerCase()];

  const [killchain, llmguardt2, cloudguard, ...rest] = projects;

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute rounded-full pointer-events-none" style={{ top: 0, right: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(0,102,255,0.10) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ bottom: "10%", left: "-5%", width: "300px", height: "300px", background: "radial-gradient(circle, rgba(204,0,0,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="mb-10">
        <div className="font-mono text-terminal-cyan text-sm mb-2">{"// ARSENAL"}</div>
        <h2 className="text-3xl font-bold font-mono text-terminal-text">
          <span className="text-terminal-green">Security</span> Tooling
        </h2>
        <p className="text-terminal-muted font-mono text-sm mt-2">
          Built at the intersection of PAN-OS, GenAI, and cloud. Not demos — production scanners.
        </p>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Row 1: badash-killchain (wide) + llmguardt2 */}
        <FeaturedCard project={killchain} gh={getGH(killchain.id)} wide />
        <FeaturedCard project={llmguardt2} gh={getGH(llmguardt2.id)} />

        {/* Row 2: cloudguard + first compact */}
        <FeaturedCard project={cloudguard} gh={getGH(cloudguard.id)} />

        {/* Row 3: compact rest */}
        {rest.map((p) => (
          <CompactCard key={p.id} project={p} gh={getGH(p.id)} />
        ))}
      </div>
    </section>
  );
}
