const API_BASE = import.meta.env.VITE_API_BASE_URL;

async function fetchJSON<T>(path: string, signal?: AbortSignal): Promise<T> {
  if (!API_BASE) throw new Error("VITE_API_BASE_URL is not set");
  const res = await fetch(`${API_BASE}${path}`, { signal });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${path}`);
  return res.json() as Promise<T>;
}

export const api = {
  profile: (signal?: AbortSignal) => fetchJSON("/api/profile", signal),
  skills: (signal?: AbortSignal) => fetchJSON("/api/skills", signal),
  projects: (signal?: AbortSignal) => fetchJSON("/api/projects", signal),
  experience: (signal?: AbortSignal) => fetchJSON("/api/experience", signal),
  education: (signal?: AbortSignal) => fetchJSON("/api/education", signal)
};
