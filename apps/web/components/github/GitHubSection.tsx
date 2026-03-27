"use client";

import { useEffect, useState } from "react";
import { ExternalLink, GitCommit, GitPullRequest, AlertCircle } from "lucide-react";
import type { GitHubEvent } from "@/lib/github";

function eventIcon(type: string) {
  if (type === "PushEvent") return <GitCommit size={14} className="text-terminal-green shrink-0" />;
  if (type === "PullRequestEvent") return <GitPullRequest size={14} className="text-terminal-cyan shrink-0" />;
  return <AlertCircle size={14} className="text-terminal-muted shrink-0" />;
}

function eventDescription(event: GitHubEvent): string {
  const repo = event.repo.name.replace("BadAsh99/", "");
  if (event.type === "PushEvent") {
    const count = (event.payload?.commits as unknown[])?.length ?? 1;
    return `Pushed ${count} commit${count > 1 ? "s" : ""} to ${repo}`;
  }
  if (event.type === "PullRequestEvent") {
    return `PR ${event.payload?.action ?? "opened"} in ${repo}`;
  }
  if (event.type === "CreateEvent") {
    return `Created ${event.payload?.ref_type ?? "ref"} in ${repo}`;
  }
  if (event.type === "WatchEvent") return `Starred ${repo}`;
  return `${event.type?.replace("Event", "")} in ${repo}`;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(hours / 24);
  if (hours < 1) return "just now";
  if (hours < 24) return `${hours}h ago`;
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

export function GitHubSection() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [profile, setProfile] = useState<{ public_repos: number; followers: number } | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then(({ events, profile }) => {
        setEvents(events.slice(0, 10));
        setProfile(profile);
      })
      .catch(() => {});
  }, []);

  return (
    <section id="github" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="mb-10">
        <div className="font-mono text-terminal-green text-sm mb-2">{"// SECTION 05"}</div>
        <h2 className="text-3xl font-bold font-mono text-terminal-text">
          GitHub <span className="text-terminal-green">Activity</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Stats */}
        <div className="terminal-chrome p-6 flex flex-col items-center justify-center gap-4">
          <a
            href="https://github.com/BadAsh99"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group"
          >
            <ExternalLink size={24} className="text-terminal-green group-hover:animate-glow-pulse" />
            <div>
              <div className="font-mono font-bold text-terminal-green text-glow-green">@BadAsh99</div>
              <div className="font-mono text-xs text-terminal-muted">Ash Clements</div>
            </div>
          </a>
          {profile && (
            <div className="flex gap-8 font-mono text-sm">
              <div className="text-center">
                <div className="text-terminal-green font-bold">{profile.public_repos}</div>
                <div className="text-terminal-muted text-xs">repos</div>
              </div>
              <div className="text-center">
                <div className="text-terminal-cyan font-bold">{profile.followers}</div>
                <div className="text-terminal-muted text-xs">followers</div>
              </div>
            </div>
          )}
          <img
            src={`https://github-readme-stats.vercel.app/api?username=BadAsh99&show_icons=true&theme=dark&bg_color=111111&title_color=00ff41&icon_color=00d4ff&text_color=e0e0e0&border_color=1f1f1f&hide_border=false&count_private=true`}
            alt="GitHub stats"
            className="w-full rounded"
          />
        </div>

        {/* Activity feed */}
        <div className="md:col-span-2 terminal-chrome p-4">
          <div className="font-mono text-xs text-terminal-muted mb-4">RECENT ACTIVITY</div>
          <div className="space-y-3">
            {events.length === 0 && (
              <div className="text-center py-8 text-terminal-dim font-mono text-sm">Loading...</div>
            )}
            {events.map((event) => (
              <div key={event.id} className="flex items-start gap-3 py-2 border-b border-terminal-border last:border-0">
                {eventIcon(event.type)}
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-terminal-text truncate">
                    {eventDescription(event)}
                  </div>
                </div>
                <div className="font-mono text-xs text-terminal-dim shrink-0">
                  {timeAgo(event.created_at)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
