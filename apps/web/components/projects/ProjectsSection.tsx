"use client";

import { useEffect, useState } from "react";
import { projects } from "@/lib/projects-data";
import { TagBadge } from "@/components/shared/GlowBadge";
import { ExternalLink, GitBranch, Star, Clock, CheckCircle, AlertCircle, Circle } from "lucide-react";

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
  return <Circle size={12} className="text-terminal-cyan" />;
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

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute rounded-full pointer-events-none" style={{ top: 0, right: 0, width: "320px", height: "320px", background: "radial-gradient(circle, rgba(0,102,255,0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute rounded-full pointer-events-none" style={{ bottom: 0, left: 0, width: "260px", height: "260px", background: "radial-gradient(circle, rgba(204,0,0,0.08) 0%, transparent 70%)", filter: "blur(50px)" }} />

      <div className="mb-10">
        <div className="font-mono text-terminal-green text-sm mb-2">{"// SECTION 03"}</div>
        <h2 className="text-3xl font-bold font-mono text-terminal-text">
          <span className="text-terminal-green">Projects</span>
        </h2>
        <p className="text-terminal-muted font-mono text-sm mt-2">
          Security tooling built at the intersection of PAN-OS, GenAI, and cloud.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => {
          const gh = githubData[project.id.toLowerCase()] ?? githubData[project.id.replace(/-/g, "").toLowerCase()];
          return (
            <div
              key={project.id}
              className="glass-card p-4 flex flex-col gap-3 group"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  {statusDot(project.status)}
                  <span className="font-mono font-bold text-sm text-terminal-green group-hover:text-glow-green">
                    {project.name}
                  </span>
                </div>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-dim hover:text-terminal-cyan transition-colors shrink-0"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <p className="font-mono text-xs text-terminal-muted leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <TagBadge key={tag} tag={tag} />
                ))}
              </div>

              {gh && (
                <div className="flex items-center gap-4 font-mono text-xs text-terminal-dim border-t border-terminal-border pt-2 mt-1">
                  <span className="flex items-center gap-1">
                    <Star size={11} /> {gh.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch size={11} /> {gh.forks_count}
                  </span>
                  <span className="flex items-center gap-1 ml-auto">
                    <Clock size={11} /> {timeAgo(gh.pushed_at)}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
