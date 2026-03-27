export const dynamic = "force-dynamic";
const LLMGUARDT2_URL = process.env.LLMGUARDT2_INTERNAL_URL ?? "http://localhost:5000";

export async function GET() {
  let scannerStatus: "ok" | "down" = "down";
  try {
    const res = await fetch(`${LLMGUARDT2_URL}/api/health`, {
      signal: AbortSignal.timeout(3000),
    });
    if (res.ok) scannerStatus = "ok";
  } catch {
    scannerStatus = "down";
  }

  const anthropicKey = !!process.env.ANTHROPIC_API_KEY;
  const openaiKey = !!process.env.OPENAI_API_KEY;

  return Response.json({
    status: scannerStatus === "ok" ? "ok" : "degraded",
    services: {
      llmguardt2: scannerStatus,
      anthropic_key: anthropicKey,
      openai_key: openaiKey,
    },
  });
}
