import { useMemo } from "react";
import type { PortfolioData } from "../types";
import { portfolioData } from "../data/portfolio";

type State = { data: PortfolioData; loading: boolean; error: string | null };

export function usePortfolioData(): State {
  return useMemo(() => ({
    data: portfolioData,
    loading: false,
    error: null,
  }), []);
}
