import { useMemo } from "react";
import type { PortfolioData } from "../types";
import { portfolioData } from "../data/portfolio";

export function usePortfolioData(): { data: PortfolioData } {
  return useMemo(() => ({
    data: portfolioData
  }), []);
}
