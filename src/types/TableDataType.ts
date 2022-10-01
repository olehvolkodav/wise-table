type cheapProviderType = {
  id: number;
  payout: number;
}

type expensiveProviderType = {
  id: number;
  payout: number;
}

export type TableDataType = {
  amount: number;
  cheapProvider: cheapProviderType | null;
  ctaUrl: string;
  expensiveProvider: expensiveProviderType | null;
  providersCount: number;
  source: string;
  target: string;
}