import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { TagBadge } from "@/components/shared/GlowBadge";
import { ArrowLeft, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.description };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-mono text-2xl font-bold text-terminal-green mt-8 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-mono text-xl font-bold text-terminal-green mt-6 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-mono text-lg font-bold text-terminal-cyan mt-5 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-mono text-sm text-terminal-text leading-relaxed mb-4" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-xs bg-terminal-surface border border-terminal-border rounded px-1.5 py-0.5 text-terminal-cyan" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-terminal-surface border border-terminal-border rounded p-4 overflow-x-auto my-4 font-mono text-xs text-terminal-text" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="font-mono text-sm text-terminal-text space-y-1 mb-4 pl-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="before:content-['▶'] before:text-terminal-green before:mr-2 before:text-xs" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-terminal-green pl-4 my-4 text-terminal-muted italic font-mono text-sm" {...props} />
  ),
  hr: () => <hr className="border-terminal-border my-8" />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-terminal-cyan hover:text-terminal-green transition-colors underline underline-offset-2" target="_blank" rel="noopener noreferrer" {...props} />
  ),
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-14 min-h-screen">
      <article className="py-24 px-4 max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to blog
        </Link>

        <header className="mb-10">
          {post.meta.week && (
            <div className="font-mono text-terminal-green text-sm mb-2">WEEK {post.meta.week}</div>
          )}
          <h1 className="font-mono text-3xl font-bold text-terminal-text mb-4">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-1.5 font-mono text-xs text-terminal-muted">
              <Calendar size={12} />
              {formatDate(post.meta.date)}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {post.meta.tags.map((tag) => <TagBadge key={tag} tag={tag} />)}
            </div>
          </div>
        </header>

        <div className="border-t border-terminal-border pt-8">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
