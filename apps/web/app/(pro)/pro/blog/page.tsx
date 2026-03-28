import type { Metadata } from "next";
import Link from "next/link";
import { getAllProPosts, getAllProTags } from "@/lib/pro-blog";
import { TagBadge } from "@/components/shared/GlowBadge";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Signal / Noise",
  description: "Practitioner takes on AI security, SASE architecture, and enterprise deployment. No vendor hype — just what's actually working in the field.",
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function ProBlogPage() {
  const posts = getAllProPosts();
  const tags = getAllProTags();

  return (
    <div className="pt-16 min-h-screen">
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <div className="mb-12">
          <p className="font-sans text-xs text-[#0080ff] uppercase tracking-widest mb-3">Publication</p>
          <h1 className="font-sans text-4xl font-semibold text-terminal-text tracking-tight">
            Signal <span className="text-terminal-muted font-light">/</span> Noise
          </h1>
          <p className="font-sans text-terminal-muted text-base mt-3 max-w-xl leading-relaxed">
            Practitioner takes on AI security, SASE, and enterprise deployment.
            No vendor hype — just what{"'"}s actually working in the field.
          </p>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-5">
              {tags.map((t) => <TagBadge key={t} tag={t} />)}
            </div>
          )}
        </div>

        {posts.length === 0 ? (
          <div className="border border-terminal-border rounded p-8 text-center">
            <p className="font-sans text-terminal-muted text-sm">First post coming soon.</p>
          </div>
        ) : (
          <div className="space-y-px">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/pro/blog/${post.slug}`}
                className="group block border-b border-terminal-border py-7 hover:pl-2 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar size={11} className="text-terminal-dim" />
                  <span className="font-sans text-xs text-terminal-dim">{formatDate(post.date)}</span>
                </div>
                <h2 className="font-sans text-lg font-semibold text-terminal-text group-hover:text-white transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="font-sans text-sm text-terminal-muted leading-relaxed mb-3">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((t) => <TagBadge key={t} tag={t} />)}
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
