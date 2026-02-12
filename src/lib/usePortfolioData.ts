import { useEffect, useMemo, useState } from "react";
import type { PortfolioData } from "../types";
import { portfolioData } from "../data/portfolio";
import { api } from "./api";

type State = { data: PortfolioData; loading: boolean; error: string | null };

export function usePortfolioData(): State {
  const [data, setData] = useState<PortfolioData>(portfolioData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If API base is not set, stay on local data.
    // Force local data for now by adding 'true ||'
    if (true || !import.meta.env.VITE_API_BASE_URL) return;

    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(null);
        const [profile, skills, projects, experience, education] =
          await Promise.all([
            api.profile(controller.signal),
            api.skills(controller.signal),
            api.projects(controller.signal),
            api.experience(controller.signal),
            api.education(controller.signal),
          ]);
        setData({ profile, skills, projects, experience, education });
      } catch (e: any) {
        setError(
          e?.message ?? "Failed to load API; using local fallback data.",
        );
      } finally {
        setLoading(false);
      }
    })();

    return () => controller.abort();
  }, []);

  return useMemo(() => ({ data, loading, error }), [data, loading, error]);
}
