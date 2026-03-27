import { rateLimit, getClientIP } from "@/lib/rate-limit";

const LLMGUARDT2_URL = process.env.LLMGUARDT2_INTERNAL_URL ?? "http://localhost:5000";

export async function POST(req: Request) {
  const ip = getClientIP(req);
  const limit = rateLimit(`scan:${ip}`, 3, 60 * 60 * 1000); // 3 scans/hr

  if (!limit.allowed) {
    return Response.json(
      { error: "Rate limit exceeded. Try again later.", resetAt: limit.resetAt },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const provider = (body.provider as string) || "anthropic";
  const apiKey =
    provider === "openai"
      ? process.env.OPENAI_API_KEY
      : process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "Scanner API key not configured" }, { status: 503 });
  }

  const upstream = await fetch(`${LLMGUARDT2_URL}/api/scan`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
      api_key: apiKey,
      delay: body.delay ?? 0.3,
    }),
  });

  if (!upstream.ok || !upstream.body) {
    return Response.json({ error: "Scanner service unavailable" }, { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
