import { getRepos, getEvents, getProfile } from "@/lib/github";

export async function GET() {
  const [repos, events, profile] = await Promise.all([
    getRepos(),
    getEvents(),
    getProfile(),
  ]);

  return Response.json({ repos, events, profile });
}
