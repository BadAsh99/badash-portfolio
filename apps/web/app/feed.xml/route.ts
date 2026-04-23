import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://badash99.dev";
const SITE_TITLE = "BadAsh Security Lab";
const SITE_DESCRIPTION = "AI security, red team research, and the Panorama → SCM migration grind. BadAshWednesdays every week.";
const AUTHOR = "Ash Clements";

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const categories = post.tags.map((t) => `<category>${escXml(t)}</category>`).join("\n      ");

      return `
    <item>
      <title>${escXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escXml(post.description)}</description>
      ${categories}
    </item>`;
    })
    .join("");

  const lastBuild = posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${SITE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>${AUTHOR}</managingEditor>
    <webMaster>${AUTHOR}</webMaster>${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}

function escXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
