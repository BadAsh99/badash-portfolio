const GITHUB_USERNAME = "BadAsh99";
const BASE_URL = "https://api.github.com";

function githubHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
  topics: string[];
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: { name: string; url: string };
  payload: Record<string, unknown>;
  created_at: string;
}

export async function getRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=12&type=public`,
    { headers: githubHeaders(), next: { revalidate: 300 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getEvents(): Promise<GitHubEvent[]> {
  const res = await fetch(
    `${BASE_URL}/users/${GITHUB_USERNAME}/events/public?per_page=20`,
    { headers: githubHeaders(), next: { revalidate: 300 } }
  );
  if (!res.ok) return [];
  return res.json();
}

export async function getProfile() {
  const res = await fetch(`${BASE_URL}/users/${GITHUB_USERNAME}`, {
    headers: githubHeaders(),
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}
