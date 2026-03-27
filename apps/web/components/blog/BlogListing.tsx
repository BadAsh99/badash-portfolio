"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { TagBadge } from "@/components/shared/GlowBadge";
import { Search, Calendar } from "lucide-react";

interface Props {
  posts: PostMeta[];
  tags: string[];
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function BlogListing({ posts, tags }: Props) {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      const matchesTags =
        activeTags.size === 0 || p.tags.some((t) => activeTags.has(t));
      return matchesQuery && matchesTags;
    });
  }, [posts, query, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) { next.delete(tag); } else { next.add(tag); }
      return next;
    });
  };

  return (
    <div>
      {/* Search */}
      <div className="relative mb-4">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-terminal-muted" />
        <input
          type="text"
          placeholder="Search posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-terminal-surface border border-terminal-border rounded pl-9 pr-4 py-2 font-mono text-sm text-terminal-text placeholder-terminal-dim focus:border-terminal-green focus:outline-none transition-colors"
        />
      </div>

      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`text-xs font-mono px-2 py-1 rounded border transition-colors ${
              activeTags.has(tag)
                ? "border-terminal-green text-terminal-green bg-green-950/20"
                : "border-terminal-border text-terminal-muted hover:border-terminal-dim"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {filtered.length === 0 && (
          <div className="text-center py-16 font-mono text-sm text-terminal-muted">
            No posts found.
          </div>
        )}
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block terminal-chrome p-5 hover:border-terminal-green/40 transition-colors group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {post.week && (
                  <div className="font-mono text-xs text-terminal-green mb-1">WEEK {post.week}</div>
                )}
                <h2 className="font-mono font-bold text-terminal-text group-hover:text-terminal-green transition-colors truncate">
                  {post.title}
                </h2>
                <p className="font-mono text-xs text-terminal-muted mt-1 leading-relaxed line-clamp-2">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {post.tags.map((tag) => <TagBadge key={tag} tag={tag} />)}
                </div>
              </div>
              <div className="flex items-center gap-1 font-mono text-xs text-terminal-dim shrink-0">
                <Calendar size={12} />
                {formatDate(post.date)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
