export const dynamic = "force-dynamic";
const LLMGUARDT2_URL = process.env.LLMGUARDT2_INTERNAL_URL ?? "http://localhost:5000";

export async function GET() {
  const res = await fetch(`${LLMGUARDT2_URL}/api/categories`, {
    next: { revalidate: 86400 },
  });
  if (!res.ok) return Response.json([], { status: 200 });
  const data = await res.json();
  return Response.json(data);
}
