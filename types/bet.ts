export interface Bet {
  id: string;
  title: string;
  description: string;
  amount: number;
  odds: number;
  status: 'pending' | 'won' | 'lost';
  createdAt: Date;
  resolvedAt?: Date;
  potentialWin: number;
  sport?: string;
  category?: string;
}

export interface BetFilter {
  status?: 'all' | 'pending' | 'won' | 'lost';
  sport?: string;
  dateFrom?: Date;
  dateTo?: Date;
}