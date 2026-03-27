import { rateLimit, getClientIP } from "@/lib/rate-limit";
import Anthropic from "@anthropic-ai/sdk";

// Inline injection detector — fast, no llmguardt2 call needed
const INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?(previous|prior|above|earlier)\s+instructions?/i,
  /forget\s+(your\s+)?(role|instructions?|prompt|context)/i,
  /you\s+are\s+now\s+(a\s+)?(?!an?\s+assistant)/i,
  /act\s+as\s+(if\s+you\s+are\s+)?(?!an?\s+assistant)/i,
  /system\s*prompt/i,
  /\[system\]/i,
  /jailbreak/i,
  /override\s+(your\s+)?(instructions?|rules?|guidelines?)/i,
  /do\s+anything\s+now/i,
  /DAN\s+mode/i,
  /pretend\s+(you\s+are|to\s+be)/i,
  /reveal\s+(your\s+)?(system\s+)?prompt/i,
  /disregard\s+(all\s+)?(previous\s+)?instructions?/i,
  /new\s+instructions?:/i,
  /\}\}\s*\{\{/,
  /<\|im_start\|>/i,
  /\[INST\]/i,
  /###\s*instruction/i,
  /sudo\s+mode/i,
  /developer\s+mode/i,
];

function detectInjection(text: string): { detected: boolean; patterns: string[]; riskLevel: "none" | "low" | "medium" | "high" } {
  const matched: string[] = [];
  for (const pattern of INJECTION_PATTERNS) {
    if (pattern.test(text)) {
      matched.push(pattern.source.replace(/\\s\+/g, " ").replace(/[\\/^$]/g, "").substring(0, 50));
    }
  }
  const count = matched.length;
  return {
    detected: count > 0,
    patterns: matched,
    riskLevel: count === 0 ? "none" : count === 1 ? "low" : count <= 3 ? "medium" : "high",
  };
}

export async function POST(req: Request) {
  const ip = getClientIP(req);
  const limit = rateLimit(`sandbox:${ip}`, 20, 60 * 60 * 1000);
  if (!limit.allowed) {
    return Response.json({ error: "Rate limit exceeded" }, { status: 429 });
  }

  let body: { system_prompt?: string; user_message: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.user_message?.trim()) {
    return Response.json({ error: "user_message is required" }, { status: 400 });
  }

  const detection = detectInjection(body.user_message);

  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: "API key not configured" }, { status: 503 });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const messages = await client.messages.create({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 1024,
    system: body.system_prompt || "You are a helpful assistant in a security demonstration. Respond naturally to the user's message.",
    messages: [{ role: "user", content: body.user_message }],
  });

  const responseText =
    messages.content[0].type === "text" ? messages.content[0].text : "";

  return Response.json({
    claude_response: responseText,
    injection_detected: detection.detected,
    risk_level: detection.riskLevel,
    detected_patterns: detection.patterns,
    confidence: Math.min(100, detection.patterns.length * 25),
  });
}
