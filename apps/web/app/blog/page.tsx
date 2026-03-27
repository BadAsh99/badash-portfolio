import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/blog";
import { BlogListing } from "@/components/blog/BlogListing";

export const metadata: Metadata = {
  title: "BadAshWednesdays",
  description: "Weekly series tracking the pivot from manual SASE to agentic AI security workflows.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div className="pt-14 min-h-screen">
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="mb-10">
          <div className="font-mono text-terminal-green text-sm mb-2">{"// SECTION 04"}</div>
          <h1 className="text-3xl font-bold font-mono text-terminal-text">
            BadAsh<span className="text-terminal-green">Wednesdays</span>
          </h1>
          <p className="text-terminal-muted font-mono text-sm mt-2 max-w-2xl">
            Weekly log: pivoting from manual SASE ops to agentic AI security workflows. Real builds, real failures, real lessons.
          </p>
        </div>
        <BlogListing posts={posts} tags={tags} />
      </section>
    </div>
  );
}
