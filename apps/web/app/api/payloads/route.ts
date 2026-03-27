export const dynamic = "force-dynamic";
const LLMGUARDT2_URL = process.env.LLMGUARDT2_INTERNAL_URL ?? "http://localhost:5000";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const url = category
    ? `${LLMGUARDT2_URL}/api/payloads?category=${category}`
    : `${LLMGUARDT2_URL}/api/payloads`;

  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) return Response.json([], { status: 200 });
  const data = await res.json();
  return Response.json(data);
}
