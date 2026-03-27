# LLMGuardT2 — Project Context

## What This Is
OWASP LLM Top 10 v2 red-team scanner with semantic attack detection. Uses sentence-transformers (all-MiniLM-L6-v2) to detect paraphrased/obfuscated LLM attacks that bypass pattern-matching tools. Cosine similarity scoring against known attack embeddings.

## Architecture
```
Flask App (app.py, port 5001)
  ├── GET  /                  → Web UI
  ├── GET  /api/categories    → OWASP categories + payload counts
  ├── POST /api/scan          → SSE stream: runs payloads against target LLM endpoint
  └── GET  /api/payloads      → full payload library metadata

scanner.py       — payload library, OWASP category mapping, analyze_response()
semantic_detector.py — sentence-transformer embeddings, cosine similarity scoring
templates/       — UI
```

## Run
```bash
cd /home/parallels/Code/my-dev-environments/llmguardt2
source venv/bin/activate
python app.py
# → http://127.0.0.1:5001
```

## Key Capabilities
- Semantic detection via all-MiniLM-L6-v2 embeddings — catches paraphrased attacks
- Full OWASP LLM Top 10 v2 coverage (all 10 categories)
- SSE streaming for real-time results
- Rate limiting (in-memory, configurable via env vars RATE_LIMIT_MAX / RATE_LIMIT_WINDOW)
- Docker-ready, GCP Cloud Run compatible

## Current Status (as of 2026-03-23)
- Core scanner: complete and production-ready
- Semantic detector: implemented (all-MiniLM-L6-v2)
- UI: complete
- No known active development — stable

## Key Files
- `app.py` — Flask backend, SSE streaming scan endpoint
- `scanner.py` — payload library, OWASP category mapping, response analysis
- `semantic_detector.py` — transformer embeddings + cosine similarity
- `templates/` — UI

## Relationship to Other Projects
- cloudguard scans cloud infrastructure misconfigurations
- llmguardt2 red-teams LLM endpoints directly
- AIRS framework uses both concepts — gateway-level injection detection + cross-app attack chains
