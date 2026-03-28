import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProPostBySlug, getAllProPosts } from "@/lib/pro-blog";
import { TagBadge } from "@/components/shared/GlowBadge";
import { ArrowLeft, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return getAllProPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getProPostBySlug(slug);
  if (!post) return {};
  return { title: post.meta.title, description: post.meta.description };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="font-sans text-2xl font-semibold text-terminal-text mt-10 mb-4" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="font-sans text-xl font-semibold text-terminal-text mt-8 mb-3" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="font-sans text-base font-semibold text-[#0080ff] mt-6 mb-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="font-sans text-sm text-terminal-text leading-relaxed mb-5" {...props} />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code className="font-mono text-xs bg-terminal-surface border border-terminal-border rounded px-1.5 py-0.5 text-[#0080ff]" {...props} />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre className="bg-terminal-surface border border-terminal-border rounded p-4 overflow-x-auto my-5 font-mono text-xs text-terminal-text" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="font-sans text-sm text-terminal-text space-y-2 mb-5 pl-4" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="before:content-['—'] before:text-terminal-muted before:mr-2" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="border-l-2 border-[#0080ff] pl-5 my-6 text-terminal-muted font-sans text-sm italic" {...props} />
  ),
  hr: () => <hr className="border-terminal-border my-10" />,
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className="text-[#0080ff] hover:text-white transition-colors underline underline-offset-2" target="_blank" rel="noopener noreferrer" {...props} />
  ),
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function ProBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getProPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="pt-16 min-h-screen">
      <article className="py-20 px-6 max-w-3xl mx-auto">
        <Link
          href="/pro/blog"
          className="inline-flex items-center gap-2 font-sans text-sm text-terminal-muted hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={14} />
          Signal / Noise
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={12} className="text-terminal-dim" />
            <span className="font-sans text-xs text-terminal-dim">{formatDate(post.meta.date)}</span>
          </div>
          <h1 className="font-sans text-3xl font-semibold text-terminal-text tracking-tight mb-4">
            {post.meta.title}
          </h1>
          <p className="font-sans text-terminal-muted text-base leading-relaxed mb-5">
            {post.meta.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {post.meta.tags.map((tag) => <TagBadge key={tag} tag={tag} />)}
          </div>
        </header>

        <div className="border-t border-terminal-border pt-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>
    </div>
  );
}
