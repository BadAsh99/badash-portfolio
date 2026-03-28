import fs from "fs";
import path from "path";
import matter from "gray-matter";

const PRO_BLOG_DIR = path.join(process.cwd(), "content/pro-blog");

export interface ProPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  draft?: boolean;
}

export function getAllProPosts(): ProPostMeta[] {
  if (!fs.existsSync(PRO_BLOG_DIR)) return [];

  const files = fs.readdirSync(PRO_BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(PRO_BLOG_DIR, filename), "utf-8"));
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
        description: data.description ?? "",
        tags: data.tags ?? [],
        draft: data.draft ?? false,
      } as ProPostMeta;
    })
    .filter((p) => !p.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getProPostBySlug(slug: string): { meta: ProPostMeta; content: string } | null {
  const filePath = path.join(PRO_BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
      description: data.description ?? "",
      tags: data.tags ?? [],
      draft: data.draft ?? false,
    },
    content,
  };
}

export function getAllProTags(): string[] {
  const posts = getAllProPosts();
  const tagSet = new Set<string>();
  posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
